const OnlineCalculation = () => {
    return(


    <div className="my-auto">

    <p className="
    pb-10
    text-[24px]
    font-bold
    ">
        لونا اولین پلتفرم خرید قسطی طلا آب شده
    </p>

        <div className="
        w-[560px]
        border-[1px]
        border-[#E1E1E1]
        rounded-xl
        px-[32px]
        pt-9
        h-96
        "
        >
            <div className="
            w-[496px]
            h-[224px]
            flex
            flex-col
            justify-around
            "
            >

                <div>
                    <button className="
                    w-[60px]
                    h-8
                    bg-[#DADADA]
                    rounded-xl
                    ">
                    خرید
                    </button>

                <button className="
                    w-[60px]
                    h-8
                    mr-4
                    bg-[#F9F9F9]
                    rounded-xl
                    "> 
                    فروش
                </button>

                </div>

                <div>
                    <input
                     type="text"
                     placeholder="مقدار طلا به میلی گرم"
                     className="
                     w-[496px]
                     h-14
                     rounded-xl
                     border-[1px]
                     border-[#E1E1E1]
                     "
                    />
                </div>

                <div>
                <input
                     type="text"
                     placeholder="مقدار طلا به میلی گرم"
                     className="
                     w-[496px]
                     h-14
                     rounded-xl
                     border-[1px]
                     border-[#E1E1E1]
                     "
                    />
                </div>

                <div>
                    <p>
                    قیمت لحظه ای خرید هر گرم طلای 15 عیار: 5,340,000 تومان
                    </p>
                </div>

            </div>

            <div className="
            pt-14
            ">
                <button className="
                w-32
                h-12
                rounded-lg
                bg-[#D2AB67]
                
                ">
                    خرید

                </button>

            </div>

        </div>
    
        </div>
    
    )
}
export default OnlineCalculation;