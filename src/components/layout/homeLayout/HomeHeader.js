import Link from "next/link";
const HomeHeader = () =>{
    return(

        <header className="shadow-lg"> 

        <div className="
         md:container 
         md:mx-auto 
         md:flex 
         md:items-center 
         md:justify-between 
         md:py-7 
         md:px-6
         "> 

            <div className="
             md:flex 
             md:flex-row 
             items-center 
             md:gap-8 
             md:w-1/2
             ">

            <Link href="/" className="text-black text-[18px]">
            <div className="text-[#D2AB67] font-bold text-[32px]">لوگو</div> 
            </Link>

            
            <div> 
                
                <ul className="
                 md:flex 
                 md:flex-row 
                 md:items-center 
                 md:space-x-7 
                 md:space-x-reverse 
                 md:mr-8 
                 md:pr-8
                 "> 
                
                <li> <Link href="/Shop" className="text-black text-[18px]">فروشگاه</Link> </li> 
                <li> <Link href="/Shop" className="text-black text-[18px]">درباره لونا</Link> </li> 
                <li> <Link href="/ContactUs" className="text-black text-[18px]">تماس باما</Link> </li> 
                <li> <Link href="/FAQ" className="text-black text-[18px]">سوالات متداول</Link> </li> 

                </ul> 
                
            </div>

            </div>

            <div className="flex items-center"> 

                <button className="border-[1px] border-[#AB8B53] font-bold 
                text-[18px] text-[#AB8B53] px-4 py-3 mx-7 rounded-[8px]">
                     درخواست اعتبار خرید 
                </button> 


                <Link href="/Login">
                <button className="bg-[#AB8B53] text-black font-bold 
                text-[18px] px-4 py-3 rounded-[8px]">
                     ورود / ثبت‌ نام 
                </button> 
                </Link>

            
                </div> 
                
                </div> 
                
                </header>

    )
}
export default HomeHeader;