import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-100 to-brand-beige">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-brown/10 rounded-full mb-6" data-aos="zoom-in" data-aos-delay="200">
              <Mail className="w-8 h-8 text-brand-brown" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark mb-4" data-aos="fade-up" data-aos-delay="300">
              Stay in Style
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-aos="fade-up" data-aos-delay="400">
              Be the first to know about new collections, exclusive offers, and style tips. 
              Join our community of purse enthusiasts.
            </p>
          </div>

          {/* Newsletter Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="space-y-4" data-aos="fade-up" data-aos-delay="500">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border-gray-200 focus:border-brand-brown"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-brand-brown text-white hover:bg-brand-brown/90 font-medium px-8"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div data-aos="zoom-in">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-700 px-6 py-3 rounded-full font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Thank you for subscribing!
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200" data-aos="fade-up" data-aos-delay="600">
            <div className="text-center">
              <div className="text-brand-dark font-medium mb-1">Early Access</div>
              <div className="text-sm text-muted-foreground">New collections first</div>
            </div>
            <div className="text-center">
              <div className="text-brand-dark font-medium mb-1">Exclusive Offers</div>
              <div className="text-sm text-muted-foreground">Member-only discounts</div>
            </div>
            <div className="text-center">
              <div className="text-brand-dark font-medium mb-1">Style Tips</div>
              <div className="text-sm text-muted-foreground">Expert fashion advice</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
