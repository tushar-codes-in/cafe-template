export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <img
                src="https://bushybeardcoffee.com/wp-content/uploads/2024/06/coffee_preparation_techniques_listed.jpg"
                alt="Coffee preparation"
                className="rounded-sm shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-800 rounded-sm -z-10"></div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-amber-700 font-medium text-sm tracking-widest uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              Where Every Cup is an Experience
            </h2>
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              <p>
                Founded in 2015, our café has been a cornerstone of the community, bringing people together over exceptional coffee and warm conversations. We believe that great coffee starts with great beans, which is why we source only the finest single-origin beans from sustainable farms around the world.
              </p>
              <p>
                Our expert baristas are passionate craftspeople who take pride in every cup they create. From the perfect espresso to handcrafted lattes with intricate latte art, we pour our hearts into everything we serve.
              </p>
              <p>
                More than just a coffee shop, we're a gathering place where friends meet, ideas flourish, and memories are made. Come experience the difference that passion and quality make.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-stone-200">
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-amber-800 mb-2">9+</div>
                <div className="text-stone-600 text-sm">Years</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-amber-800 mb-2">50K+</div>
                <div className="text-stone-600 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-amber-800 mb-2">15+</div>
                <div className="text-stone-600 text-sm">Coffee Origins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
