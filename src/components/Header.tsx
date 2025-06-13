import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, User, Search } from "lucide-react";
import logo from "../../src/assests/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-brown rounded-full flex items-center justify-center">
              <img
                src={logo}
                alt="Lumina Bags Logo"
                className="w-6 h-6 object-cover rounded-full"
              />
            </div>
            <span className="text-xl lg:text-2xl font-serif font-bold text-brand-dark">
              Shop Authentic
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="text-brand-dark hover:text-brand-brown transition-colors"
            >
              Home
            </a>
            <a
              href="#shop"
              className="text-brand-dark hover:text-brand-brown transition-colors"
            >
              Shop
            </a>
            <a
              href="#categories"
              className="text-brand-dark hover:text-brand-brown transition-colors"
            >
              Categories
            </a>
            <a
              href="#about"
              className="text-brand-dark hover:text-brand-brown transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-brand-dark hover:text-brand-brown transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-brand-brown text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-brand-dark hover:text-brand-brown transition-colors px-4 py-2"
              >
                Home
              </a>
              <a
                href="#shop"
                className="text-brand-dark hover:text-brand-brown transition-colors px-4 py-2"
              >
                Shop
              </a>
              <a
                href="#categories"
                className="text-brand-dark hover:text-brand-brown transition-colors px-4 py-2"
              >
                Categories
              </a>
              <a
                href="#about"
                className="text-brand-dark hover:text-brand-brown transition-colors px-4 py-2"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-brand-dark hover:text-brand-brown transition-colors px-4 py-2"
              >
                Contact
              </a>
              <div className="flex items-center space-x-4 px-4 pt-4 border-t">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-brand-brown text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    2
                  </span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
