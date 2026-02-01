import { useState } from 'react';
import { PanoramaPage } from './components/PanoramaPage';
import { VideoPage } from './components/VideoPage';
import { GalleryPage } from './components/GalleryPage';
import { Navigation } from './components/Navigation';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'video' | 'panorama' | 'gallery'>('video');

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <div className="flex-1 overflow-hidden">
        {currentPage === 'video' && <VideoPage />}
        {currentPage === 'panorama' && <PanoramaPage />}
        {currentPage === 'gallery' && <GalleryPage />}
      </div>
    </div>
  );
}