import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
              <span className="font-serif text-2xl font-bold text-white">Artisan Café</span>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-md mb-6">
              Where passion meets perfection in every cup. Visit us for an unforgettable coffee experience that will keep you coming back.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-stone-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-stone-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-stone-800 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-stone-400">
              <li>123 Coffee Street</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">
                <a href="tel:+15551234567" className="hover:text-amber-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:hello@artisancafe.com" className="hover:text-amber-400 transition-colors">
                  hello@artisancafe.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Artisan Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
