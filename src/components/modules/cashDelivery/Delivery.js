"use client"
import { useState , useEffect } from "react";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";
import { walletBalance } from "@/service/finance";

const Delivery = () => {

    const [balance , setBalance] = useState()
    const [weHaveData, setWeHaveData] = useState(false);

    useEffect(()=>{
            const getBalance = async () => {
                const {response , error} = await walletBalance()
                if (response) {
                    setBalance(response.data.gold.amount)
                    setWeHaveData(true)
                }else{
                    console.log(error)
                }
            }
            getBalance()
    
    
        },[])
    

    return(<>
        <div className="
        h-[1010px]
        w-full
        ">
        
            
        
            <div className="
               h-12 
               flex 
               items-center 
               mt-5
               ">
                <p className="
                 text-lg
                 ">
            <div className="
               h-12 
               flex 
               items-center 
               mt-5
               ">
                <p className="
                 pt-2
                 flex 
                 justify-center
                 items-center
                 min-h-[40px]
                 min-w-[100px]
                 text-lg
                                  md:mr-10
                 mr-5
                 ">
           موجودی شما:{weHaveData?<> {balance} گرم طلا</>:<ThreeDots
                        visible={true}
                        top="5"
                        height="10"
                        width="80"
                        color="primary"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />}
                </p>
            </div></p>
            </div>
        
            <div className="
                   h-12 
                   flex 
                   flex-col
                   items-center
                   mt-5
                   ">
                    <div className="
                    w-full
                    ">
                    <p className="
                     text-lg
                     text-right
                     pr-5
                     md:pr-10
                     pb-5
                    
                     ">
                        ابتدا آدرس خود را تکمیل کنید
                    </p>
                    </div>

            <div className="
            w-full
            h-max
            border-[1px]
            rounded-xl
            grid
            grid-cols-1        
            md:grid-cols-2     
            gap-5           
            md:mt-5
            py-5
            px-4
            ">

            <input
                type="text"
                placeholder="وزن خالص طلا (گرم)"
                className="
                focus:outline-none
                focus:border-[#E1E1E1]
                focus:ring-0
                border-[1px]
                border-[#E1E1E1]
                rounded-xl
                m-auto
                w-full
                md:w-[376px]
                "
            />

            <input
                type="text"
                placeholder="عیار طلا"
                className="
                focus:outline-none
                focus:border-[#E1E1E1]
                m-auto
                focus:ring-0
                border-[1px]
                border-[#E1E1E1]
                rounded-xl
                w-full
                md:w-[376px]
                "
            />

            <input
                type="text"
                placeholder="تاریخ تحویل"
                className="
                focus:outline-none
                focus:border-[#E1E1E1]
                m-auto
                focus:ring-0
                border-[1px]
                border-[#E1E1E1]
                rounded-xl
                w-full
                md:w-[376px]
                "
            />

            <input
                type="text"
                placeholder="محل تحویل"
                className="
                focus:outline-none
                focus:border-[#E1E1E1]
                m-auto
                focus:ring-0
                border-[1px]
                border-[#E1E1E1]
                rounded-xl
                w-full
                md:w-[376px]
                "
            />

            <input
                type="text"
                placeholder="توضیحات اضافی"
                className="
                focus:outline-none
                m-auto
                focus:border-[#E1E1E1]
                focus:ring-0
                border-[1px]
                border-[#E1E1E1]
                rounded-xl
                
                w-full
                md:w-[376px]
                "
            />

            </div>

            {/* <div className="
            md:w-[848px]
            w-full
            mt-8
            ">
                <Image
                src="/images/mapdelivery2.png"
                alt="map"
                width={500}
                height={500}
                className="
                w-full
                h-full
                "
                />
            </div> */}

            <div className="
        md:w-[848px]  
        md:mt-5
        w-full
        px-5 
        mt-12
        ">
            <button className="
            md:w-[848px]
            w-full 
            h-[48px] 
            bg-[#D2AB67] 
            rounded-xl"> 
            ثبت آدرس
            </button>
        </div>
                    
            
                   
            
            </div>
        
        </div></>
        
    )
}
export default Delivery;