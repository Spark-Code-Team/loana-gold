import EmailDashboard from "../../../public/icons/EmailDashboard";
import PersonDashboard from "../../../public/icons/PersonDashboard";
import PhoneDashboard from "../../../public/icons/PhoneDashboard";
import AdminTitle from "../elements/AdminTitle";


const AdminUserAccountPage = () =>{
    return(
        <div>
        
        <div className="
         md:w-[1016px] w-[440px]
         md:h-[400px] h-[542px]
         bg-white
         md:border-[1px]
         md:rounded-xl        
         border-[#CBCED7]
         ">
            
            <AdminTitle
                title="اطلاعات"
            />

            <div className="
            grid
            md:grid-cols-2
            gap-4
            pt-6
            pb-6
            md:place-items-center
            md:px-6
            px-2
            ">

            <div className="flex flex-col">
            <label className="
            text-black
             text-[14px] 
             font-normal
             pr-4
            ">
                نام 
            </label>
            
            <div className="
                flex
                items-center
                md:w-[392px] w-[375px]
                h-[56px]
                rounded-xl 
                border-[1px] 
                border-[#7A7A7A]
                bg-[#EDEDED]
            ">

             
             <span className="mr-4">
                <PersonDashboard/>
                </span>

            <input 
             type="text" 
             placeholder="فرهاد" 
             className="
                md:w-[350px] 
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent 
                bg-[#EDEDED]
              "/>
             
            </div>            
            </div>
            
            <div className="flex flex-col">
            <label className="
            text-black
             text-[14px] 
             font-normal
             pr-4
            ">
                 نام خانوادگی 
            </label>
            
            <div className="
                flex
                items-center
                md:w-[392px] w-[375px]
                h-[56px]
                rounded-xl 
                border-[1px] 
                border-[#7A7A7A]
                bg-[#EDEDED]
            ">

             
             <span className="mr-4">
                <PersonDashboard/>
                </span>

            <input 
             type="text" 
             placeholder="محمدی" 
             className="
                md:w-[350px]
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent 
                bg-[#EDEDED]
              "/>
             
            </div>            
            </div>

            <div className="flex flex-col">
            <label className="
            text-black
             text-[14px] 
             font-normal
             pr-4
            ">
                شماره موبایل 
            </label>
            
            <div className="
                flex
                items-center
                md:w-[392px] w-[375px]
                h-[56px]
                rounded-xl 
                border-[1px] 
                border-[#7A7A7A]
                bg-[#EDEDED]
            ">

             
             <span className="mr-4">
                <EmailDashboard/>
                </span>

            <input 
             type="text" 
             placeholder="09125648523" 
             className="
                md:w-[350px]
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent 
                bg-[#EDEDED]
              "/>
             
            </div>            
            </div>

            <div className="flex flex-col">
            <label className="
            text-black
             text-[14px] 
             font-normal
             pr-4
            ">
                 کدملی 
            </label>
            
            <div className="
                flex
                items-center
                md:w-[392px] w-[375px]
                h-[56px]
                rounded-xl 
                border-[1px] 
                border-[#7A7A7A]
                bg-[#EDEDED]
            ">

             <span className="mr-4">
                <PhoneDashboard/>
                </span>

            <input 
             type="text" 
             placeholder="001265969" 
             className="
                md:w-[350px]
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent 
                bg-[#EDEDED]
              "/>
             
            </div>            
            </div>

            <div className="flex flex-col">
            <label className="
            text-black
             text-[14px] 
             font-normal
             pr-4
            ">
                شماره شبا 
            </label>
            
            <div className="
                flex
                items-center
                md:w-[392px] w-[375px]
                h-[56px]
                rounded-xl 
                border-[1px] 
                border-[#7A7A7A]
                bg-[#EDEDED]
            ">

             
             <span className="mr-4">
                <EmailDashboard/>
                </span>

            <input 
             type="text" 
             placeholder="021556320241565223" 
             className="
                md:w-[350px]
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent 
                bg-[#EDEDED]
              "/>
             
            </div>            
            </div>

            <div className="flex flex-col">
            <label className="
            text-black
             text-[14px] 
             font-normal
             pr-4
            ">
                نام بانک 
            </label>
            
            <div className="
                flex
                items-center
                md:w-[392px] w-[375px]
                h-[56px]
                rounded-xl 
                border-[1px] 
                border-[#7A7A7A]
                bg-[#EDEDED]
            ">

             
             <span className="mr-4">
                <PhoneDashboard/>
                </span>

            <input 
             type="text" 
             placeholder="اقتصاد نوین" 
             className="
                md:w-[350px]
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent 
                bg-[#EDEDED]
              "/>
             
            </div>            
            </div>

            </div>
        </div>

        <div className="
        md:w-[1016px]
        md:h-[370px]
         bg-white
         md:border-[1px]
         md:rounded-xl        
         border-[#CBCED7]
         mt-32
        ">
            <div className="md:pr-6 pr-2">
            <p className="
            pt-6
            text-2xl
            font-bold
            ">
                رمزعبور
            </p>

            <p className="py-6 md:w-[968px] w-[365px] text-base">
            برای سهولت در ورودهای بعدی، لطفا برای حساب کاربری خود یک رمز عبور قرار دهید.
            </p>

            <div className="
                flex
                items-center
                md:w-[392px] w-[375px]
                h-[56px]
                rounded-xl 
                border-[1px] 
                border-[#E1E1E1]
            ">

             
             <span className="mr-4">
                <PersonDashboard/>
                </span>

            <input 
             type="text" 
             placeholder="ایمیل" 
             className="
                w-[350px]
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent 
                text-[#979797]
              "/>
             
            </div>

            <div className="
            flex 
            flex-row
            pt-6
            gap-4
            ">
            <div className="
                flex
                items-center
                md:w-[392px] w-[375px]
                h-[56px]
                rounded-xl 
                border-[1px] 
                border-[#E1E1E1]
                bg-[#EDEDED]
            ">

             
             <span className="mr-4">
                <PersonDashboard/>
                </span>

            <input 
             type="text" 
             placeholder="رمزعبور" 
             className="
                w-[350px]
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent 
                text-[#979797]
                bg-[#EDEDED]
              "/>
             
            </div>

            <div className="
                flex
                items-center
                md:w-[392px]
                h-[56px]
                rounded-xl 
                border-[1px] 
                border-[#E1E1E1]
                bg-[#EDEDED]
            ">

             
             <span className="mr-4">
                <EmailDashboard/>
                </span>

            <input 
             type="text" 
             placeholder="تکرار رمزعبور" 
             className="
                w-[350px]
                border-none
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent 
                text-[#979797]
                bg-[#EDEDED]
              "/>
             
            </div>

            </div>

            <div className="pt-6">
                <button className="
                w-[108px]
                h-12
                bg-primary
                rounded-xl
                ">
                    ثبت ایمیل
                </button>

            </div>

            </div>

           
          
        </div>

        </div>
    )
}
export default AdminUserAccountPage;