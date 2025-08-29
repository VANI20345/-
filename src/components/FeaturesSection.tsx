import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  MapPin, 
  CreditCard, 
  Star, 
  Search, 
  Heart,
  Truck,
  MessageCircle,
  BarChart3,
  Package,
  Bell,
  Users
} from "lucide-react";

const FeaturesSection = () => {
  const consumerFeatures = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "بحث متقدم",
      description: "ابحث حسب نوع التمر، السعر، المزرعة، والموقع"
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "سلة التسوق الذكية",
      description: "إضافة وتعديل المنتجات مع حساب تلقائي للأسعار"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "طرق دفع متنوعة",
      description: "تحويل بنكي، مدى، Apple Pay وأكثر"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "خيارات التوصيل",
      description: "توصيل منزلي أو استلام من المزرعة"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "التقييمات والمراجعات",
      description: "قيم المزارع والمنتجات وشارك تجربتك"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "المفضلة",
      description: "احفظ منتجاتك ومزارعك المفضلة"
    }
  ];

  const farmerFeatures = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "إدارة المنتجات",
      description: "رفع وتعديل المنتجات بسهولة مع الصور والأوصاف"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "إحصائيات المبيعات",
      description: "تتبع مبيعاتك وأرباحك الشهرية"
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "إشعارات فورية",
      description: "تنبيهات للطلبات الجديدة والمدفوعات"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "تواصل مباشر",
      description: "دردشة مع العملاء قبل إتمام الطلب"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Consumer Features */}
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            مزايا للمستهلكين
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            تجربة تسوق مميزة للحصول على أجود أنواع التمور
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {consumerFeatures.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-warm transition-smooth group">
              <div className="flex items-start gap-4" dir="rtl">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Farmer Features */}
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            مزايا للمزارعين
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أدوات قوية لإدارة مزرعتك وزيادة مبيعاتك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {farmerFeatures.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-warm transition-smooth group">
              <div className="text-center space-y-4">
                <div className="p-4 bg-secondary/10 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-smooth mx-auto w-fit">
                  {feature.icon}
                </div>
                <div dir="rtl">
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border-2 border-accent/20" dir="rtl">
            <h3 className="text-2xl font-bold mb-4">جاهز للبدء؟</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              انضم إلى أكبر سوق رقمي للتمور في المملكة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Users className="h-5 w-5 ml-2" />
                سجل كمستهلك
              </Button>
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => window.location.href = "/farmer-auth"}
              >
                <Package className="h-5 w-5 ml-2" />
                انضم كمزارع
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;