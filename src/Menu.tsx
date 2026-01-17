import { Coffee, IceCream, Croissant, Leaf, Droplets, Cookie } from 'lucide-react';

const menuItems = [
  {
    icon: Coffee,
    name: 'Signature Espresso',
    description: 'Rich, full-bodied espresso from our house blend',
    price: '$4.50',
    category: 'Coffee',
  },
  {
    icon: Droplets,
    name: 'Caramel Macchiato',
    description: 'Espresso with vanilla, steamed milk, and caramel drizzle',
    price: '$5.75',
    category: 'Coffee',
  },
  {
    icon: Leaf,
    name: 'Matcha Latte',
    description: 'Premium Japanese matcha with steamed milk',
    price: '$6.00',
    category: 'Beverage',
  },
  {
    icon: IceCream,
    name: 'Cold Brew Float',
    description: 'Smooth cold brew topped with vanilla ice cream',
    price: '$6.50',
    category: 'Beverage',
  },
  {
    icon: Croissant,
    name: 'Butter Croissant',
    description: 'Freshly baked, flaky French croissant',
    price: '$4.25',
    category: 'Pastry',
  },
  {
    icon: Cookie,
    name: 'Triple Chocolate Cookie',
    description: 'Warm, gooey cookie with three types of chocolate',
    price: '$3.75',
    category: 'Pastry',
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-700 font-medium text-sm tracking-widest uppercase mb-4">
            Our Menu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
            Crafted to Perfection
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Explore our curated selection of specialty drinks and artisan pastries, each crafted with the finest ingredients
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-stone-50 rounded-sm p-8 hover:bg-amber-50 transition-all duration-300 hover:shadow-lg border border-stone-100"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <Icon className="w-7 h-7 text-amber-800" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-2xl font-bold text-stone-900">
                    {item.name}
                  </h3>
                  <span className="text-amber-800 font-bold text-xl ml-4">
                    {item.price}
                  </span>
                </div>

                <p className="text-stone-600 leading-relaxed mb-3">
                  {item.description}
                </p>

                <span className="inline-block text-xs text-amber-700 font-medium uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block bg-stone-900 hover:bg-amber-800 text-white px-10 py-4 rounded-sm font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            See Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
