import Facebook from "../../../../public/icons/Facebook";
import Instagram from "../../../../public/icons/Instagram";
import Linkedin from "../../../../public/icons/Linkedin";
import Twitter from "../../../../public/icons/Twitter";

const HomeFooter = () =>{
    return(
        

    <footer className="w-full h-[400px] border-t-2 border-primary mt-12 ">

        <div className="container px-14 mx-auto h-[400px] my-auto  ">

            <div className="h-[104px] flex items-center">

                <div className="w-1/2">
                <h3 className="text-xl mb-2"> ایمیل خود را ثبت کنید تا با ما در ارتباط باشید و این حرفا </h3> 
                </div>

                <div className="w-1/2 pr-36">
                    <button className="w-24 h-10 bg-primary rounded-xl ml-4">ثبت ایمیل</button>

                    <input type="text" placeholder=" ایمیل خود را وارد کنید " 
                    className="w-80 h-10 border-[1px] border-[#E1E1E1] rounded-xl 
                    focus:border-primary
                    "/>
                </div>

            </div>

        <div className="flex flex-row
             h-[206px] justify-between my-4">

            <div className="w-[392px]">
            <h3 className="text-lg pb-4 text-primary font-semibold mb-2 w-[208px]"> لوگو </h3>
            <p className="text-sm">
            لونا اولین پلتفرم معاملات طلا در ایران است که به
             کاربران امکان می‌دهد تا به صورت مستقیم و به شیوۀ "Customer to Customer (C2C)" 
            به معامله طلا پرداخته و از پروژه ایجاد یک پلتفرم
             امن، شفاف و سریع برای معامله طلا میان کاربران بهره‌مند شوند.
            </p> 
            </div>


            <div className="">
            <h3 className="text-lg pb-4 text-primary font-semibold mb-2 w-[208px]">اطلاعات تماس</h3>
            <p className="text-sm">آدرس دفتر مرکزی: سعادت آباد، خیابان کاج، پلاک 16</p> 
            <p className="text-sm py-6">تلفن: 021-12345678</p> 
            <p className="text-sm">ایمیل: Drik@gmail.com</p>
            </div>
           
            <div className="">
            <h3 className="text-lg pb-4 text-primary font-semibold mb-2">دسترسی سریع</h3>
            <ul className="space-y-2"> <li><a href="#" className="text-black hover:underline">صفحه اصلی</a></li>
            <li><a href="#" className="text-black hover:underline">محصولات</a></li> 
            <li><a href="#" className="text-black hover:underline">سؤالات متداول</a></li> 
            <li><a href="#" className="text-black hover:underline"> </a></li> </ul>
            </div> 


            <div className="">
            <h3 className="text-lg pb-4 text-primary font-semibold mb-2"> درباره لونا </h3>
            <ul className="space-y-2"> <li><a href="#" className="text-black hover:underline">صفحه اصلی</a></li>
            <li><a href="#" className="text-black hover:underline">درباره لونا</a></li> 
            <li><a href="#" className="text-black hover:underline"> تماس باما </a></li> 
            </ul>
            </div>
  
        </div>

            <div className="h-[50px] w-36 justify-between flex">
                <Instagram/>
                <Twitter/>
                <Linkedin/>
                <Facebook/>
            </div>  

        </div>

        <div className="w-full h-11 bg-[#D2AB67] flex justify-center items-center">
            <p className="text-white">
            تمامی حقوق این وبگاه محفوظ و مربوط به لونا است.
            </p>
        </div> 

    </footer>
    )
}
export default HomeFooter;