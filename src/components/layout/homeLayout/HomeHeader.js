import Link from "next/link";
const HomeHeader = () =>{
    return(

        <header className="shadow-lg"> 

        <div className="container mx-auto flex items-center justify-between py-7 px-6"> 

            <div className="flex flex-row items-center gap-8 w-1/2">

            <Link href="/" className="text-black text-[18px]">
            <div className="text-[#D2AB67] font-bold text-[32px]">لوگو</div> 
            </Link>

            
            <div> 
                
                <ul className="flex flex-row items-center space-x-7 space-x-reverse mr-8 pr-8"> 
                
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
                
                <button className="bg-[#AB8B53] text-black font-bold 
                text-[18px] px-4 py-3 rounded-[8px]">
                     ورود / ثبت‌نام 
                </button> 
            
                </div> 
                
                </div> 
                
                </header>

    )
}
export default HomeHeader;