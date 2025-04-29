"use client"


import { useEffect, useState } from "react";
import EmailDashboard from "../../../public/icons/EmailDashboard";
import PersonDashboard from "../../../public/icons/PersonDashboard";
import DashboardLeft from "../elements/DashboardLeft";
import { Profile } from "@/service/profile";
import { setEmailPass } from "@/service/auth";
import { UserProfile } from "@/stores/profileStore";
import { getProfile } from "@/constant/profile";

const UserAccountDashboardPage = () => {

    const profileStore = UserProfile()

    const profile = getProfile(); 

        const [emailAndPassword, setEmailAndPassword] = useState({  
            email: '',  
            password: '',  
            confirm_password: ''  
        });  
    
        const handleChange = (e) => {  
            setEmailAndPassword({  
                ...emailAndPassword,  
                [e.target.name]: e.target.value  
            });  
        };

        const handleSubmit = (e) => {  
            e.preventDefault();  
            setEmailPass(emailAndPassword)
        };  
    


    useEffect (  ()=>{
        const fetchProfile = async () => {
        const {response , error} = await Profile()
        if (response){
            const userData = response.data.user;  
            const profileImage = response.data.profile_img;  


            profileStore.setProfile({  
                user: userData,  
                profile_img: profileImage
            }); 

        }
        else if (error){
        }}
        fetchProfile()
    }, []) 

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


            {
                profile.map(p=>(<div key={p.id} className="flex flex-col">
                    <label className="
                    text-black
                     text-[14px] 
                     font-normal
                     pr-4
                    ">
                        {p.field_name} 
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
                        {p.logo}
                        </span>
        
                    <input 
                    
                     type="text" 
                     placeholder= {p.content}  
                     className="
                        w-[350px]
                        border-none
                        focus:outline-none
                        focus:ring-0
                        focus:boredr-transparent 
                        bg-[#EDEDED]
                      "/>
                     
                    </div>            
                    </div>))
            }

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
             onChange={handleChange}
             value={emailAndPassword.email}  
             name="email"  
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
             onChange={handleChange} 
             value={emailAndPassword.password}  
             name="password"  
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
             onChange={handleChange}
             value={emailAndPassword.confirm_password}  
             name="confirm_password"  
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
                <button 
                    onClick={handleSubmit}
                    className="
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