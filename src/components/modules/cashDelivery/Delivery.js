import Image from "next/image";

const Delivery = () => {
    return(
    
        
        <div className="
        h-[1010px]
        w-[912px]
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
                   h-12 
                   flex 
                   flex-col
                   items-center
                   mt-5
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
                        ابتدا آدرس خود را تکمیل کنید
                    </p>
                    </div>

                    <div className="
                    md:w-[848px]
                    w-full
                    h-[300px]
                    border-[1px]
                    rounded-xl
                    md:grid
                    md:grid-cols-2
                    md:mt-5
                    pt-5
                    pr-8
                    ">
            <input
            type="text"
            placeholder="مقدار طلا به گرم  "
            className="
             focus:outline-none 
             focus:border-[#E1E1E1] 
             focus:ring-0
             border-[1px] 
             border-[#E1E1E1] 
             rounded-xl 
             md:w-[376px]
             w-full
             mb-5
             "
            />
            <input
            type="text"
            placeholder="مقدار طلا به گرم  "
            className="
             focus:outline-none 
             focus:border-[#E1E1E1] 
             focus:ring-0
             border-[1px] 
             border-[#E1E1E1] 
             rounded-xl 
             md:w-[376px]
             w-full
             mb-5
             "
            />
            <input
            type="text"
            placeholder="مقدار طلا به گرم  "
            className="
             focus:outline-none 
             focus:border-[#E1E1E1] 
             focus:ring-0
             border-[1px] 
             border-[#E1E1E1] 
             rounded-xl 
             md:w-[376px]
             w-full
             mb-5
             "
            />
            <input
            type="text"
            placeholder="مقدار طلا به گرم  "
            className="
             focus:outline-none 
             focus:border-[#E1E1E1] 
             focus:ring-0
             border-[1px] 
             border-[#E1E1E1] 
             rounded-xl 
             md:w-[376px]
             w-full
             mb-5
             "
            />
            <input
            type="text"
            placeholder="مقدار طلا به گرم  "
            className="
             focus:outline-none 
             focus:border-[#E1E1E1] 
             focus:ring-0
             border-[1px] 
             border-[#E1E1E1] 
             rounded-xl 
             md:w-[376px]
             w-full
             mb-5
             "
             />

            </div>

            <div className="
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
            </div>

            <div className="
        md:w-[848px]  
        md:mt-5
        w-full 
        mt-12
        ">
            <button className="
            md:w-[848px] 
            h-[48px] 
            w-[29%] 
            bg-[#D2AB67] 
            rounded-xl"> 
            ثبت آدرس
            </button>
        </div>
                    
            
                   
            
            </div>
        
        </div>
        
    )
}
export default Delivery;