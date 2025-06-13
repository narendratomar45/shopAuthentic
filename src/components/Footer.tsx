import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "All Products", href: "#" },
      { name: "Handbags", href: "#" },
      { name: "Backpacks", href: "#" },
      { name: "Clutches", href: "#" },
      { name: "Sale", href: "#" },
    ],
    support: [
      { name: "Size Guide", href: "#" },
      { name: "Care Instructions", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Story", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Press", href: "#" },
    ],
  };

  return (
    <footer className="bg-brand-dark text-brand-cream">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                Shop Authentic
              </h3>
              <p className="text-brand-cream/80 leading-relaxed max-w-md">
                Crafting timeless bags that blend elegance with functionality.
                Each piece tells a story of quality, design, and attention to
                detail.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-brand-cream/80">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">
                  Plot No-827 1st Floor Shalimar Garden Extension-1 Ghaziabad,
                  UP
                </span>
              </div>
              <div className="flex items-center gap-3 text-brand-cream/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">
                  Phone: +918506922777, +918506944777
                </span>
              </div>
              <div className="flex items-center gap-3 text-brand-cream/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">namratauniversal@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-brand-cream/80 hover:text-brand-cream hover:bg-brand-cream/10"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-brand-cream/80 hover:text-brand-cream hover:bg-brand-cream/10"
              >
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-cream/80 hover:text-brand-cream transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-brand-cream/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-brand-cream/60">
              © 2025 Namrata Universal. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-brand-cream/60">
              <a href="#" className="hover:text-brand-cream transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-brand-cream transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-brand-cream transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
