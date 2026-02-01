import { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

// НАСТРОЙТЕ ЗДЕСЬ ВАШИ ФОТОГРАФИИ
const photos = [
  {
    id: '1',
    url: '/images/all/all (1).jpg',
    title: '',
    description: '',
  },
  {
    id: '2',
    url: '/images/all/all (2).jpg',
    title: '',
    description: '',
  },
  {
    id: '3',
    url: '/images/all/all (3).jpg',
    title: '',
    description: '',
  },
  {
    id: '4',
    url: '/images/all/all (4).jpg',
    title: '',
    description: '',
  },
  {
    id: '5',
    url: '/images/all/all (5).jpg',
    title: '',
    description: '',
  },
  {
    id: '6',
    url: '/images/all/all (6).jpg',
    title: '',
    description: '',
  },
  {
    id: '7',
    url: '/images/all/all (7).jpg',
    title: '',
    description: '',
  },
  {
    id: '8',
    url: '/images/all/all (8).jpg',
    title: '',
    description: '',
  },
  {
    id: '9',
    url: '/images/all/all (9).jpg',
    title: '',
    description: '',
  },
  {
    id: '10',
    url: '/images/all/all (10).jpg',
    title: '',
    description: '',
  },
  {
    id: '11',
    url: '/images/all/all (11).jpg',
    title: '',
    description: '',
  },
  {
    id: '12',
    url: '/images/all/all (12).jpg',
    title: '',
    description: '',
  },
  {
    id: '13',
    url: '/images/all/all (13).jpg',
    title: '',
    description: '',
  },
  {
    id: '14',
    url: '/images/all/all (14).jpg',
    title: '',
    description: '',
  },
  {
    id: '15',
    url: '/images/all/all (15).jpg',
    title: '',
    description: '',
  },
  {
    id: '16',
    url: '/images/all/all (16).jpg',
    title: '',
    description: '',
  },
  {
    id: '17',
    url: '/images/all/all (17).jpg',
    title: '',
    description: '',
  },
  {
    id: '18',
    url: '/images/all/all (18).jpg',
    title: '',
    description: '',
  },
  {
    id: '19',
    url: '/images/all/all (19).jpg',
    title: '',
    description: '',
  },
  {
    id: '20',
    url: '/images/all/all (20).jpg',
    title: '',
    description: '',
  },
  {
    id: '21',
    url: '/images/all/all (21).jpg',
    title: '',
    description: '',
  },
  {
    id: '22',
    url: '/images/all/all (22).jpg',
    title: '',
    description: '',
  },
  {
    id: '23',
    url: '/images/all/all (23).jpg',
    title: '',
    description: '',
  },
  {
    id: '24',
    url: '/images/all/all (24).jpg',
    title: '',
    description: '',
  },
  {
    id: '25',
    url: '/images/all/all (25).jpg',
    title: '',
    description: '',
  },
  {
    id: '26',
    url: '/images/all/all (26).jpg',
    title: '',
    description: '',
  },
  {
    id: '27',
    url: '/images/all/all (27).jpg',
    title: '',
    description: '',
  },
  {
    id: '28',
    url: '/images/all/all (28).jpg',
    title: '',
    description: '',
  },
  {
    id: '29',
    url: '/images/all/all (29).jpg',
    title: '',
    description: '',
  },
  {
    id: '30',
    url: '/images/all/all (30).jpg',
    title: '',
    description: '',
  },
  {
    id: '31',
    url: '/images/all/all (31).jpg',
    title: '',
    description: '',
  },
  {
    id: '32',
    url: '/images/all/all (32).jpg',
    title: '',
    description: '',
  },
  {
    id: '33',
    url: '/images/all/all (33).jpg',
    title: '',
    description: '',
  },
  {
    id: '34',
    url: '/images/all/all (34).jpg',
    title: '',
    description: '',
  },
  {
    id: '35',
    url: '/images/all/all (35).jpg',
    title: '',
    description: '',
  },
  {
    id: '36',
    url: '/images/all/all (36).jpg',
    title: '',
    description: '',
  },
  {
    id: '37',
    url: '/images/all/all (37).jpg',
    title: '',
    description: '',
  },
  {
    id: '38',
    url: '/images/all/all (38).jpg',
    title: '',
    description: '',
  },
  {
    id: '39',
    url: '/images/all/all (39).jpg',
    title: '',
    description: '',
  },
  {
    id: '40',
    url: '/images/all/all (40).jpg',
    title: '',
    description: '',
  },
  {
    id: '41',
    url: '/images/all/all (41).jpg',
    title: '',
    description: '',
  },
  {
    id: '42',
    url: '/images/all/all (42).jpg',
    title: '',
    description: '',
  },
  {
    id: '43',
    url: '/images/all/all (43).jpg',
    title: '',
    description: '',
  },
  {
    id: '44',
    url: '/images/all/all (44).jpg',
    title: '',
    description: '',
  },
  {
    id: '45',
    url: '/images/all/all (45).jpg',
    title: '',
    description: '',
  },
  {
    id: '46',
    url: '/images/all/all (46).jpg',
    title: '',
    description: '',
  },
  {
    id: '47',
    url: '/images/all/all (47).jpg',
    title: '',
    description: '',
  },
  {
    id: '48',
    url: '/images/all/all (48).jpg',
    title: '',
    description: '',
  },
  {
    id: '49',
    url: '/images/all/all (49).jpg',
    title: '',
    description: '',
  },
  {
    id: '50',
    url: '/images/all/all (50).jpg',
    title: '',
    description: '',
  },
  {
    id: '51',
    url: '/images/all/all (51).jpg',
    title: '',
    description: '',
  },
  {
    id: '52',
    url: '/images/all/all (52).jpg',
    title: '',
    description: '',
  },
  {
    id: '53',
    url: '/images/all/all (53).jpg',
    title: '',
    description: '',
  },
  {
    id: '54',
    url: '/images/all/all (54).jpg',
    title: '',
    description: '',
  },
  {
    id: '55',
    url: '/images/all/all (55).jpg',
    title: '',
    description: '',
  },
  {
    id: '56',
    url: '/images/all/all (56).jpg',
    title: '',
    description: '',
  },
  {
    id: '57',
    url: '/images/all/all (57).jpg',
    title: '',
    description: '',
  },
  {
    id: '58',
    url: '/images/all/all (58).jpg',
    title: '',
    description: '',
  },
  {
    id: '59',
    url: '/images/all/all (59).jpg',
    title: '',
    description: '',
  },
  {
    id: '60',
    url: '/images/all/all (60).jpg',
    title: '',
    description: '',
  },
  {
    id: '61',
    url: '/images/all/all (61).jpg',
    title: '',
    description: '',
  },
  {
    id: '62',
    url: '/images/all/all (62).jpg',
    title: '',
    description: '',
  }  
];

interface Photo {
  id: string;
  url: string;
  title: string;
  description: string;
}

export function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  return (
    <div className="w-full h-full overflow-y-auto bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Заголовок */}
        <h1 className="text-4xl text-gray-900 text-center mb-8">
          Галерея фотографий
        </h1>

        {/* Сетка фотографий */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно для просмотра фото */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          onClick={() => {
            setSelectedPhoto(null);
            setIsDescriptionExpanded(false);
          }}
        >
          <button
            onClick={() => {
              setSelectedPhoto(null);
              setIsDescriptionExpanded(false);
            }}
            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="w-full h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Изображение на весь экран */}
            <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Информация внизу */}
            <div className="bg-black bg-opacity-70 backdrop-blur-sm text-white">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl mb-2">
                      {selectedPhoto.title}
                    </h2>
                    <div className={`overflow-hidden transition-all duration-300 ${
                      isDescriptionExpanded ? 'max-h-96' : 'max-h-20'
                    }`}>
                      <p className="text-gray-200 text-lg">
                        {selectedPhoto.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                    className="flex-shrink-0 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
                    aria-label={isDescriptionExpanded ? 'Свернуть описание' : 'Развернуть описание'}
                  >
                    {isDescriptionExpanded ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}