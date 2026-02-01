// НАСТРОЙТЕ ЗДЕСЬ ДАННЫЕ СТРАНИЦЫ С ВИДЕО
const organizationName = 'Музей гимназии № 53 им. Г.М. Дорогобида — «Точка притяжения поколений»';

const videoUrl = '/images/Video.mp4'; // YouTube embed URL
// Или используйте прямую ссылку на видео: '/path/to/video.mp4'

const description = `
Дорогие друзья, приветствуем вас в нашем школьном музее! Здесь, в сердце гимназии № 53, мы храним память поколений.
`.trim();

export function VideoPage() {
  return (
    <div className="w-full h-full overflow-y-auto bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Название организации */}
        <h1 className="text-4xl md:text-5xl text-gray-900 text-center mb-8">
          {organizationName}
        </h1>

        {/* Видео */}
        <div className="mb-8">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                src={videoUrl}
                title="Organization Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl object-cover"
                controls
                src={videoUrl}
              >
                Ваш браузер не поддерживает видео.
              </video>
            )}
          </div>
        </div>

        {/* Описание */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl text-gray-900 mb-4">Здравствуйте!</h2>
          <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}