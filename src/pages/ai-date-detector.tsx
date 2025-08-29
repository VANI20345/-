import { useState, useRef } from "react";

export default function AIDateDetectorModern() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<{ label: string; confidence: number } | null>(null);
  const [cameraOn, setCameraOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const primaryColor = "hsl(30, 70%, 40%)"; // اللون الأساسي

  // تشغيل الكاميرا
  const startCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) videoRef.current.srcObject = stream;
        setCameraOn(true);
      } catch (err) {
        console.error("Camera access denied:", err);
      }
    }
  };

  // التقاط صورة من الكاميرا
  const captureImage = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.drawImage(videoRef.current, 0, 0);
    const captured = canvas.toDataURL("image/jpeg");
    setImage(captured);
    setResult({ label: "العجوة", confidence: 98.4 });
  };

  // رفع صورة من المعرض
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        const uploaded = reader.result as string;
        setImage(uploaded);
        setResult({ label: "العجوة", confidence: 98.4 });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        كشف نوع التمر بالذكاء الاصطناعي
      </h1>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">

        {/* حاوية الكاميرا */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center transition transform hover:scale-105">
          <video
            ref={videoRef}
            className="w-full h-64 object-cover rounded-2xl mb-4 border border-gray-300"
            autoPlay
          />
          {!cameraOn ? (
            <button
              onClick={startCamera}
              style={{ backgroundColor: primaryColor }}
              className="text-white px-6 py-3 rounded-2xl font-semibold transition transform hover:scale-105 w-full"
            >
              فتح الكاميرا
            </button>
          ) : (
            <button
              onClick={captureImage}
              style={{ backgroundColor: primaryColor }}
              className="text-white px-6 py-3 rounded-2xl font-semibold transition transform hover:scale-105 w-full"
            >
              التقاط صورة
            </button>
          )}
        </div>

        {/* حاوية رفع الصورة */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center justify-center transition transform hover:scale-105">
          {!image ? (
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-yellow-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 01.88-7.9 5 5 0 0110 0 4 4 0 0110 0 5 5 0 010 10H3z" />
              </svg>
              <span className="text-gray-500 font-medium">اضغط هنا لاختيار صورة</span>
              <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
            </label>
          ) : (
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
          )}
        </div>
      </div>

      {/* عرض النتيجة */}
      {result && (
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md text-center transition transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-2" style={{ color: primaryColor }}>
            نوع التمر: {result.label}
          </h2>
          <p className="text-lg text-gray-700">نسبة الثقة: {result.confidence.toFixed(1)}%</p>
        </div>
      )}
    </div>
  );
}
