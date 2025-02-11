import Online from "../../../../public/icons/Online";

const OnlineCalculation = () => {
    return(
    <div className="my-auto">

    <p className="
    md:pb-10
    md:text-[24px]
    md:font-bold
    ">
        لونا اولین پلتفرم خرید قسطی طلا آب شده
    </p>

        <div className="
        md:w-[560px]
        md:border-[1px]
        md:border-[#E1E1E1]
        md:rounded-xl
        md:px-[32px]
        md:pt-9
        md:h-96
        "
        >
            <div className="
            md:w-[496px]
            md:h-[224px]
            md:flex
            md:flex-col
            md:justify-around
            "
            >

                <div>
                    <button className="
                    md:w-[60px]
                    md:h-8
                    md:bg-[#DADADA]
                    md:rounded-xl
                    ">
                    خرید
                    </button>

                <button className="
                    md:w-[60px]
                    md:h-8
                    md:mr-4
                    md:bg-[#F9F9F9]
                    md:rounded-xl
                    "> 
                    فروش
                </button>

                </div>

                <div>
                    <input
                     type="text"
                     placeholder="مقدار طلا به میلی گرم"
                     className="
                     md:w-[496px]
                     md:h-14
                     md:rounded-xl
                     md:border-[1px]
                     md:border-[#E1E1E1]
                     "
                    />
                </div>

                <div>
                <input
                     type="text"
                     placeholder="مقدار طلا به میلی گرم"
                     className="
                     md:w-[496px]
                     md:h-14
                     md:rounded-xl
                     md:border-[1px]
                     md:border-[#E1E1E1]
                     "
                    />
                </div>

                <div className="
                flex 
                items-center 
                space-x-2 
                rtl:space-x-reverse
                ">
                    <Online className="w-6 h-6"/>
                    <p>
                    قیمت لحظه ای خرید هر گرم طلای 15 عیار: 5,340,000 تومان
                    </p>
                </div>

            </div>

            <div className="
            md:pt-14
            ">
                <button className="
                md:w-32
                md:h-12
                md:rounded-lg
                bg-primary
                
                ">
                    خرید

                </button>

            </div>

        </div>
    
        </div>
    
    )
}
export default OnlineCalculation;