
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Signature Leather Purse",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Handbags",
      isSale: true,
    },
    {
      id: 2,
      name: "Elegant Shoulder Purse",
      price: 179,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Shoulder Purses",
      isNew: true,
    },
    {
      id: 3,
      name: "Evening Clutch Purse",
      price: 129,
      image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Clutches",
    },
    {
      id: 4,
      name: "Designer Tote Purse",
      price: 249,
      image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Totes",
      isNew: true,
    },
  ];

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark mb-4">
            Featured Purses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved ladies purses. Each piece is thoughtfully designed and expertly crafted.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-brand-brown text-white text-xs font-medium px-2 py-1 rounded">
                        New
                      </span>
                    )}
                    {product.isSale && (
                      <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                        Sale
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 ${
                          wishlist.includes(product.id) 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-gray-600'
                        }`} 
                      />
                    </Button>
                  </div>

                  {/* Quick Add to Cart */}
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      className="w-full bg-brand-brown hover:bg-brand-brown/90 text-white"
                      size="sm"
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-2">
                  <div className="text-sm text-muted-foreground">{product.category}</div>
                  <h3 className="font-medium text-brand-dark group-hover:text-brand-brown transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-brand-brown">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
          <Button 
            variant="outline" 
            size="lg"
            className="border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white px-8"
          >
            View All Purses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
