"use client";
import { useState } from "react";
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
import IsOpen from "../../../../public/icons/IsOpen";
import ArrowDashboard from "../../../../public/icons/ArrowDashboard";
const SidebarDashboard = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

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
            کیوروش صناعی
          </h2>

          <p
            className="
          text-gray-500 
          text-sm
          "
          >
            0916******
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
    h-screen 
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
           hover:bg-gray-100 
           rounded-lg 
           cursor-pointer
           ">
            <div
              className="
            flex"
            >
              <UserAccountDashboard />
              <p className="pr-2">حساب کاربری</p>
            </div>
          </li>

          <li>
            <button
              className="
               w-full 
               text-left 
               p-2 
               hover:bg-gray-100 
               rounded-lg 
               flex 
               justify-between 
               items-center
               "
              onClick={() => toggleMenu("wallet")}
            >
              <div className="flex">
                <WalletDashboard />
                <p className="pr-2">کیف پول</p>
              </div>

              <span>{openMenu === "wallet" ? <ArrowDashboard/> : <ArrowDashboard/>}</span>
            </button>
            {openMenu === "wallet" && (
              <ul className="ml-4 mt-2 space-y-2">
                <li className="p-2 hover:bg-gray-100 rounded-lg">
                  <a href="/dashboard/wallet/balance">🔹 موجودی</a>
                </li>
                <li className="p-2 hover:bg-gray-100 rounded-lg">
                  <a href="/dashboard/wallet/transactions">🔹 تراکنش‌ها</a>
                </li>
              </ul>
            )}
          </li>

          <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <div className="flex">
              <InstallmentDashboard />
              <p className="pr-2">اقساط</p>
            </div>
          </li>

          <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <a href="/dashboard/history">
              <div className="flex">
                <GoldDashboard />
                <p className="pr-2">معامله طلا</p>
              </div>
            </a>
          </li>

          <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <div className="flex">
              <HistoryDashboard />
              <p className="pr-2">تاریخچه اعتبارسنجی</p>
            </div>
          </li>

          <li className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <a href="/dashboard/support">
              <div className="flex">
                <SubmitDashboard />
                <p className="pr-2">ثبت محصول</p>
              </div>
            </a>
          </li>

          <li className="p-2 hover:bg-red-100 rounded-lg cursor-pointer">
            <a href="/logout">
              <div className="flex">
                <OrderDashboard />
                <p className="pr-2">سفارش ها</p>
              </div>
            </a>
          </li>

          <li className="p-2 hover:bg-red-100 rounded-lg cursor-pointer">
            <a href="/logout">
              <div className="flex">
                <TicketDashboard />
                <p className="pr-2">ارسال تیکت پشتیبانی</p>
              </div>
            </a>
          </li>

          <li className="p-2 hover:bg-red-100 rounded-lg cursor-pointer">
            <a href="/logout">
              <div className="flex">
                <ErrorDashboard />
                <p className="pr-2">خروج از حساب کاربری</p>
              </div>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};
export default SidebarDashboard;
