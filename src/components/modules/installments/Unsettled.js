import DashboardLeft from "@/components/elements/DashboardLeft";

const Unsettled = () =>{
    return(
        <div className="
        w-[912px]
        h-[585px]
        border-[1px]
        border-[#CBCED7]
        rounded-2xl
        ">
            <DashboardLeft
            title="اقساط"
            />

            <div className="
            h-12
            w-full
            flex
            flex-row
            items-center
            mt-5
            ">
                <button className="
                w-[101]
                h-8
                bg-[#D1DDF1]
                rounded-xl
                mx-8
                text-sm
                font-bold
                "
                >تسویه نشده
                </button>

                <button className="
                w-[101]
                h-8
                bg-[#F6F6F6]
                rounded-xl
                mx-8
                text-sm
                font-bold
                "
                >تسویه شده
                </button>

                <button className="
                w-[101]
                h-8
                bg-[#F6F6F6]
                rounded-xl
                mx-8
                text-sm
                font-bold
                "
                > پیش از موعد
                </button>

            </div>

            <div className="
            w-[848px]
            h-[385px]
            rounded-lg
            border-[1px]
            border-[#EDEDED]
            mx-8
            mt-8
            ">
                <div className="
                pr-4
                pt-4
                ">
                    <div className="flex flex-col gap-y-3">

                    <p>
                    بدهی قابل پرداخت:
                    <span className="text-[#E90000] px-1">
                      ( جریمه دیر کرد) 665 +
                    </span>
                    ۱۰۰,۰۰۰,۰۰۰ تومان
                    </p>

                    <p>
                    تاریخ سر رسید: 
                    <span className="text-[#E90000] px-1">
                    2 روز از مهلت پرداخت گذشته
                    </span>
                    </p>

                    <p>
                    دوره: 7
                    </p>

                    <p>
                    از تاریخ: 1403/04/10
                    </p>

                    <p>
                    تا تاریخ: 1404/10/7
                    </p>

                    <p>
                    کل بدهی: 180,761,980
                    </p>

                    <p>
                    وضعیت:
                    <span className="text-[#E90000] px-1">
                    تسویه نشده
                    </span>
                    </p>

                    </div>

                    <div className="
                    w-[616px]
                    h-10
                    bg-[#FFE0E0]
                    mt-4
                    flex 
                    items-center
                    justify-center
                    ">
                        <p className="text-[#E90000]">
                        توجه: در صورت عدم پرداخت تا یک هفته پس از مهلت پرداخت خرید شما لغو میشود. 
                        </p>

                    </div>

                    <div className="
                     mt-4
                     flex
                     justify-end

                    ">
                        <button className="
                         w-20
                         h-10
                         bg-primary
                         rounded-lg
                         ml-5
                        ">
                            پرداخت
                        </button>
                    </div>
                    
                </div>
             
            </div>

        </div>
    )
}
export default Unsettled;