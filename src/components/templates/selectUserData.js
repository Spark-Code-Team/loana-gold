"use client"

const UserManagement = ({section , setSection}) =>{
    
    return(
        <div className="w-[1024px]">
            <div className=" w-full h-max mx-4 flex flex-row">
                <div onClick={()=>setSection("transactions")} className={`border-[1px] ${section=='transactions'?"bg-slate-300":''} rounded-r-xl border-gray-200 p-4 cursor-pointer`}><>تراکنش</></div>
                <div onClick={()=>setSection("userGrade")} className={`border-[1px] ${section=='userGrade'?"bg-slate-300":''} border-gray-200 p-4 cursor-pointer`}><>درجه کاربری</></div>
                <div onClick={()=>setSection("installments")} className={`border-[1px] ${section=='installments'?"bg-slate-300":''} border-gray-200 p-4 cursor-pointer`}><>اقساط کاربر</></div>
                <div onClick={()=>setSection("userChargeWallet")} className={`border-[1px] ${section=='userChargeWallet'?"bg-slate-300":''} border-gray-200 p-4 cursor-pointer`}><>شارژ کیف پول کاربر</></div>
                <div onClick={()=>setSection("addresses")} className={`border-[1px] ${section=='addresses'?"bg-slate-300":''} rounded-l-xl border-gray-200 p-4 cursor-pointer`}><>آدرس ها</></div>
            </div>
        </div>
    )
}
export default UserManagement;