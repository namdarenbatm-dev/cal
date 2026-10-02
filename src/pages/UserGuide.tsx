import React from "react";
import { useNavigate } from "react-router-dom";

export function UserGuideContent() {
  return (
    <div
      dir="rtl"
      className="mx-auto max-w-5xl space-y-6 text-right"
    >
      <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900">
          راهنمای کاربر EDGE POS
        </h1>

        <p className="mt-2 text-lg text-gray-500">
          موتور تصمیم‌گیری فروش
        </p>

        <div className="mt-6 rounded-2xl bg-gray-50 p-5 text-gray-700 leading-8">
          EDGE POS یک موتور تصمیم‌گیری برای فروش دستگاه‌های کارتخوان است.
          این ابزار اطلاعات خرید، هزینه‌های ماهانه، قیمت فروش و تعداد فروش
          را به تصمیم‌های قابل استفاده برای فروشنده تبدیل می‌کند.
        </div>
      </div>

      <section className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">
          از کجا شروع کنم؟
        </h2>

        <p className="mt-4 leading-8 text-gray-600">
          ابتدا اطلاعات واقعی دستگاه و هزینه‌های ماهانه را وارد کنید.
          سپس وضعیت فروش فعلی را بررسی کرده و سناریوهای مختلف قیمت و تعداد
          فروش را مقایسه کنید.
        </p>

        <div className="mt-5 rounded-2xl bg-gray-50 p-5 font-medium leading-9 text-gray-700">
          اطلاعات دستگاه ← هزینه‌های ماهانه ← فروش فعلی ← قیمت مناسب
          ← سود هدف ← مقایسه سناریوها ← گزارش
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">
          سوالات اصلی
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            [
              "قیمت مناسب من چقدر است؟",
              "قیمت پیشنهادی فروش هر دستگاه را بررسی کنید.",
            ],
            [
              "چند دستگاه باید بفروشم؟",
              "تعداد دستگاه لازم برای سربه‌سر شدن یا رسیدن به سود دلخواه را بررسی کنید.",
            ],
            [
              "با این قیمت چقدر سود می‌کنم؟",
              "وضعیت سود و زیان فروش فعلی را ببینید.",
            ],
            [
              "می‌خواهم ماهی X تومان سود کنم",
              "قیمت و تعداد فروش موردنیاز برای رسیدن به سود هدف را بررسی کنید.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-5"
            >
              <h3 className="font-bold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">
          اگر یک عدد را تغییر بدهم چه می‌شود؟
        </h2>

        <p className="mt-4 leading-8 text-gray-600">
          قیمت فروش، تعداد فروش ماهانه و هزینه‌های ماهانه را تغییر دهید.
          EDGE POS اثر این تغییرات را روی سود شما نشان می‌دهد تا بتوانید
          قبل از تصمیم فروش، نتیجه احتمالی آن را بررسی کنید.
        </p>

        <div className="mt-5 space-y-3">
          <div className="rounded-xl bg-gray-50 p-4">
            <b>قیمت فروش:</b> اثر مستقیم روی سود هر دستگاه دارد.
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <b>تعداد فروش:</b> اثر مستقیم روی سود ماهانه دارد.
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <b>هزینه ماهانه:</b> نقطه سربه‌سر و سود نهایی را تغییر می‌دهد.
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">
          وضعیت سود
        </h2>

        <div className="mt-5 rounded-2xl bg-yellow-50 p-5 text-yellow-800 leading-8">
          🟡 تقریباً سربه‌سر هستی — از فروش هر دستگاه چیزی برای
          هزینه‌های ثابت باقی نمی‌ماند.
        </div>
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">
          ابزارهای EDGE POS
        </h2>

        <div className="mt-5 space-y-3 text-gray-700">
          <div>• اطلاعات دستگاه</div>
          <div>• هزینه‌های ماهانه</div>
          <div>• مقایسه سناریوها</div>
          <div>• گزارش و نمودارها</div>
          <div>• چاپ گزارش مدیریتی</div>
          <div>• خروجی اکسل</div>
          <div>• بازگشت به داده‌های نمونه</div>
        </div>
      </section>

      <section className="rounded-3xl bg-gray-900 p-8 text-white">
        <h2 className="text-xl font-bold">
          منطق اصلی EDGE POS
        </h2>

        <p className="mt-5 text-lg leading-9 text-gray-200">
          داده واقعی وارد کن
          <br />
          ↓
          <br />
          وضعیت فعلی را ببین
          <br />
          ↓
          <br />
          سناریوها را تغییر بده
          <br />
          ↓
          <br />
          اثر تصمیم را بررسی کن
          <br />
          ↓
          <br />
          تصمیم فروش بگیر
        </p>
      </section>

      <div className="rounded-2xl bg-gray-50 p-5 text-sm leading-7 text-gray-500">
        نتایج EDGE POS به دقت و به‌روز بودن اطلاعات واردشده بستگی دارد.
        برای تصمیم‌گیری، اطلاعات واقعی و جاری کسب‌وکار خود را وارد کنید.
      </div>

      <div className="pb-8 text-center text-sm text-gray-400">
        <div className="font-semibold">EDGE POS</div>
        <div>موتور تصمیم‌گیری فروش</div>
        <div className="mt-1">Designed by Mehdi Namdar</div>
      </div>
    </div>
  );
}

export default function UserGuide() {
  const navigate = useNavigate();

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gray-50 p-6 md:p-10"
    >
      <div className="mx-auto mb-6 flex max-w-5xl items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          ← بازگشت
        </button>

        <div className="text-sm font-semibold text-gray-500">
          فایل راهنما
        </div>
      </div>

      <UserGuideContent />
    </div>
  );
}
