import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-brand-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] lg:min-h-[700px]">
          {/* Text Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <h1
                className="text-4xl lg:text-6xl font-serif font-bold text-brand-dark leading-tight"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Crafted for
                <span className="block text-brand-brown">
                  Everyday Elegance
                </span>
              </h1>
              <p
                className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Discover our collection of premium handcrafted ladies purses.
                Each piece combines timeless design with modern functionality.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Button
                size="lg"
                className="bg-brand-brown hover:bg-brand-brown/90 text-white font-medium px-8 py-3 h-auto"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white px-8 py-3 h-auto"
              >
                Learn Our Story
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className="grid grid-cols-3 gap-4 pt-8 border-t border-brand-beige/50  mr-10"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay="900"
              >
                <div className="text-xl font-bold text-brand-brown">500+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
              <div
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <div className="text-xl font-bold text-brand-brown">
                  Premium
                </div>
                <div className="text-sm text-muted-foreground">Materials</div>
              </div>
              <div
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay="1100"
              >
                <div className="text-xl font-bold text-brand-brown">
                  Handcrafted
                </div>
                <div className="text-sm text-muted-foreground">Quality</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative" data-aos="fade-left" data-aos-delay="300">
            <div className="relative overflow-hidden rounded-2xl bg-gray-50">
              <img
                src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Elegant ladies purse collection"
                className="w-full h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur rounded-xl p-6 shadow-lg max-w-[200px]"
              data-aos="slide-up"
              data-aos-delay="700"
            >
              <div className="text-sm font-medium text-brand-brown">
                Featured Collection
              </div>
              <div className="text-2xl font-bold text-brand-dark">
                Signature Series
              </div>
              <div className="text-sm text-muted-foreground">
                Starting at $299
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
