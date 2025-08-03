"use client";
import { useState } from "react";
import DashboardLeft from "../elements/DashboardLeft";
import BuyingGold from "../modules/goldDeal/BuyingGold";
import SellinGold from "../modules/goldDeal/SellingGold";

const GoldDealPage = () =>{

    const [activeTab , setactiveTab] = useState("buyingGold");


    return(
        <div 
            className="
                md:w-[912px] 
                w-[90%]
                mx-auto
                h-full
                border 
                border-[#CBCED7] 
                rounded-2xl 
            "
        >
        <DashboardLeft title=" معامله طلا " />

        <div className="
            h-12
            w-full
            flex
            flex-row
            items-center
            justify-center md:justify-start
            mt-5
            ">
            <button
                className={`
                w-[101px]
                h-8
                rounded-xl
                mx-4
                text-sm
                font-bold
                ${activeTab === "buyingGold" ? "bg-slate-300" : "bg-gray-100"}
                `}
                onClick={() => setactiveTab("buyingGold")}
            >
                خرید
            </button>

            <button
                className={`
                w-[101px]
                h-8
                rounded-xl
                mx-4 md:mx-6
                text-sm
                font-bold
                ${activeTab === "sellingGold" ? "bg-slate-300" : "bg-gray-100"}
                `}
                onClick={() => setactiveTab("sellingGold")}
            >
                فروش
            </button>
        </div>


        {activeTab === "buyingGold" ? <BuyingGold/>:<SellinGold/>}

        </div>
    )
}
export default GoldDealPage;