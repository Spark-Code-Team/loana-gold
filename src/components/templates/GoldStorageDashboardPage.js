import DashboardLeft from "../elements/DashboardLeft";

const GoldStorageDashboardPage = () =>{
    return (
        <div className="
        w-[912px]
        h-[820px]
        border-[1px]
        border-[#CBCED7]
        rounded-2xl
        ">
            <DashboardLeft
            title="مخزن طلا"
            />

            <div className="
            w-[848px]
            h-[330px]
            mx-8
            mt-8
            border-b-[1px]
            border-[#DADADA]
            ">
                <div className="
                pr-4
                pt-4
                ">
                    <div className="flex flex-col gap-y-3">

                    <p>
                    اعتبار شما:
                    7 گرم طلا
                    </p>

                    <p>
                    خرید طلا آب شده
                    </p>

                    <p>
                    وزن: 2 گرم
                    </p>

                    <p>
                    به مبلغ: 100 000 000 تومان 
                    </p>

                    <p>
                    شناسه تراکش: 
                    TW8790741
                    </p>

                    <div className="
                    bg-[#F6EEE1]
                    w-[363]
                    p-2
                    flex
                    justify-center
                    rounded-lg
                    ">
                    <p>
                    امکان تحویل حضوری طلا پس از پرداخت کامل اقساط
                    </p>
                    </div>

                    <div className="
                    bg-[#EDEDED]
                    w-[219]
                    p-2
                    flex
                    justify-center
                    rounded-lg
                    ">
                    <p className="text-sm">
                    درخواست ساخت شمش و تحویل
                    </p>
                    </div>

                    </div>
  
                </div>
             
            </div>


            <div className="
            w-[848px]
            h-[330px]
            rounded-lg
            mx-8
            mt-8
            ">
                <div className="
                pr-4
                pt-4
                ">
                    <div className="flex flex-col gap-y-3">

                    <p>
                    خرید طلا آب شده
                    </p>

                    <p>
                        وزن: 2گرم
                    </p>

                    <p>
                    به مبلغ: 100 000 000 تومان
                    </p>

                    <p>
                    شناسه تراکنش: TW8790741
                    </p>

                    <p>
                        تاریخ خرید: ۱۴۰۲/۰۹/۱۲ - ۱۹:۳۰ 
                    </p>

                    <div className="
                    bg-[#EDEDED]
                    w-[219px]
                    p-2
                    flex
                    justify-center
                    rounded-lg
                    ">
                    <p className="text-sm">
                    درخواست ساخت شمش و تحویل
                    </p>
                    </div>

                    <div className="
                    bg-[#EDEDED]
                    w-[82px]
                    h-12
                    p-2
                    flex
                    justify-center
                    rounded-lg
                    ">
                    <button className="text-sm">
                        نقد کردن
                    </button>
                    </div>

                    </div>

                </div>
             
            </div>

            

        </div>
    )
}
export default GoldStorageDashboardPage;