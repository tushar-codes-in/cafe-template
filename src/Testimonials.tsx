import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Regular Customer',
    content: 'This is hands down the best coffee shop in town. The atmosphere is perfect for both working and catching up with friends. Their cappuccino is absolutely divine!',
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    role: 'Coffee Enthusiast',
    content: 'As someone who takes coffee seriously, I can confidently say their espresso is exceptional. The baristas really know their craft, and you can taste the quality in every cup.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Local Business Owner',
    content: 'I host all my client meetings here. The ambiance is professional yet welcoming, and the staff always makes us feel at home. Plus, their pastries are incredible!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-700 font-medium text-sm tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
            Loved by Our Community
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Don't just take our word for it—hear what our customers have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-sm p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              <p className="text-stone-700 leading-relaxed mb-8 text-lg italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-stone-200 pt-6">
                <div className="font-bold text-stone-900 text-lg">
                  {testimonial.name}
                </div>
                <div className="text-stone-500 text-sm">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
