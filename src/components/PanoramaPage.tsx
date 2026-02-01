import { PanoramaViewer } from './PanoramaViewer';

// НАСТРОЙТЕ ЗДЕСЬ ВАШИ МАРКЕРЫ
// lon: долгота (-180 до 180), lat: широта (-90 до 90)
// images: массив URL фотографий, title: название маркера
const markers = [
  {
    id: '1',
    lon: -50,
    lat: -5,
    images: [
      '/images/point_table/photo1_1.jpg',
      '/images/point_table/photo1_3.jpg',
      '/images/point_table/photo1_4.jpg',
      '/images/point_table/photo1_6.jpg'
    ],
    title: '',
  },
  {
    id: '2',
    lon: 115,
    lat: -15,
    images: [
      '/images/point_red/photo3_1.jpg',
      '/images/point_red/photo3_2.jpg',
    ],
    title: '',
  },
  {
    id: '3',
    lon: -35,
    lat: -5,
    images: [
      '/images/point_apple/apple1.jpg',
      '/images/point_apple/apple2.jpg',
      '/images/point_apple/apple3.jpg',
      '/images/point_apple/apple4.jpg',
      '/images/point_apple/apple5.jpg',
      '/images/point_apple/apple7.jpg',
      '/images/point_apple/apple9.jpg',
      '/images/point_apple/apple10.jpg',
      '/images/point_apple/apple11.jpg'
    ],
    title: '',
  },
  {
    id: '4',
    lon: 180,
    lat: -10,
    images: [
      '/images/point_bullets/photo_bullets1.jpg',
      '/images/point_bullets/photo_bullets2.jpg',
      '/images/point_bullets/photo_bullets3.jpg',
      '/images/point_bullets/bullet.jpg'
    ],
    title: '',
  },
  {
    id: '5',
    lon: 200,
    lat: -10,
    images: [
      '/images/point_portet/photo_portret3.jpg',
      '/images/point_portet/photo_portret1.jpg',
      '/images/point_portet/photo_portret2.jpg',
      '/images/point_bullets/photo_bullets4.jpg'
    ],
    title: '',
  },
];

// УКАЖИТЕ ЗДЕСЬ ПУТЬ К ВАШЕЙ ПАНОРАМЕ (5120x2560)
const panoramaUrl = '/public/images/panorama_2_test.jpg';

export function PanoramaPage() {
  return (
    <div className="w-full h-full">
      <PanoramaViewer 
        panoramaUrl={panoramaUrl}
        markers={markers}
      />
    </div>
  );
}