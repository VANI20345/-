import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  MapPin,
  User,
  Phone,
  Building,
  FileText,
  Image as ImageIcon,
  Mail,
  ShieldCheck
} from "lucide-react";

type FarmingMethod = "عضوي" | "غير عضوي" | "مدمج";

const DATE_TYPES = [
  "خلاص",
  "سكري",
  "صفري",
  "عجوة",
  "برحي",
  "صقعي",
  "نبوت سيف",
  "رزيز",
  "خضري",
  "شيشي",
  "هلالي",
  "روثان",
  "حلوة",
  "نبتة علي",
  "فرض"
];

const FarmerAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [datesQuery, setDatesQuery] = useState("");
  const [formData, setFormData] = useState<{
    name: string;
    phone: string;
    email: string;
    farmName: string;
    location: string;
    description: string;
    password: string;
    confirmPassword: string;
    agriculturalLicense: File | null;
    commercialLicense: File | null;
    products: string[];
    farmingMethod: FarmingMethod | "";
    farmImages: File[];
    acceptTerms: boolean;
  }>({
    name: "",
    phone: "",
    email: "",
    farmName: "",
    location: "",
    description: "",
    password: "",
    confirmPassword: "",
    agriculturalLicense: null,
    commercialLicense: null,
    products: [],
    farmingMethod: "",
    farmImages: [],
    acceptTerms: false
  });

  const filteredDates = useMemo(() => {
    const q = datesQuery.trim();
    if (!q) return DATE_TYPES;
    return DATE_TYPES.filter((t) => t.includes(q));
  }, [datesQuery]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === "checkbox" && name === "acceptTerms") {
      setFormData((prev) => ({ ...prev, acceptTerms: checked }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files) return;

    setFormData((prev) => {
      if (name === "farmImages") {
        return { ...prev, farmImages: Array.from(files) };
      }
      if (name === "agriculturalLicense") {
        return { ...prev, agriculturalLicense: files[0] || null };
      }
      if (name === "commercialLicense") {
        return { ...prev, commercialLicense: files[0] || null };
      }
      return prev;
    });
  };

  const toggleProduct = (type: string) => {
    setFormData((prev) => {
      const exists = prev.products.includes(type);
      const products = exists ? prev.products.filter((p) => p !== type) : [...prev.products, type];
      return { ...prev, products };
    });
  };

  const selectAllFiltered = () => {
    setFormData((prev) => {
      const set = new Set(prev.products);
      filteredDates.forEach((d) => set.add(d));
      return { ...prev, products: Array.from(set) };
    });
  };

  const clearAllProducts = () => {
    setFormData((prev) => ({ ...prev, products: [] }));
  };

  const validatePhone = (phone: string) => /^05\d{8}$/.test(phone); // صيغة سعودية مبسطة 05xxxxxxxx
  const validateEmail = (email: string) =>
    !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      alert("صيغة رقم الجوال غير صحيحة. مثال: 05xxxxxxxx");
      return;
    }
    if (!validateEmail(formData.email)) {
      alert("صيغة البريد الإلكتروني غير صحيحة.");
      return;
    }

    if (isLogin) {
      // ---- عملية تسجيل الدخول ----
      const payload = {
        phone: formData.phone,
        password: formData.password
      };
      console.log("Login payload:", payload);
      // TODO: استبدل بهذا نداء API فعلي لتسجيل الدخول
      return;
    }

    // ---- تحقق للتسجيل ----
    if (formData.password.length < 6) {
      alert("كلمة المرور يجب أن تكون 6 أحرف/أرقام على الأقل.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("تأكيد كلمة المرور لا يطابق.");
      return;
    }
    if (!formData.agriculturalLicense || !formData.commercialLicense) {
      alert("يرجى رفع السجل الزراعي والسجل التجاري.");
      return;
    }
    if (formData.products.length === 0) {
      alert("اختر نوعًا واحدًا على الأقل من التمور التي تريد عرضها.");
      return;
    }
    if (!formData.farmingMethod) {
      alert("اختر طريقة الزراعة (عضوي/غير عضوي/مدمج).");
      return;
    }
    if (!formData.acceptTerms) {
      alert("يجب الموافقة على الشروط والأحكام.");
      return;
    }

    // ---- بناء FormData لرفع الملفات مع النصوص ----
    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("farmName", formData.farmName);
    fd.append("location", formData.location);
    fd.append("phone", formData.phone);
    if (formData.email) fd.append("email", formData.email);
    fd.append("description", formData.description);
    fd.append("password", formData.password);
    fd.append("farmingMethod", formData.farmingMethod);
    fd.append("products", JSON.stringify(formData.products));
    if (formData.agriculturalLicense) {
      fd.append("agriculturalLicense", formData.agriculturalLicense);
    }
    if (formData.commercialLicense) {
      fd.append("commercialLicense", formData.commercialLicense);
    }
    formData.farmImages.forEach((img, i) => fd.append(`farmImages[${i}]`, img));

    console.log("Register FormData ready (preview without files):", {
      ...Object.fromEntries(fd.entries()),
      farmImagesCount: formData.farmImages.length
    });
    // TODO: استبدل بهذا نداء API للتسجيل: fetch('/api/farmers/register', { method: 'POST', body: fd })

    alert("تم تجهيز بيانات التسجيل للإرسال ✅ (استبدل console/API لاحقًا)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="shadow-lg border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Building className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">
              {isLogin ? "تسجيل دخول المزارع" : "انضم كمزارع"}
            </CardTitle>
            <CardDescription>
              {isLogin
                ? "ادخل إلى لوحة التحكم الخاصة بك"
                : "سجّل مزرعتك واعرض أنواع التمور لعشرات الآلاف من العملاء"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* حقل الهاتف وكلمة المرور (مشتركة) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {!isLogin && (
                  <>
                    <div className="space-y-2 md:col-span-1">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        اسم المزارع
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleTextChange}
                        placeholder="أدخل اسمك الكامل"
                        required
                      />
                    </div>

                    <div className="space-y-2 md:col-span-1">
                      <Label htmlFor="farmName" className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        اسم المزرعة
                      </Label>
                      <Input
                        id="farmName"
                        name="farmName"
                        type="text"
                        value={formData.farmName}
                        onChange={handleTextChange}
                        placeholder="اسم المزرعة"
                        required
                      />
                    </div>

                    <div className="space-y-2 md:col-span-1">
                      <Label htmlFor="location" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        موقع المزرعة
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleTextChange}
                        placeholder="المدينة، المنطقة"
                        required
                      />
                    </div>

                    <div className="space-y-2 md:col-span-1">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        البريد الإلكتروني (اختياري)
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleTextChange}
                        placeholder="example@mail.com"
                      />
                    </div>
                  </>
                )}

                <div className={`space-y-2 ${isLogin ? "md:col-span-1" : "md:col-span-1"}`}>
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    رقم الجوال
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleTextChange}
                    placeholder="05xxxxxxxx"
                    required
                    inputMode="tel"
                  />
                </div>

                <div className="space-y-2 md:col-span-1">
                  <Label htmlFor="password">كلمة المرور</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleTextChange}
                    placeholder={isLogin ? "كلمة المرور" : "على الأقل 6 خانات"}
                    required
                  />
                </div>

                {!isLogin && (
                  <div className="space-y-2 md:col-span-1">
                    <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleTextChange}
                      placeholder="أعد إدخال كلمة المرور"
                      required
                    />
                  </div>
                )}
              </div>

              {/* حقول السجلات والملفات */}
              {!isLogin && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="agriculturalLicense" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        السجل الزراعي (PDF/صورة)
                      </Label>
                      <Input
                        id="agriculturalLicense"
                        name="agriculturalLicense"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="commercialLicense" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        السجل التجاري (PDF/صورة)
                      </Label>
                      <Input
                        id="commercialLicense"
                        name="commercialLicense"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        required
                      />
                    </div>
                  </div>

                  {/* أنواع التمور المتعددة */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <Label>أنواع التمور التي تريد عرضها</Label>
                      <div className="text-xs text-muted-foreground">
                        المختارة: {formData.products.length}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Input
                        value={datesQuery}
                        onChange={(e) => setDatesQuery(e.target.value)}
                        placeholder="ابحث في أنواع التمور…"
                      />
                      <Button type="button" variant="secondary" onClick={selectAllFiltered}>
                        تحديد الظاهر
                      </Button>
                      <Button type="button" variant="ghost" onClick={clearAllProducts}>
                        مسح الكل
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {filteredDates.map((type) => {
                        const checked = formData.products.includes(type);
                        return (
                          <label
                            key={type}
                            className={`flex items-center gap-2 rounded-lg border px-3 py-2 cursor-pointer transition
                              ${checked ? "border-primary/60 ring-1 ring-primary/30" : "border-border"}`}
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4 accent-primary"
                              checked={checked}
                              onChange={() => toggleProduct(type)}
                            />
                            <span className="text-sm">{type}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* طريقة الزراعة */}
                  <div className="space-y-2">
                    <Label>طريقة الزراعة</Label>
                    <div className="flex flex-wrap gap-4">
                      {(["عضوي", "غير عضوي", "مدمج"] as FarmingMethod[]).map((method) => (
                        <label key={method} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="farmingMethod"
                            value={method}
                            checked={formData.farmingMethod === method}
                            onChange={handleTextChange}
                          />
                          {method}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* صور المزرعة + وصف */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="farmImages" className="flex items-center gap-2">
                        <ImageIcon className="h-4 w-4" />
                        صور المزرعة (اختياري)
                      </Label>
                      <Input
                        id="farmImages"
                        name="farmImages"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                      />
                      {formData.farmImages.length > 0 && (
                        <p className="text-xs text-muted-foreground">
                          تم اختيار {formData.farmImages.length} صورة.
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">وصف المزرعة</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleTextChange}
                        placeholder="وصف مختصر عن المزرعة وطريقة العناية وجودة التمور"
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* الشروط والأحكام */}
                  <div className="flex items-start gap-2 rounded-lg border p-3">
                    <input
                      id="acceptTerms"
                      name="acceptTerms"
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={handleTextChange}
                      className="mt-1 accent-primary"
                      required
                    />
                    <Label htmlFor="acceptTerms" className="flex-1 cursor-pointer">
                      أوافق على <Link to="/terms" className="text-primary underline">الشروط والأحكام</Link> و
                      <Link to="/privacy" className="text-primary underline">سياسة الخصوصية</Link>.
                    </Label>
                    <ShieldCheck className="h-4 w-4 text-primary" />
                  </div>
                </>
              )}

              <Button type="submit" className="w-full" size="lg">
                {isLogin ? "تسجيل الدخول" : "إنشاء حساب"}
                <ArrowRight className="h-4 w-4 mr-2" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {isLogin ? "ليس لديك حساب؟" : "لديك حساب بالفعل؟"}
                <Button
                  variant="link"
                  className="p-0 mr-2 h-auto"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "انضم كمزارع" : "تسجيل الدخول"}
                </Button>
              </p>
            </div>

            <div className="mt-4 text-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                العودة إلى الصفحة الرئيسية
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FarmerAuth;
