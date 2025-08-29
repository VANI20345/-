import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  Settings, 
  DollarSign,
  BarChart3,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Star,
  Calendar,
  Users,
  MapPin,
  Phone,
  Upload
} from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const FarmerDashboardComplete = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const sidebarItems = [
    { id: "dashboard", title: "الصفحة الرئيسية", icon: BarChart3 },
    { id: "products", title: "إدارة المنتجات", icon: Package },
    { id: "orders", title: "إدارة الطلبات", icon: ShoppingCart },
    { id: "payments", title: "العمولات والمدفوعات", icon: DollarSign },
    { id: "reports", title: "التقارير والإحصائيات", icon: TrendingUp },
    { id: "account", title: "إعدادات الحساب", icon: Settings }
  ];

  // بيانات وهمية شاملة
  const mockData = {
    stats: {
      totalProducts: 45,
      newOrders: 12,
      totalRevenue: 28750,
      monthlyGrowth: 15.5,
      totalCustomers: 234,
      pendingWithdrawals: 8500
    },
    products: [
      { id: 1, name: "تمر المجهول الفاخر", category: "المجهول", price: 150, stock: 45, sales: 156, status: "متاح", image: "/api/placeholder/100/100" },
      { id: 2, name: "تمر الصقعي الممتاز", category: "الصقعي", price: 120, stock: 8, sales: 89, status: "قليل", image: "/api/placeholder/100/100" },
      { id: 3, name: "تمر الخلاص الطبيعي", category: "الخلاص", price: 80, stock: 78, sales: 67, status: "متاح", image: "/api/placeholder/100/100" },
      { id: 4, name: "تمر البرني المنتقى", category: "البرني", price: 100, stock: 0, sales: 45, status: "نفد", image: "/api/placeholder/100/100" }
    ],
    orders: [
      { id: "#ORD-2024-001", customer: "فاطمة العلي", total: 450, status: "جديد", date: "2024-01-15", items: 3, phone: "0501234567" },
      { id: "#ORD-2024-002", customer: "أحمد السعد", total: 320, status: "قيد التحضير", date: "2024-01-14", items: 2, phone: "0509876543" },
      { id: "#ORD-2024-003", customer: "نورا محمد", total: 280, status: "تم الشحن", date: "2024-01-13", items: 4, phone: "0556677889" },
      { id: "#ORD-2024-004", customer: "سعد الدوسري", total: 550, status: "مكتمل", date: "2024-01-12", items: 5, phone: "0512345678" }
    ],
    withdrawals: [
      { id: "WD-001", amount: 5000, status: "معلق", date: "2024-01-10", method: "تحويل بنكي" },
      { id: "WD-002", amount: 3200, status: "مكتمل", date: "2024-01-05", method: "تحويل بنكي" },
      { id: "WD-003", amount: 1800, status: "مكتمل", date: "2023-12-28", method: "تحويل بنكي" }
    ],
    farmInfo: {
      name: "مزرعة الواحة للتمور",
      ownerName: "عبدالقادر الشهابي",
      phone: "0501234567",
      email: "aboody.sh.2003@gmail.com",
      location: "المدينة المنورة",
      description: "مزرعة متخصصة في إنتاج أجود أنواع التمور الفاخرة منذ عام 1985",
      established: "1985",
      area: "700 هكتار"
    }
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">الصفحة الرئيسية</h2>
          <p className="text-muted-foreground">نظرة عامة على نشاط مزرعتك</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 ml-2" />
          إضافة منتج جديد
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المنتجات</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.stats.totalProducts}</div>
            <p className="text-xs text-muted-foreground">+5 منتجات جديدة هذا الشهر</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">طلبات جديدة</CardTitle>
            <ShoppingCart className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.stats.newOrders}</div>
            <p className="text-xs text-muted-foreground">+8 طلبات هذا الأسبوع</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">الأرباح الإجمالية</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.stats.totalRevenue.toLocaleString()} ر.س</div>
            <p className="text-xs text-muted-foreground">+{mockData.stats.monthlyGrowth}% من الشهر الماضي</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>الطلبات الأخيرة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockData.orders.slice(0, 4).map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.customer}</p>
                </div>
                <div className="text-left">
                  <p className="font-semibold">{order.total} ر.س</p>
                  <Badge className={
                    order.status === "جديد" ? "bg-blue-100 text-blue-800" :
                    order.status === "قيد التحضير" ? "bg-yellow-100 text-yellow-800" :
                    order.status === "تم الشحن" ? "bg-purple-100 text-purple-800" :
                    "bg-green-100 text-green-800"
                  }>
                    {order.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">إدارة المنتجات</h2>
          <p className="text-muted-foreground">إضافة وتعديل منتجاتك</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 ml-2" />
          إضافة منتج جديد
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="البحث في المنتجات..." className="pr-10" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 ml-2" />
          تصفية
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockData.products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-square bg-muted flex items-center justify-center">
              <Package className="h-16 w-16 text-muted-foreground" />
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-sm">{product.name}</h3>
                  <Badge className={
                    product.status === "متاح" ? "bg-green-100 text-green-800" :
                    product.status === "قليل" ? "bg-yellow-100 text-yellow-800" :
                    "bg-red-100 text-red-800"
                  }>
                    {product.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary">{product.price} ر.س</span>
                  <span className="text-sm text-muted-foreground">المخزون: {product.stock}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-muted-foreground">{product.sales} مبيعة</span>
                  <div className="flex gap-1">
                    <Button size="sm" variant="outline">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">إدارة الطلبات</h2>
          <p className="text-muted-foreground">متابعة وإدارة جميع الطلبات</p>
        </div>
      </div>

      {/* Order Status Filter */}
      <div className="flex gap-2">
        {["الكل", "جديد", "قيد التحضير", "تم الشحن", "مكتمل"].map((status) => (
          <Button key={status} variant="outline" size="sm">
            {status}
          </Button>
        ))}
      </div>

      {/* Orders Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-right p-4 font-medium">رقم الطلب</th>
                  <th className="text-right p-4 font-medium">العميل</th>
                  <th className="text-right p-4 font-medium">التاريخ</th>
                  <th className="text-right p-4 font-medium">الحالة</th>
                  <th className="text-right p-4 font-medium">المجموع</th>
                  <th className="text-right p-4 font-medium">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {mockData.orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="p-4 font-medium">{order.id}</td>
                    <td className="p-4">
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.phone}</p>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{order.date}</td>
                    <td className="p-4">
                      <Badge className={
                        order.status === "جديد" ? "bg-blue-100 text-blue-800" :
                        order.status === "قيد التحضير" ? "bg-yellow-100 text-yellow-800" :
                        order.status === "تم الشحن" ? "bg-purple-100 text-purple-800" :
                        "bg-green-100 text-green-800"
                      }>
                        {order.status}
                      </Badge>
                    </td>
                    <td className="p-4 font-semibold">{order.total} ر.س</td>
                    <td className="p-4">
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPayments = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">العمولات والمدفوعات</h2>
        <p className="text-muted-foreground">إدارة أرباحك وطلبات السحب</p>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">الأرباح الصافية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">25,875 ر.س</div>
            <p className="text-xs text-muted-foreground">بعد خصم العمولة 10%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">طلبات السحب المعلقة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{mockData.stats.pendingWithdrawals.toLocaleString()} ر.س</div>
            <p className="text-xs text-muted-foreground">قيد المراجعة</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">إجمالي العمولات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">2,875 ر.س</div>
            <p className="text-xs text-muted-foreground">10% من المبيعات</p>
          </CardContent>
        </Card>
      </div>

      {/* Withdrawal Request */}
      <Card>
        <CardHeader>
          <CardTitle>طلب سحب جديد</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">المبلغ المراد سحبه</label>
              <Input placeholder="0.00" type="number" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">طريقة السحب</label>
              <select className="w-full p-2 border rounded-md">
                <option>تحويل بنكي</option>
                <option>حوالة بنكية</option>
              </select>
            </div>
          </div>
          <Button>طلب السحب</Button>
        </CardContent>
      </Card>

      {/* Withdrawal History */}
      <Card>
        <CardHeader>
          <CardTitle>سجل عمليات السحب</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockData.withdrawals.map((withdrawal) => (
              <div key={withdrawal.id} className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{withdrawal.id}</p>
                  <p className="text-sm text-muted-foreground">{withdrawal.date}</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">{withdrawal.amount.toLocaleString()} ر.س</p>
                  <p className="text-sm text-muted-foreground">{withdrawal.method}</p>
                </div>
                <Badge className={
                  withdrawal.status === "معلق" ? "bg-yellow-100 text-yellow-800" :
                  "bg-green-100 text-green-800"
                }>
                  {withdrawal.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">التقارير والإحصائيات</h2>
        <p className="text-muted-foreground">تحليل أداء مزرعتك ومبيعاتك</p>
      </div>

      {/* Report Period */}
      <div className="flex gap-4">
        <Button variant="outline">
          <Calendar className="h-4 w-4 ml-2" />
          هذا الشهر
        </Button>
        <Button variant="outline">الشهر الماضي</Button>
        <Button variant="outline">آخر 3 أشهر</Button>
        <Button variant="outline">هذا العام</Button>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">إجمالي المبيعات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">357</div>
            <p className="text-xs text-green-600">+23% من الشهر الماضي</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">متوسط قيمة الطلب</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">285 ر.س</div>
            <p className="text-xs text-green-600">+8% من الشهر الماضي</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">عدد العملاء الجدد</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67</div>
            <p className="text-xs text-blue-600">+15% من الشهر الماضي</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">معدل الرضا</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1">
              <div className="text-2xl font-bold">4.8</div>
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
            </div>
            <p className="text-xs text-green-600">+0.2 من الشهر الماضي</p>
          </CardContent>
        </Card>
      </div>

      {/* Top Products Chart */}
      <Card>
        <CardHeader>
          <CardTitle>المنتجات الأكثر مبيعاً</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockData.products.map((product, index) => (
              <div key={product.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sales} مبيعة</p>
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-semibold">{(product.sales * product.price).toLocaleString()} ر.س</p>
                  <div className="w-32 bg-muted rounded-full h-2 mt-1">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${(product.sales / 156) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAccount = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">إعدادات الحساب</h2>
        <p className="text-muted-foreground">تحديث بيانات مزرعتك وحسابك</p>
      </div>

      {/* Farm Information */}
      <Card>
        <CardHeader>
          <CardTitle>معلومات المزرعة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">اسم المزرعة</label>
              <Input value={mockData.farmInfo.name} />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">اسم المالك</label>
              <Input value={mockData.farmInfo.ownerName} />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">رقم الجوال</label>
              <Input value={mockData.farmInfo.phone} />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">البريد الإلكتروني</label>
              <Input value={mockData.farmInfo.email} />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">الموقع الجغرافي</label>
              <Input value={mockData.farmInfo.location} />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">مساحة المزرعة</label>
              <Input value={mockData.farmInfo.area} />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">وصف المزرعة</label>
            <Textarea value={mockData.farmInfo.description} rows={3} />
          </div>
        </CardContent>
      </Card>

      {/* Profile Images */}
      <Card>
        <CardHeader>
          <CardTitle>صور المزرعة</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium mb-2 block">شعار المزرعة</label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">اضغط لرفع الشعار</p>
                <p className="text-xs text-muted-foreground">PNG, JPG حتى 2MB</p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">صورة الغلاف</label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">اضغط لرفع صورة الغلاف</p>
                <p className="text-xs text-muted-foreground">PNG, JPG حتى 5MB</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle>إعدادات الأمان</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">كلمة المرور الحالية</label>
            <Input type="password" placeholder="أدخل كلمة المرور الحالية" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">كلمة المرور الجديدة</label>
            <Input type="password" placeholder="أدخل كلمة المرور الجديدة" />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">تأكيد كلمة المرور الجديدة</label>
            <Input type="password" placeholder="أعد إدخال كلمة المرور الجديدة" />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button>حفظ التغييرات</Button>
        <Button variant="outline">إلغاء</Button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard": return renderDashboard();
      case "products": return renderProducts();
      case "orders": return renderOrders();
      case "payments": return renderPayments();
      case "reports": return renderReports();
      case "account": return renderAccount();
      default: return renderDashboard();
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar className="w-64">
          <div className="p-4 border-b">
            <h2 className="font-bold text-lg">لوحة تحكم المزارع</h2>
            <p className="text-sm text-muted-foreground">مزرعة الواحة</p>
          </div>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>القائمة الرئيسية</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton 
                        onClick={() => setActiveSection(item.id)}
                        className={activeSection === item.id ? "bg-primary text-primary-foreground" : ""}
                      >
                        <item.icon className="h-4 w-4 ml-2" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1">
          <header className="h-14 border-b flex items-center px-6 bg-card">
            <SidebarTrigger />
            <div className="flex-1" />
            <Button variant="outline" onClick={() => window.location.href = "/"}>
              العودة للصفحة الرئيسية
            </Button>
          </header>
          
          <main className="p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default FarmerDashboardComplete;