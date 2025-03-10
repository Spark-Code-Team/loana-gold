import EmailDashboard from "../../../public/icons/EmailDashboard";
import EmailIcon from "../../../public/icons/EmailIcon";
import PersonDashboard from "../../../public/icons/PersonDashboard";
import PhoneDashboard from "../../../public/icons/PhoneDashboard";
import DashboardLeft from "../elements/DashboardLeft";

const UserAccountDashboardPage = () => {
    return(
        <div>
        
        <div className="
         w-[912px] 
         h-[400px]
         bg-white
         border-[1px]
         rounded-xl        
         border-[#CBCED7]
         ">
            
            <DashboardLeft
                title="اطلاعات"
            />

            <div className="
            grid
            grid-cols-2
            gap-4
            pt-6
            pb-6
            place-items-center
            px-6
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
                md:w-[392px]
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
                w-[350px]
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
                md:w-[392px]
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
                w-[350px]
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
                md:w-[392px]
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
                w-[350px]
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
                md:w-[392px]
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
                w-[350px]
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
                md:w-[392px]
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
                w-[350px]
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
                md:w-[392px]
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
                w-[350px]
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
        w-[912px]
        h-[370px]
         bg-white
         border-[1px]
         rounded-xl        
         border-[#CBCED7]
         mt-32
        ">
            <div className="pr-6">
            <p className="
            pt-6
            text-2xl
            font-bold
            ">
                رمزعبور
            </p>

            <p className="py-6">
            برای سهولت در ورودهای بعدی، لطفا برای حساب کاربری خود یک رمز عبور قرار دهید.
            </p>

            <div className="
                flex
                items-center
                md:w-[392px]
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
                md:w-[392px]
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
export default UserAccountDashboardPage;