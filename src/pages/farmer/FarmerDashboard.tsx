import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  Bell, 
  Plus,
  Eye,
  Edit,
  Trash2,
  DollarSign,
  Users,
  AlertTriangle
} from "lucide-react";

const FarmerDashboard = () => {
  // بيانات وهمية للاختبار
  const dashboardStats = {
    totalProducts: 24,
    newOrders: 8,
    totalRevenue: 15750,
    bestSellingProduct: "تمر المجهول الفاخر"
  };

  const notifications = [
    { id: 1, message: "طلب جديد من محمد أحمد", time: "منذ 10 دقائق", type: "order" },
    { id: 2, message: "تمر الصقعي قارب على النفاد", time: "منذ ساعة", type: "stock" },
    { id: 3, message: "تقييم جديد 5 نجوم", time: "منذ ساعتين", type: "review" }
  ];

  const recentOrders = [
    { id: "#ORD-001", customer: "فاطمة العلي", total: 450, status: "جديد", items: "تمر المجهول × 2" },
    { id: "#ORD-002", customer: "أحمد السعد", total: 320, status: "قيد التحضير", items: "تمر الصقعي × 1" },
    { id: "#ORD-003", customer: "نورا محمد", total: 280, status: "تم الشحن", items: "تمر الخلاص × 3" },
    { id: "#ORD-004", customer: "سعد الدوسري", total: 550, status: "مكتمل", items: "تمر البرني × 2" }
  ];

  const topProducts = [
    { name: "تمر المجهول الفاخر", sales: 156, revenue: 7800, stock: 45 },
    { name: "تمر الصقعي الممتاز", sales: 89, revenue: 4450, stock: 12 },
    { name: "تمر الخلاص الطبيعي", sales: 67, revenue: 2680, stock: 78 },
    { name: "تمر البرني المنتقى", sales: 45, revenue: 2250, stock: 23 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "جديد": return "bg-blue-100 text-blue-800";
      case "قيد التحضير": return "bg-yellow-100 text-yellow-800";
      case "تم الشحن": return "bg-purple-100 text-purple-800";
      case "مكتمل": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">مرحباً، مزرعة الواحة</h1>
            <p className="text-muted-foreground">إليك نظرة عامة على نشاط مزرعتك اليوم</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 ml-2" />
            إضافة منتج جديد
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي المنتجات</CardTitle>
              <Package className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalProducts}</div>
              <p className="text-xs text-muted-foreground">
                +2 منتجات جديدة هذا الأسبوع
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">طلبات جديدة</CardTitle>
              <ShoppingCart className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.newOrders}</div>
              <p className="text-xs text-muted-foreground">
                +3 طلبات منذ أمس
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الأرباح الإجمالية</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalRevenue.toLocaleString()} ر.س</div>
              <p className="text-xs text-muted-foreground">
                +12% من الشهر الماضي
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الأكثر مبيعاً</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold">{dashboardStats.bestSellingProduct}</div>
              <p className="text-xs text-muted-foreground">
                156 عملية بيع
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* الطلبات الأخيرة */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                الطلبات الأخيرة
              </CardTitle>
              <CardDescription>
                آخر الطلبات الواردة على منتجاتك
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{order.id}</span>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{order.customer}</p>
                      <p className="text-xs text-muted-foreground">{order.items}</p>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">{order.total} ر.س</p>
                      <div className="flex gap-1 mt-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* الإشعارات */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                الإشعارات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start gap-3 p-3 border rounded-lg">
                    <div className="flex-shrink-0 mt-1">
                      {notification.type === "order" && <ShoppingCart className="h-4 w-4 text-blue-600" />}
                      {notification.type === "stock" && <AlertTriangle className="h-4 w-4 text-orange-600" />}
                      {notification.type === "review" && <Users className="h-4 w-4 text-green-600" />}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* المنتجات الأكثر مبيعاً */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              المنتجات الأكثر مبيعاً
            </CardTitle>
            <CardDescription>
              تحليل أداء منتجاتك الأكثر نجاحاً
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.sales} عملية بيع</p>
                    </div>
                  </div>
                  <div className="text-left space-y-2">
                    <p className="font-semibold">{product.revenue.toLocaleString()} ر.س</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">المخزون:</span>
                      <Badge variant={product.stock < 20 ? "destructive" : "secondary"}>
                        {product.stock}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* روابط سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Package className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-medium">إدارة المنتجات</h3>
              <p className="text-sm text-muted-foreground mt-1">إضافة وتعديل منتجاتك</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <ShoppingCart className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-medium">إدارة الطلبات</h3>
              <p className="text-sm text-muted-foreground mt-1">متابعة وإدارة الطلبات</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <h3 className="font-medium">التقارير</h3>
              <p className="text-sm text-muted-foreground mt-1">إحصائيات ومبيعات</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-purple-600" />
              <h3 className="font-medium">إعدادات الحساب</h3>
              <p className="text-sm text-muted-foreground mt-1">تحديث بيانات المزرعة</p>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default FarmerDashboard;