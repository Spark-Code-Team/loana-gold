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
import ArrowDashboard from "../../../../public/icons/ArrowDashboard";
import Link from "next/link";

const SidebarAdminLayout = () =>{

    return (
        <>
    <div className="
    hidden
    md:block
    ">
      
    <aside className="
    w-[184px]
    bg-white 
    border 
    border-[#DADADA] 
    rounded-xl 
    h-[720px]
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
            flex-col
            justify-center
            items-center
            "
            >
              <UserAccountDashboard/>
              <Link href="">
              <p className="pr-2"> پنل </p>
              </Link>
            </div>
          </li>
          
          

        <li>
            <div className="
            flex
            flex-col
            justify-center
            items-center
            ">
                <UserAccountDashboard />
                <Link href="/admin/User-Account">
                <p className="
                pr-2 
                hover:text-primary
                 "> حساب کاربری </p>
                 </Link>
            </div>
        </li>

        <li>
            <div className="
            flex
            flex-col
            justify-center
            items-center
            ">
                <UserAccountDashboard />
                <Link href="/admin/User-Management">
                <p className="
                pr-2 
                hover:text-primary
                 ">  مدیریت کاربران </p>
                 </Link>
            </div>
        </li>

          
          <li className="
          p-2 
          rounded-lg 
          cursor-pointer
        hover:text-primary
          ">
            <div className="
            flex
            flex-col
            justify-center
            items-center
            ">
              <InstallmentDashboard />
              <Link href="/admin/insallments-ad">
              <p className="pr-2">اقساط</p>
              </Link>
            </div>
          </li>

          <li className="
          p-2
        hover:text-primary
          cursor-pointer
          ">
            <div className="
            flex
            flex-col
            justify-center
            items-center
            ">
              <HistoryDashboard />
              <Link href="/admin/Dealing-ad">
              <p className="pr-2"> تاریخچه معاملات</p>
              </Link>
            </div>
          </li>
          

          
          <li className="
          p-2  
          hover:text-primary 
          rounded-lg 
          cursor-pointer
          ">
            
            <div className="
            flex
            flex-col
            justify-center
            items-center
              ">
                <GoldDashboard />
                <Link href="/admin/transactions">
                <p className="pr-2"> تراکنش ها </p>
                </Link>
            </div>
            
          </li>

          <li className="
          p-2
          cursor-pointer
          hover:text-primary
          ">
            
            <div className="
            flex
            flex-col
            justify-center
            items-center
            ">
                <TicketDashboard />
                <Link href="/admin/tickets">
                <p className="pr-2"> تیکت ها </p>
                </Link>
              </div>
          </li>

          <li className="
          p-2 
          cursor-pointer
          hover:text-primary
          ">
            
            <div className="
            flex
            flex-col
            justify-center
            items-center
            ">
                <ErrorDashboard />
                <p className="pr-2">خروج</p>
              </div>
            
          </li>
        </ul>
      </aside>
    </div>
        </>
    )
}
export default SidebarAdminLayout;