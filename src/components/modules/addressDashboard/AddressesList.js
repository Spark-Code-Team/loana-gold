"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import AddNewAddress from "./AddNewAddress";
import { AddressDelete, AddressGet } from "@/service/Addresss";
import { toast } from "react-toastify";

const AddressesList = () => {

  const [showList, setShowList] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [reload, setReload] = useState(false)

  useEffect(() => {
    
    const fetchAddresses = async () => {
      const { response, error } = await AddressGet();
      if (response) {
        setAddresses(response.data.results);
      } else {
        console.error(" خطا در گرفتن لیست آدرس‌ها:", error);
      }
    };

    fetchAddresses();
  }, [reload]);

  const handleDelete = async (id) => {
    const { response, error } = await AddressDelete(id);
  
    if (response) {
      setReload(prev => !prev)
      console.log('افرین عسل قشنگم درسته-> response',response)
      toast.success("آدرس با موفقیت حذف شد ");
      // setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    } else {
      console.error("خطا در حذف آدرس:", error);
    }
  };
  

  return (
    <div className="">
      <div className="my-4">
        <button
          className="
          border-[1px] 
          border-primary 
          text-primary 
          rounded-xl 
          py-2 
          px-8"
          onClick={() => setShowList((prev) => !prev)}
        >
          {showList ? "بستن فرم آدرس" : "افزودن آدرس جدید"}
        </button>
      </div>

      {showList && <AddNewAddress />}

      {addresses.map((address, index) => (
        <div
          key={address.id}
          className="
          md:w-[808px] 
          h-[291px] 
          border-[1px] 
          border-[#CBCBCB] 
          rounded-2xl 
          my-2"
        >
          <div className="
          flex 
          flex-row 
          justify-evenly 
          items-center 
          mt-9">
            <Image
              src="/images/mapbuy.png"
              alt="map"
              width={351}
              height={220}
            />
            <div className="
            w-[304px] 
            h-[208px] 
            leading-10">
              <p>
                {`${address.province},
                  ${address.city}, 
                  پلاک ${address.number}, 
                  واحد ${address.vahed}`}
              </p>
              <p className="text-[#606060]">کد پستی: {address.postal_code}</p>
              <p className="text-[#606060] hidden">ID: {address.id}</p>

              

              <div>

              <button className="
              border-[1px] 
              border-primary 
              text-primary 
              rounded-xl 
              px-8
              mt-20
              ">
                ویرایش
              </button>

              <button className="
              border-[1px] 
              border-primary 
              text-primary 
              rounded-xl 
              px-8
              mt-20
              mr-2
              "
              onClick={() => handleDelete(address.id)}
              >
                حذف
              </button>

              </div>
             

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressesList;


// "use client"
// import Image from "next/image";
// import { useState } from "react";
// import AddNewAddress from "./AddNewAddress";

// const AddressesList = () =>{

//     const [showList , setShowList] = useState(false);

//     return(
//       <div className="">
//                   <div className="my-4">

//                 <button className="
//                   border-[1px]
//                   border-primary
//                   text-primary
//                   rounded-xl
//                   py-2
//                   px-8
//                   "
//                 onClick={() => setShowList(prev => !prev)}
//                 >
//                 {showList ? "بستن فرم آدرس" : "افزودن آدرس جدید"}

                  
//                 </button>

//                 </div>
                
//                 {showList && <AddNewAddress/>}
      
              
//             <div
//                 className="
//                   md:w-[808px]
//                   h-[291px]
//                   border-[1px]
//                   border-[#CBCBCB]
//                   rounded-2xl
//                   my-2
//                   ">
                              
//                 <div
//                   className="
//                       flex
//                       flex-row
//                       justify-evenly
//                       items-center
//                       mt-9
//                       "
//                 >
//                   <Image
//                     src="/images/mapbuy.png"
//                     alt="map"
//                     width={351}
//                     height={220}
//                   />
      
//                   <div
//                     className="
//                       w-[304px]
//                       h-[208px]
//                       leading-10
//                       "
//                   >
//                     <p>
//                       بجنورد, میدان شهید, بین شهید و 17 شهریور ,کوچه عزیز مصر ,پلاک 13
//                     </p>
      
//                     <p className="text-[#606060]">خراسان شمالی - بجنورد</p>
      
//                     <p className="text-[#606060]">خراسان شمالی - بجنورد</p>
      
//                     <p className="text-[#606060]">خراسان شمالی - بجنورد</p>
      
//                   </div>
      
//                 </div>
      
//             </div>

//             <div
//                 className="
//                   w-[808px]
//                   h-[291px]
//                   border-[1px]
//                   border-[#CBCBCB]
//                   rounded-2xl
//                   "
//               >
                  
      
                  
//                 <div
//                   className="
//                       flex
//                       flex-row
//                       justify-evenly
//                       items-center
//                       mt-9
//                       "
//                 >
//                   <Image
//                     src="/images/mapbuy.png"
//                     alt="map"
//                     width={351}
//                     height={220}
//                   />
      
//                   <div
//                     className="
//                       w-[304px]
//                       h-[208px]
//                       leading-10
//                       "
//                   >
//                     <p>
//                       بجنورد, میدان شهید, بین شهید و 17 شهریور ,کوچه عزیز مصر ,پلاک 13
//                     </p>
      
//                     <p className="text-[#606060]">خراسان شمالی - بجنورد</p>
      
//                     <p className="text-[#606060]">خراسان شمالی - بجنورد</p>
      
//                     <p className="text-[#606060]">خراسان شمالی - بجنورد</p>
      
//                   </div>
      
//                 </div>
      
//             </div>
      
              
      
               
      
                
      
      
      
//               </div>
//     )
// }
// export default AddressesList;