import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Business Executive",
      content: "The quality is exceptional. My Lumina purse has become my daily companion - it's both professional and stylish.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      role: "Fashion Blogger",
      content: "I've been looking for the perfect purse for months. Lumina exceeded my expectations in every way.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    {
      id: 3,
      name: "Jessica Thompson",
      role: "Creative Director",
      content: "Beautiful craftsmanship and attention to detail. The leather gets more beautiful with age.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from women who love their Lumina purses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="border-brand-beige hover:shadow-lg transition-shadow duration-300"
              data-aos="flip-up"
              data-aos-delay={index * 200}
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-brand-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60" data-aos="fade-up" data-aos-delay="600">
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-brown mb-1">4.9/5</div>
            <div className="text-sm text-muted-foreground">Customer Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-brown mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-brown mb-1">2 Year</div>
            <div className="text-sm text-muted-foreground">Warranty</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-brown mb-1">Free</div>
            <div className="text-sm text-muted-foreground">Shipping</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
