"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const SellinGold = () =>{

    const [sellGold , setSellGold] = useState({
        amount: "",
        cash_amount: "",
    });
    

    const [loading, setLoading] = useState(false);
    
      useEffect(() => {
        console.log(sellGold, "55555555555555");
        
      }, [sellGold])


    const SendData = async () => {
        
        setLoading(true);
    
        const { response, error } = await Dealing({
          amount: sellGold.amount,
          cash_amount: sellGold.cash_amount,
        });
    
        setLoading(false);
      
        if (response) {
          setSellGold ({cash_amount: response.data.toman 
            , amount:response.data.gram
          })
          console.log(response);
          
        } else {
          console.log("اشتباه", error);
          toast.error("🤣🤣😂")
        }
      };

    return(
        <div className="
        md:w-[912px]
        h-full
        ">
        
            
            <div className="
               h-12 
               flex 
               items-center 
               mt-5
               ">
                <p className="
                 text-lg
                 mr-8
                 ">
                    موجودی شما: 3 گرم طلا 
                </p>
            </div>
        
            <div className="
               h-full 
               flex 
               flex-col
               items-center
               my-5
               ">
                <div className="
                w-full
                md:w-[848px]
                ">
                <p className="
                 text-lg
                 text-right
                 md:pb-5
                 ">
                    فروش طلا
                </p>
        
                <input
                    type="number"
                    value={sellGold.amount}
                    onChange={(e)=>setSellGold({amount: e.target.value , cash_amount: ""})}
                    placeholder="مقدار طلا به گرم  "
                    className="
                     focus:outline-none 
                     focus:border-[#E1E1E1] 
                     focus:ring-0
                     border-[1px] 
                     border-[#E1E1E1] 
                     rounded-xl 
                     md:w-[848px]
                     w-full
                     mb-5
                     "
                />
        
                </div>
                
        
                
                <input
                    value={sellGold.cash_amount}
                    // disabled={buyGold.amount != ""}
                    type="number"
                    placeholder="مبلغ دریافتی به تومان"
                    onChange={(e)=>setSellGold({cash_amount: e.target.value , amount: ""})}
                    className="
                     focus:outline-none 
                     focus:border-[#E1E1E1] 
                     focus:ring-0
                     border-[1px] 
                     border-[#E1E1E1] 
                     rounded-xl 
                     md:w-[848px]
                     w-full
                     p-2
                     "
                />

                  <div className="
                                    md:w-[848px]
                                     w-full
                                     md:mt-12
                                    ">
                                    <div  className="
                                    md:w-[131px] 
                                    h-[48px] 
                                    w-[29%] 
                                    bg-[#D2AB67] 
                                    rounded-xl
                                    flex
                                    flex-col
                                    ">
                                       <button className="pt-2" onClick={()=> SendData()}>
                                        محاسبه
                                       </button>
                                    <div className="
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    ">
                                    {loading && (
                                      <ThreeDots
                                      visible={true}
                                      height="10"
                                      width="80"
                                      color="#ffffff"
                                      radius="9"
                                      ariaLabel="three-dots-loading"
                                      wrapperStyle={{}}
                                      wrapperClass=""
                                    />
                                    )}
                                  </div>
                       
                
                                  </div>
                                  </div>
        
                <div className="
                 md:w-[848px] 
                 w-full 
                 flex 
                 gap-x-3 
                 items-center 
                 mt-6 
                 md:text-base 
                 text-sm
                 ">
                    <Image src="/images/vector.png" 
                    alt="vector" 
                    width={26} 
                    height={18}
                    />
                    <p>قیمت لحظه ای خرید هر گرم طلای 15 عیار: 5,340,000 تومان</p>
                </div>
        
                <div className="
                md:w-[848px]  
                md:mt-5
                w-full 
                mt-12
                ">
                    <button className="
                    md:w-[131px] 
                    h-[48px] 
                    w-[29%] 
                    bg-[#D2AB67] 
                    rounded-xl"> 
                    فروش
                    </button>
                </div>
        
            </div>
        
        </div>
    )
}
export default SellinGold;