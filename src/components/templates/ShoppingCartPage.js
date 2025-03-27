import Image from "next/image";
const ShoppingCartPage = () =>{
    return(
        <div className="
        flex
        flex-row
        justify-evenly
        mt-28
        ">
            <div>

            <div className="
            w-[760px]
            h-[300px]
            border-[1px]
            border-[#C4C4C4]
            rounded-xl
            ">
               vbnm,
            </div>

            <div className="
            w-[760px]
            h-[300px]
            border-[1px]
            border-[#C4C4C4]
            rounded-xl
            ">
               vbnm,
            </div>

            <div className="
            w-[760px]
            h-[300px]
            border-[1px]
            border-[#C4C4C4]
            rounded-xl
            ">
               vbnm,
            </div>

            </div>
          

            <div>
                <div className="
                        w-[392px]
                        h-[211px]
                        ">
                            <div className="
                            w-[392px]
                            h-14
                            flex
                            flex-row
                            justify-between
                            ">
                                <div>
                                    <Image
                                    src="/images/progress.png"
                                    alt="progress"
                                    width={69}
                                    height={50}
                                    />
                                </div>
                
                                <div>
                                <Image
                                    src="/images/framebuying.png"
                                    alt="progress"
                                    width={69}
                                    height={50}
                                    />
                                </div>
                
                                <div>
                                <Image
                                    src="/images/basketbuy.png"
                                    alt="progress"
                                    width={69}
                                    height={50}
                                    />
                                </div>
                
                                <div>
                                <Image
                                    src="/images/framebuying.png"
                                    alt="progress"
                                    width={69}
                                    height={50}
                                    />
                                </div>
                
                                <div>
                                <Image
                                    src="/images/paybuy.png"
                                    alt="progress"
                                    width={69}
                                    height={50}
                                    />
                                </div>
                            </div>
                
                            <div className="
                            w-[392px]
                            h-36
                            border-[1px]
                            border-[#DADADA]
                            rounded-lg
                            flex
                            flex-col
                            items-center
                            gap-y-6
                            ">
                                <p className="mt-6">
                                در انتخاب آدرس و همچنین انتخاب روز ارسال دقت فرمایید.
                                </p>
                                <button className="
                                w-[344px]
                                h-12
                                bg-primary
                                text-black
                                rounded-xl
                                ">
                                تکمیل فرایند خرید
                                </button>
                
                            </div>
                
                        </div>
            </div>
        </div>
    )
}
export default ShoppingCartPage;