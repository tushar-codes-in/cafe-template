import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-700 font-medium text-sm tracking-widest uppercase mb-4">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
            Come Say Hello
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            We'd love to see you. Stop by for a cup of exceptional coffee and warm hospitality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-amber-800" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                  Location
                </h3>
                <p className="text-stone-600 leading-relaxed text-lg">
                  123 Coffee Street<br />
                  Downtown District<br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7 text-amber-800" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                  Phone
                </h3>
                <p className="text-stone-600 leading-relaxed text-lg">
                  <a href="tel:+15551234567" className="hover:text-amber-700 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center">
                  <Clock className="w-7 h-7 text-amber-800" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                  Opening Hours
                </h3>
                <div className="text-stone-600 leading-relaxed text-lg space-y-1">
                  <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                  <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Café storefront"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
