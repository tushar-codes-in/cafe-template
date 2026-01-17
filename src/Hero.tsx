import { Coffee, MapPin } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <Coffee className="w-16 h-16 mx-auto mb-6 text-amber-300" />

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          The Cozy Cup
        </h1>

        <p className="text-lg text-gray-200 mb-8">
          Experience the finest coffee in a warm, welcoming atmosphere.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-amber-700 hover:bg-amber-800 px-6 py-3 rounded-lg font-medium"
          >
            View Menu
          </a>

          <a
            href="#contact"
            className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Visit Us
          </a>
        </div>
      </div>
    </section>
  )
}

