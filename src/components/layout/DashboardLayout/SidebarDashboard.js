"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import UserAccountDashboard from "../../../../public/icons/UserAccountDashboard";
import WalletDashboard from "../../../../public/icons/WalletDashboard";
import InstallmentDashboard from "../../../../public/icons/InstallmentDashboard";
import GoldDashboard from "../../../../public/icons/GoldDashboard";
import HistoryDashboard from "../../../../public/icons/HistoryDashboard";
import SubmitDashboard from "../../../../public/icons/SubmitDashboard";
import OrderDashboard from "../../../../public/icons/OrdersDashboard";
import TicketDashboard from "../../../../public/icons/TicketDashboard";
import ErrorDashboard from "../../../../public/icons/ErrorDashboard";
import ArrowDashboard from "../../../../public/icons/ArrowDashboard";
import Link from "next/link";
import { UserProfile } from "@/stores/profileStore";
import { logOut } from "@/service/auth";
import { getCookie } from "@/utils/cookies";
import { useRouter } from "next/navigation";

const SidebarDashboard = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const router = useRouter()

  const profileStore = UserProfile()

  const log_out = async () =>{ 
    const {response , error} = await logOut(getCookie('refreshToken'))
    if(response){
      document.cookie.split(';').forEach(function(c) {
        document.cookie = c.trim().split('=')[0] + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      });
      document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC"; 
      router.push("/login")
      window.location.reload()}else{
      console.log(error)
      router.push("/login")
      window.location.reload()
      toast.error('خروج ناموفق')
    }
  }


  return (
    <div className="">
      <div
        className="
               h-[116px]
               bg-white
               rounded-xl
               border-[1px]
               border-[#DADADA]
               w-72
               mb-6
               flex
               justify-evenly
               items-center
          "
      >
        <Image
          src="/images/ashkan.png"
          alt="profile user"
          width={56}
          height={56}
        />
        <div>
          <h2
            className="
          text-base 
          font-bold
          mb-2
          "
          >
            {profileStore.data.first_name} {profileStore.data.last_name}
          </h2>

          <p
            className="
          text-gray-500 
          text-sm
          "
          >
            {profileStore.data.phone_number}
          </p>
        </div>
      </div>

    <aside
    className="
    w-72 
    bg-white 
    border 
    border-[#DADADA] 
    rounded-xl 
    md:h-[800px]
    shadow-md
    "
      >
        <ul
          className="
      pt-4
      px-6
      space-y-6
      "
        >
          
          <li className="
           p-2 
           rounded-lg 
           cursor-pointer
            hover:text-primary
           ">
            <div
              className="
            flex
            "
            >
              <UserAccountDashboard/>
              <Link href="/dashboard/user-account-dashboard">
              <p className="pr-2">حساب کاربری</p>
              </Link>
            </div>
          </li>
          
          

          <li>
            <button
              className="
               w-full 
               text-left 
               p-2 
               rounded-lg 
               flex 
               justify-between 
               items-center
               "
              onClick={() => toggleMenu("wallet")}
            >
              <div className="flex">
                <WalletDashboard />
                <p className="
                pr-2 
                hover:text-primary
                 ">کیف پول</p>
              </div>

              <span>{openMenu === "wallet" ? <ArrowDashboard/> : <ArrowDashboard/>}</span>
            </button>
            {openMenu === "wallet" && (
              <ul className="ml-4 mt-2 space-y-2">
                <li className="
                p-2  
                hover:text-primary 
                rounded-lg
                ">
                  <a href="/dashboard/goldStorage-dashboard">   طلا </a>
                </li>

                <li className="
                p-2  
                hover:text-primary 
                rounded-lg
                ">
                  <a href="/dashboard/"> نقره </a>
                </li>
                <li className="
                p-2  
                hover:text-primary 
                rounded-lg
                ">
                  <a href="/dashboard/wallet-dashboard"> موجودی نقدی </a>
                </li>

              </ul>
            )}
          </li>

          <li className="
          p-2 
          rounded-lg 
          cursor-pointer
        hover:text-primary
          ">
            <div className="flex">
              <InstallmentDashboard />
              <Link href="/dashboard/Transaction-dashboard">
              <p className="pr-2"> تراکنش‌ها  </p>
              </Link>
            </div>
          </li>

          
          <li className="
          p-2 
          rounded-lg 
          cursor-pointer
        hover:text-primary
          ">
            <div className="flex">
              <InstallmentDashboard />
              <Link href="/dashboard/installments">
              <p className="pr-2">اقساط</p>
              </Link>
            </div>
          </li>

          

          
          <li className="
          p-2  
          hover:text-primary 
          rounded-lg 
          cursor-pointer
          ">
           
              <div className="flex">
                <GoldDashboard />
                <Link href="/dashboard/gold-deals">
                <p className="pr-2">معامله طلا</p>
                </Link>
              </div>
          </li>

          <li className="
          p-2
        hover:text-primary
          cursor-pointer
          ">
            <div className="flex">
              <HistoryDashboard />
              <Link href="/dashboard/Validation-history">
                <p className="pr-2">تاریخچه اعتبارسنجی</p>
              </Link>
            </div>
          </li>

          <li className="
          p-2  
          hover:text-primary 
          cursor-pointer
          ">
            <a href="/dashboard/support">
              <div className="flex">
                <SubmitDashboard />
                <p className="pr-2">ثبت محصول</p>
              </div>
            </a>
          </li>

          <li className="
          p-2 
          cursor-pointer
          hover:text-primary
          ">
            <Link href="/logout">
              <div className="flex">
                <OrderDashboard />
                <Link href="/dashboard/orders-dashboard">
                <p className="pr-2">سفارش ها</p>
                </Link>
              </div>
            </Link>
          </li>

          <li className="
          p-2
          cursor-pointer
          hover:text-primary
          ">
            <Link href="/logout">
              <div className="flex">
                <TicketDashboard />
                <Link href="/dashboard/address-dashboard">
                <p className="pr-2"> آدرس ها </p>
                </Link>
              </div>
            </Link>
          </li>

          <li className="
          p-2
          cursor-pointer
          hover:text-primary
          ">
            <Link href="/logout">
              <div className="flex">
                <TicketDashboard />
                <Link href="/dashboard/ticket-dashboard">
                <p className="pr-2">ارسال تیکت پشتیبانی</p>
                </Link>
              </div>
            </Link>
          </li>

          <li className="
          p-2 
          cursor-pointer
          hover:text-primary
          ">
            
              <div className="flex"
                   onClick={()=>{
                    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";  
                    log_out()
                  }}
              >
                <ErrorDashboard />
                <p className="pr-2">خروج از حساب کاربری</p>
              </div>
          </li>
        </ul>
      </aside>
    </div>
  );
};
export default SidebarDashboard;
