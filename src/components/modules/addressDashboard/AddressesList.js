"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import AddNewAddress from "./AddNewAddress";
import { AddressDelete, AddressGet } from "@/service/Addresss";
import { toast } from "react-toastify";
import AddressUpdate from "./AddressUpdate";
import { ThreeDots } from "react-loader-spinner";

const AddressesList = () => {

  const [showList, setShowList] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [reload, setReload] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false);
  const [weHaveData, setWeHaveData] = useState(false);

  useEffect(() => {
    
    const fetchAddresses = async () => {
      const { response, error } = await AddressGet();
      if (response) {
        setAddresses(response.data.results);
        setWeHaveData(true)
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
      toast.success("آدرس با موفقیت حذف شد ");
    } else {
      console.error("خطا در حذف آدرس:", error);
    }
  };
  

  return (
    <div className="flex flex-col w-full">

      <div className="my-4 ">
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
      {weHaveData? <>{addresses.length>0?<>
            {addresses.map((address, index) => (

    <>


            <div
              key={address.id}
              className="
              md:w-[808px] 
              h-[291px] 
              border-[1px] 
              border-[#CBCBCB] 
              rounded-2xl 
              my-2
              "
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
                  "
                  onClick={() =>setShowEditForm(prev => !prev)}
                  >
                  {showEditForm ? " بستن فرم ویرایش " : "  ویرایش "}

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

            {showEditForm && (
            <div className=" 
            w-[808px] 
            h-[500px]
            ">
            <AddressUpdate 
              id={address.id} 
              setReload={setReload}
            />
            </div>
            )}
          </>


          ))}
      </>:<>آدرس ثبت شده ای وجود ندارد</>}
</> : <ThreeDots
      visible={true}
      top="5"
      height="10"
      width="80"
      color="#000"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
  />}


    </div>
  );
};

export default AddressesList;


