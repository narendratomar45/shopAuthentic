import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our purses or need assistance? We're here to
            help you find the perfect piece.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-brand-dark mb-6">
                Send us a Message
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Product inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-brand-brown hover:bg-brand-brown/90 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Image */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="300">
            {/* Contact Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Luxury ladies purses display in store"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-brown/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-brand-brown" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark">
                    Visit Our Store
                  </h4>
                  <p className="text-muted-foreground">
                    Plot No-827 1st Floor Shalimar Garden Extension-1 Ghaziabad,
                    UP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-brown/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-brand-brown" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark">Call Us</h4>
                  <p className="text-muted-foreground">
                    +918506922777, +918506944777
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-brown/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-brand-brown" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark">Email Us</h4>
                  <p className="text-muted-foreground">
                    namratauniversal@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-brown/10 p-3 rounded-full">
                  <Clock className="h-5 w-5 text-brand-brown" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark">Store Hours</h4>
                  <p className="text-muted-foreground">
                    Mon-Sat: 10AM-8PM
                    <br />
                    Sunday: 12PM-6PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
