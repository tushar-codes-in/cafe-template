const images = [
  {
    url: 'https://images.pexels.com/photos/1120575/pexels-photo-1120575.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Latte art',
  },
  {
    url: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Coffee beans',
  },
  {
    url: 'https://images.pexels.com/photos/1526375/pexels-photo-1526375.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Café interior',
  },
  {
    url: 'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Espresso preparation',
  },
  {
    url: 'https://images.pexels.com/photos/2711959/pexels-photo-2711959.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Fresh pastries',
  },
  {
    url: 'https://images.pexels.com/photos/4350099/pexels-photo-4350099.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Coffee pour',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-400 font-medium text-sm tracking-widest uppercase mb-4">
            Gallery
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Moments Worth Savoring
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            A glimpse into our world of artisan coffee and warm hospitality
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm aspect-square cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
