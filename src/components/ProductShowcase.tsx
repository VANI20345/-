import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Heart } from "lucide-react";
import datesVarieties from "@/assets/dates-varieties.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "تمر عجوة فاخر",
      price: 85,
      originalPrice: 100,
      rating: 4.9,
      reviews: 123,
      farm: "مزرعة النخيل الذهبي",
      location: "المدينة المنورة",
      image: "/src/assets/ajwa.jpg", // صورة تمر عجوة
      badge: "الأكثر مبيعاً",
      description: "تمر عجوة طازج من أجود المزارع"
    },
    {
      id: 2,
      name: "تمر برني طبيعي",
      price: 65,
      rating: 4.8,
      reviews: 89,
      farm: "مزارع القصيم الطبيعية",
      location: "القصيم",
      image: "/src/assets/barni.jpg", // صورة تمر برني
      badge: "عضوي",
      description: "تمر برني عضوي خالي من المواد الكيميائية"
    },
    {
      id: 3,
      name: "تمر مجدول ملكي",
      price: 120,
      rating: 5.0,
      reviews: 45,
      farm: "مزرعة الأصالة",
      location: "الرياض",
      image: "/src/assets/medjool.jpg", // صورة تمر مجدول
      badge: "حصري",
      description: "تمر مجدول مختار بعناية للمناسبات الخاصة"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            منتجاتنا المميزة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعة متنوعة من أجود أنواع التمور من مزارع موثقة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-warm transition-smooth group">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold">
                    {product.badge}
                  </Badge>
                </div>
                <button className="absolute top-4 left-4 p-2 bg-card/80 backdrop-blur-sm rounded-full hover:bg-accent hover:text-accent-foreground transition-smooth">
                  <Heart className="h-4 w-4" />
                </button>
                {product.originalPrice && (
                  <div className="absolute bottom-4 right-4 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-sm font-semibold">
                    خصم {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </div>
                )}
              </div>
              
              <div className="p-6 space-y-4" dir="rtl">
                <div>
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold text-sm">{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">({product.reviews} تقييم)</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{product.farm} - {product.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price} ريال</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice} ريال</span>
                    )}
                  </div>
                  <Button variant="hero" size="sm">
                    أضف للسلة
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-2">
            عرض جميع المنتجات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;