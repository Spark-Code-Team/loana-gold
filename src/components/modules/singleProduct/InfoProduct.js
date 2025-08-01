"use client";

import { Profile } from "@/service/profile";
import { UserProfile } from "@/stores/profileStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const InfoProduct = () => {
  const profile = UserProfile();
  const router = useRouter();

  useEffect(() => {
    if (!profile.data.role) {
      const fetchProfile = async () => {
        const { response, error } = await Profile();
        if (response) {
          profile.setProfile(response.data);
        }
      };
      fetchProfile();
    }
  }, [profile.data.role]);

  return (
    <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold pb-6">
          انگشتر طلا نگین دار 7 میلی متری
        </h1>
        <p className="text-base sm:text-lg mt-2">عیار: 24</p>
        <p className="text-base sm:text-lg mt-2">وزن: 10.1 گرم</p>
        <p className="text-base sm:text-lg mt-2">این محصول بدون اجرت است</p>
        <p className="text-base sm:text-lg mt-2">
          موجود در انبار - ارسال از 15 بهمن
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        <select
          className="
            w-full 
            h-12 
            border 
            border-gray-300 
            p-2 
            rounded-xl 
            text-sm sm:text-base
            focus:outline-none
          "
        >
          <option>رنگ را انتخاب کنید</option>
          <option>طلایی</option>
          <option>نقره‌ای</option>
        </select>

        <select
          className="
            w-full 
            h-12 
            border 
            border-gray-300 
            p-2 
            rounded-xl 
            text-sm sm:text-base
            focus:outline-none
          "
        >
          <option>سایز را انتخاب کنید</option>
          <option>10</option>
          <option>10</option>
        </select>

        <select
          className="
            w-full 
            h-12 
            border 
            border-gray-300 
            p-2 
            rounded-xl 
            text-sm sm:text-base
            focus:outline-none
          "
        >
          <option>وزن طلا قابل انتخاب</option>
          <option>10 گرم</option>
          <option>20 گرم</option>
        </select>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-lg font-bold">قیمت: ۱۸,۸۷۹,۸۷۴ تومان</p>

        <div className="flex gap-4">
          <button
            className="bg-[#f0c884] hover:bg-[#D2AB67] rounded-lg px-4 h-12 transition-all"
            onClick={() => {
              if (profile.data.role) {
                router.push("/dashboard/gold-artifacts");
              } else {
                toast.info("برای خرید ابتدا باید ورود کنید");
                router.push("/Sign-in");
              }
            }}
          >
            خرید قسطی
          </button>
          <button
            onClick={() => {
              toast.success("خرید شما با موفقیت انجام شد");
              router.push("/Shop");
            }}
            className="bg-[#f0c884] hover:bg-[#D2AB67] rounded-lg px-4 h-12 transition-all"
          >
            خرید نقدی
          </button>
        </div>
      </div>

      <div className="border border-gray-300 rounded-xl mt-8 p-4">
        <p className="mb-2 font-semibold">پرداخت قسطی</p>
        <div className="flex flex-col sm:flex-row justify-between text-sm sm:text-base">
          <p>هر قسط: ۳,۱۷۳,۴۸۹ تومان</p>
          <p>۴ قسط ماهانه. بدون سود، چک و ضامن.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
