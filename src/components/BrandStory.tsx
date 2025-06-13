import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Heart, Leaf } from "lucide-react";
import bagHanging from "../../src/assests/images/bag-hanging.jpg";
import handleBag from "../../src/assests/images/handbag.jpg";
import stillLife from "../../src/assests/images/stillLife.jpg";

const BrandStory = () => {
  return (
    <section className="py-16 lg:py-24 bg-brand-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <h2
                className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Our Story of Craftsmanship
              </h2>
              <p
                className="text-lg text-muted-foreground leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Founded with a passion for timeless design, Lumina has been
                creating exceptional ladies purses that blend traditional
                craftsmanship with modern functionality. Each piece tells a
                story of dedication, quality, and style.
              </p>
              <p
                className="text-muted-foreground"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                From our artisan workshop to your wardrobe, every purse is
                carefully crafted using premium materials sourced ethically from
                around the world.
              </p>
            </div>

            <div
              className="grid grid-cols-3 gap-6"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay="900"
              >
                <div className="w-12 h-12 bg-brand-brown/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-brand-brown" />
                </div>
                <div className="text-sm font-medium text-brand-dark">
                  Premium Quality
                </div>
              </div>
              <div
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <div className="w-12 h-12 bg-brand-brown/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-brand-brown" />
                </div>
                <div className="text-sm font-medium text-brand-dark">
                  Made with Love
                </div>
              </div>
              <div
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay="1100"
              >
                <div className="w-12 h-12 bg-brand-brown/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-brand-brown" />
                </div>
                <div className="text-sm font-medium text-brand-dark">
                  Eco-Friendly
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="1200">
              <Button className="bg-brand-brown hover:bg-brand-brown/90 text-white px-8">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Images Grid */}
          <div
            className="grid grid-cols-2 gap-4"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="space-y-4">
              <Card
                className="overflow-hidden border-0 shadow-sm"
                data-aos="slide-up"
                data-aos-delay="500"
              >
                <img
                  src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Artisan crafting leather purse"
                  className="w-full h-48 object-cover"
                />
              </Card>
              <Card
                className="overflow-hidden border-0 shadow-sm"
                data-aos="slide-up"
                data-aos-delay="700"
              >
                <img
                  src={handleBag}
                  alt="Premium leather materials"
                  className="w-full h-60 object-cover"
                />
              </Card>
            </div>
            <div className="space-y-4 pt-8">
              <Card
                className="overflow-hidden border-0 shadow-sm"
                data-aos="slide-up"
                data-aos-delay="600"
              >
                <img
                  src={bagHanging}
                  alt="Designer working on purse patterns"
                  className="w-full h-40 object-cover"
                />
              </Card>
              <Card
                className="overflow-hidden border-0 shadow-sm"
                data-aos="slide-up"
                data-aos-delay="800"
              >
                <img
                  src={stillLife}
                  alt="Finished luxury ladies purses"
                  className="w-full h-60 object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
