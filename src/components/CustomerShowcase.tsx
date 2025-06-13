import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomerReview {
  id: number;
  name: string;
  image: string;
  bagImage: string;
  rating: number;
  review: string;
  product: string;
}

const CustomerShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews: CustomerReview[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108755-2616c4adbafb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bagImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      review: "Absolutely love my new leather purse! The quality is exceptional and it goes with everything in my wardrobe.",
      product: "Signature Leather Purse"
    },
    {
      id: 2,
      name: "Emily Chen",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bagImage: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      review: "Perfect purse for work and travel. The design is both functional and stylish. Highly recommend!",
      product: "Urban Canvas Purse"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bagImage: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      review: "This clutch was perfect for my wedding! Beautiful craftsmanship and arrived exactly as described.",
      product: "Evening Clutch Purse"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-cream to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark mb-4">
            Happy Customers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying about their favorite purses.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0">
                  <Card className="bg-white/80 backdrop-blur border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Product Image */}
                        <div className="relative overflow-hidden rounded-xl">
                          <img
                            src={review.bagImage}
                            alt={review.product}
                            className="w-full h-64 lg:h-80 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </div>

                        {/* Review Content */}
                        <div className="space-y-6">
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          
                          <blockquote className="text-lg text-brand-dark italic leading-relaxed">
                            "{review.review}"
                          </blockquote>
                          
                          <div className="flex items-center gap-4">
                            <img
                              src={review.image}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <div className="font-semibold text-brand-dark">{review.name}</div>
                              <div className="text-sm text-muted-foreground">{review.product}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-brand-brown' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerShowcase;
