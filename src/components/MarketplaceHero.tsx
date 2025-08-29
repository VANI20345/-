import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Truck, Shield } from "lucide-react";
import heroImage from "@/assets/hero-dates.jpg";
import { useNavigate } from "react-router-dom";


const MarketplaceHero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f4a261' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-right" dir="rtl">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
                عذق 
                <br />
                <span className="text-4xl lg:text-5xl">__________________________</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                اكتشف أجود أنواع التمور مباشرة من المزارع إلى منزلك
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                تسوق الآن
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2"
                onClick={() => window.location.href = "/farmer-auth"}
              >
                انضم كمزارع
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.location.href = "/farmer-dashboard"}
              >
                لوحة التحكم 
              </Button>
              <Button 
  variant="accent" 
  size="lg" 
  className="text-lg px-8 py-6"
  onClick={() => navigate("/ai-date-detector")}
>
  معرفة نوع التمر AI
</Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <Card className="p-6 text-center bg-card/80 backdrop-blur-sm shadow-soft">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">مزارع</div>
              </Card>
              <Card className="p-6 text-center bg-card/80 backdrop-blur-sm shadow-soft">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">منتج</div>
              </Card>
              <Card className="p-6 text-center bg-card/80 backdrop-blur-sm shadow-soft">
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">عميل راضي</div>
              </Card>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-warm">
              <img 
                src={heroImage} 
                alt="تمور فاخرة من أجود المزارع"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            

            <div className="absolute -right-6 bottom-20 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/20 rounded-lg">
                  <Truck className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">توصيل مجاني</div>
                  <div className="text-sm text-muted-foreground">للطلبات +200 ريال</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm">دفع آمن</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm">تتبع الطلب</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-sm">ضمان الجودة</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-sm">توصيل سريع</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceHero;