
import { Card, CardContent } from '@/components/ui/card';

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

const Categories = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "Handbags",
      description: "Elegant everyday essentials",
      image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      productCount: 24,
    },
    {
      id: 2,
      name: "Clutches",
      description: "Perfect for special occasions",
      image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      productCount: 18,
    },
    {
      id: 3,
      name: "Shoulder Bags",
      description: "Stylish and comfortable",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      productCount: 12,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-dark mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect purse for every occasion and style preference.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-gray-50"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/50 transition-colors duration-300"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-brand-accent transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-white/90 mb-3">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/80">
                        {category.productCount} products
                      </span>
                      <div className="w-6 h-6 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent transition-all duration-300">
                        <div className="w-2 h-2 bg-white rounded-full group-hover:bg-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
