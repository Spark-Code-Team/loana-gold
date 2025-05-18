import Image from "next/image";

const Cash = () =>{
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
            type="text"
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
            type="text"
            placeholder="مبلغ دریافتی به تومان"
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
export default Cash;