import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Info } from 'lucide-react';
import { ImageModal } from './ImageModal';

interface Marker {
  id: string;
  lon: number;
  lat: number;
  images: string[];
  title?: string;
}

interface PanoramaViewerProps {
  panoramaUrl: string;
  markers: Marker[];
}

export function PanoramaViewer({ panoramaUrl, markers }: PanoramaViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const markersRef = useRef<THREE.Group | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  
  const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showInstructions, setShowInstructions] = useState(true);
  
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const longitudeRef = useRef(0);
  const latitudeRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowInstructions(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 0.1);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create sphere for panorama
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // Invert sphere so texture is inside

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      panoramaUrl,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        sphereRef.current = sphere;
        setIsLoading(false);
      },
      undefined,
      (error) => {
        console.error('Error loading panorama:', error);
        setIsLoading(false);
      }
    );

    // Create markers
    const markersGroup = new THREE.Group();
    markersRef.current = markersGroup;
    scene.add(markersGroup);

    markers.forEach((marker) => {
      const markerMesh = createMarker(marker);
      markersGroup.add(markerMesh);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update camera position based on longitude and latitude
      const phi = THREE.MathUtils.degToRad(90 - latitudeRef.current);
      const theta = THREE.MathUtils.degToRad(longitudeRef.current);
      
      camera.target = new THREE.Vector3(
        500 * Math.sin(phi) * Math.cos(theta),
        500 * Math.cos(phi),
        500 * Math.sin(phi) * Math.sin(theta)
      );
      
      camera.lookAt(camera.target);
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Mouse events for rotation
    const handleMouseDown = (event: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isDraggingRef.current) {
        const deltaX = event.clientX - previousMousePositionRef.current.x;
        const deltaY = event.clientY - previousMousePositionRef.current.y;
        
        longitudeRef.current += deltaX * 0.1;
        latitudeRef.current -= deltaY * 0.1;
        latitudeRef.current = Math.max(-85, Math.min(85, latitudeRef.current));
        
        previousMousePositionRef.current = {
          x: event.clientX,
          y: event.clientY,
        };
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Click detection for markers
    const handleClick = (event: MouseEvent) => {
      if (!camera || !markersGroup) return;

      const rect = rendererRef.current!.domElement.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(
        markersRef.current.children
      );

      if (intersects.length > 0) {
        const clickedMarker = intersects[0].object;
        const marker = markers.find(m => m.id === clickedMarker.userData.id);
        if (marker) {
          setSelectedMarker(marker);
        }
      }
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement) {
        renderer.domElement.removeEventListener('mousedown', handleMouseDown);
        renderer.domElement.removeEventListener('mousemove', handleMouseMove);
        renderer.domElement.removeEventListener('mouseup', handleMouseUp);
        renderer.domElement.removeEventListener('click', handleClick);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [panoramaUrl, markers]);
  
  const createMarker = (marker: Marker) => {
    // Convert lon/lat to 3D position on sphere
    const phi = THREE.MathUtils.degToRad(90 - marker.lat);
    const theta = THREE.MathUtils.degToRad(marker.lon);
    
    const x = 490 * Math.sin(phi) * Math.cos(theta);
    const y = 490 * Math.cos(phi);
    const z = 490 * Math.sin(phi) * Math.sin(theta);

    // Create marker as a sphere
    const geometry = new THREE.SphereGeometry(5, 16, 16);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xff0000,
      transparent: true,
      opacity: 0.8,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.userData = { id: marker.id };

    // Add white ring around marker
    const ringGeometry = new THREE.RingGeometry(6, 8, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffffff, 
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.copy(mesh.position);
    ring.lookAt(0, 0, 0);
    mesh.add(ring);

    return mesh;
  };

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-800 text-lg">Загрузка панорамы...</p>
          </div>
        </div>
      )}

      {showInstructions && !isLoading && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white shadow-lg text-gray-800 px-6 py-3 rounded-lg z-10 max-w-md text-center border border-gray-200">
          <Info className="w-5 h-5 inline-block mr-2" />
          Перетаскивайте мышью для осмотра. Кликайте на красные маркеры.
          <button
            onClick={() => setShowInstructions(false)}
            className="ml-4 text-blue-600 hover:text-blue-700"
          >
            Понятно
          </button>
        </div>
      )}

      {selectedMarker && (
        <ImageModal
          marker={selectedMarker}
          onClose={() => setSelectedMarker(null)}
        />
      )}
    </div>
  );
}