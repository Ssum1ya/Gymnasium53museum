import { Maximize2, Video, Images } from 'lucide-react';

interface NavigationProps {
  currentPage: 'video' | 'panorama' | 'gallery';
  onPageChange: (page: 'video' | 'panorama' | 'gallery') => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex">
        <button
          onClick={() => onPageChange('video')}
          className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 transition-colors ${
            currentPage === 'video'
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Video className="w-5 h-5" />
          <span>Приветствие</span>
        </button>
        
        <button
          onClick={() => onPageChange('panorama')}
          className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 transition-colors ${
            currentPage === 'panorama'
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Maximize2 className="w-5 h-5" />
          <span>Панорама 360°</span>
        </button>
        
        <button
          onClick={() => onPageChange('gallery')}
          className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 transition-colors ${
            currentPage === 'gallery'
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Images className="w-5 h-5" />
          <span>Галерея</span>
        </button>
      </div>
    </nav>
  );
}