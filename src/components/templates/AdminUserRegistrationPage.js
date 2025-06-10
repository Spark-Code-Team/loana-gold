"use client";
import { useState } from "react";
import { AdminUserRegistrationApi } from "@/service/AdminUserRegistrationApi";
import { UserAdmin } from "@/constant/UserAdmin";
import PersonName from "../../../public/icons/PersonName";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

const AdminUserRegisterationPage = () => {
  const [formData, setFormData] = useState({
    phone_number: "",
    national_code: "",
    first_name: "",
    last_name: "",
    sheba: "",
    bank_name: "",
    password: "",
    is_active: false,
    email: "",
    is_2fa: false,
    profile_img: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profile_img: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendData = async () => {
    console.log("داده‌ای که به API می‌فرستیم:", formData);
    const { response, error } = await AdminUserRegistrationApi(formData);
    if (response) {
      toast.success('کاربر با موفقیت ثبت شد') 
    } else {
      console.error("خطا در ثبت نام:", error);
    }
  };

  return (
    <div className="
    md:flex 
    flex 
    flex-col 
    md:justify-center 
    md:items-center 
    md:h-[1000px] 
    md:mt-0 
    p-3 
    md:p-0 
    w-[1016px]
    ">
      <div className="
      w-full 
      md:h-full 
      h-screen
      md:p-8 
      p-3 
      rounded-xl 
      md:shadow-lg 
      flex 
      flex-col 
      justify-around
      ">
        <div className="
        h-16 
        flex 
        flex-col 
        items-start
        ">
          <h2 className="
          md:text-xl 
          text-2xl 
          font-bold 
          mb-4 
          text-center
          ">
            ثبت نام کاربر جدید
          </h2>
          <p className="text-[16px] text-[#A6A6A6]">
            لطفا اطلاعات زیر را تکمیل کنید
          </p>
        </div>

        <div className="md:h-[325px] md:grid md:grid-cols-2 md:gap-4">
          {UserAdmin.map((p) => {
           
            if (p.name === "profile_img") return null;
            return (
              <div
                key={p.id}
                className="flex items-center md:w-[292px] h-12 rounded-xl border-[1px] border-[#E1E1E1]"
              >
                <span className="mr-4">
                  <PersonName />
                </span>

                <input
                  className="border-none focus:outline-none focus:ring-0 focus:border-transparent md:w-[250px] w-80 text-xl md:text-base"
                  placeholder={p.placeholder}
                  type={p.type}
                  name={p.name}
                  value={formData[p.name]}
                  onChange={handleChange}
                />
              </div>
            );
          })}

         
          <div className="md:col-span-2 mt-4">
            <label className="block mb-1 text-sm font-medium text-gray-900">
              عکس پروفایل
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-[600px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
          </div>

          <div className="md:col-span-2 mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    is_active: e.target.checked,
                  }))
                }
              />
              <label htmlFor="is_active">کاربر فعال باشد</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="is_2fa"
                checked={formData.is_2fa}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    is_2fa: e.target.checked,
                  }))
                }
              />
              <label htmlFor="is_2fa">فعال‌سازی احراز هویت دو مرحله‌ای</label>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <button
            className="md:w-[600px] w-full h-12 bg-[#EDEDED] rounded-xl text-black hover:bg-primary hover:text-black text-xl md:text-base"
            onClick={handleSendData}
          >
            تایید و ادامه
          </button>
        </div>

        {/* ورود */}
        <div className="mt-3 w-[600px] flex text-xl md:text-base">
          حساب کاربری دارید؟
          <Link href="/Sign-in">
            <p className="mr-1 text-primary text-xl md:text-base">ورود</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminUserRegisterationPage;



// "use client"
// import { registerForm } from "@/constant/auth";
// import PersonName from "../../../public/icons/PersonName";
// import Link from "next/link";
// import { useState } from "react";
// import { AdminUserRegistrationApi } from "@/service/AdminUserRegistrationApi";
// import { UserAdmin } from "@/constant/UserAdmin";


// const AdminUserRegisterationPage = () => {
//   // const [formData, setFormData] = useState({
//   //   phone_number: "",
//   //   national_code: "",
//   //   first_name: "",
//   //   last_name: "",
//   //   sheba: "",
//   //   bank_name: "",
//   //   password: "",
//   //   is_active: false,
//   //   email: "",
//   //   is_2fa: false, 
//   //   profile_img: "",
//   //   role: ""

//   // });

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prev) => ({
//   //     ...prev,
//   //     [name]: value,
//   //   }));
//   // };

//   // const handleSendData = async () => {
//   //   const { response, error } = await AdminUserRegistrationApi(formData);
//   //   if (response) {
//   //     console.log("کاربر با موفقیت ثبت شد:", response.data);
//   //   } else {
//   //     console.error("خطا در ثبت نام:", error);
//   //   }
//   // };


//     return(
//         <div 
//         className="
//         md:flex flex flex-col
//         md:justify-center 
//         md:items-center 
//         md:h-[900px]    
//         md:mt-0
//         p-3
//         md:p-0
//         w-[1016px]
        
//         " 
//       >

//       <div className="
//        w-full
//        md:h-full h-screen
//        md:p-8 p-3
//        rounded-xl 
//        md:shadow-lg
//        flex
//        flex-col
//        justify-between
//        ">
//           <div className="
//            h-16 
//            flex 
//            flex-col 
//            items-start
//            ">

//           <h2 className="
//             md:text-xl text-2xl
//             font-bold 
//             mb-4 
//             text-center
//             ">
//                ثبت نام کاربر جدید
//           </h2>

//           <p className="
//               text-[16px]
//             text-[#A6A6A6]
//             ">
//                لطفا اطلاعات زیر را تکمیل کنید 
//           </p>

//           </div>

//           <div className="
//            md:h-[325px] 
//            md:grid 
//            md:grid-cols-2 
//            md:gap-4

//           ">

//             {UserAdmin.map((p) => {  
//                 return (  
//                     <div key={p.id} className="  
//                         flex  
//                         items-center  
//                         md:w-[292px]  
//                         h-12  
//                         rounded-xl  
//                         border-[1px]  
//                         border-[#E1E1E1]  
//                     ">  
//                         <span className="mr-4">  
//                             <PersonName />  
//                         </span>  
                        
//                         <input  
//                             className="  
//                                 border-none  
//                                 focus:outline-none  
//                                 focus:ring-0  
//                                 focus:border-transparent  
//                                 md:w-[250px] w-80  
//                                 text-xl  
//                                 md:text-base  
//                             "  
//                             placeholder={p.placeholder}  
//                             type={p.type}  
//                             name={p.name}   
//                             // value={formData[p.name]}  
//                             // onChange={handleChange}   
//                         />  
                        
//                     </div>  
                    
//                 );  
//             })}               

//           </div>

//           <div>
//               <button className="
//               md:w-[600px] w-full
//               h-12 
//               bg-[#EDEDED] 
//               rounded-xl 
//               text-black
//               hover:bg-primary
//               hover:text-black
//               text-xl
//               md:text-base
//               "
//               onClick={() => handleSendData()}
//                >
//                   تایید و ادامه
//               </button>
//           </div> 

//           <div className="
//           mt-3 
//           w-[600px]
//           flex
//           text-xl
//           md:text-base
//           ">
//           حساب کاربری دارید؟
//           <Link href="/Sign-in">
//             <p className="
//                 mr-1 
//               text-primary
//                 text-xl
//                 md:text-base
//               ">
//                 ورود
//             </p>  
//           </Link> 
          
//           </div>

//       </div>

//       </div>
//     )
// }
// export default AdminUserRegisterationPage;