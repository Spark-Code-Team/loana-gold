import Image from "next/image";

const Contactusimages = [
    { id: 1, src: "/images/roadcargold.png", text: "دریافت حضوری طلا" },
    { id: 2, src: "/images/sellinggold.png", text: "فروش طلا" },
    { id: 3, src: "/images/validation.png", text: "اعتبارسنجی" },
    { id: 4, src: "/images/buyinggold.png", text: "خرید طلا" },
];

const ContactUsProcess = () => {
    return(
        <div className="
            md:w-full 
            md:h-96 md:
            md:bg-[#FBFBFB] 
            md:rounded-[40px]
            ">

            <div className="
                md:px-24 
                md:h-[78px] 
                md:mt-8 
                ">

                <p className=" md:text-justify md:pt-8">
                لطفا پیش از ارسال ایمیل یا تماس تلفنی،
                 ابتدا صفحات مربوط به هر یک از خدمات لونا را مشاهده کنید،
                 درصورتی که پاسخ سوالات خود را پیدا نکردید با ما با 
                 شماره تماس 02153924000 در ارتباط باشید. برای خرید اقساطی داخلی ۱، 
                 پیگیری تراکنش داخلی ۲، کیف 
                 پول داخلی ۳، سرویس‌های اپلیکیشن داخلی ۴، بیمه داخلی ۵، پیشنهادات و 
                 انتقادات داخلی ۶، و درصورتی 
                 که داخلی مورد نظر خود را می‌دانید عدد ۹ را شماره‌گیری نمایید.
                </p>

            </div>

            <div className="
                md:mt-14 
                md:flex 
                md:justify-center 
                md:gap-6 
                md:items-center 
                md:mx-auto
                ">

                {Contactusimages.map((item) => (
                    <div 
                        key={item.id} 
                        className="
                          md:w-[184px] 
                          md:h-52 
                          md:rounded-2xl 
                          md:border 
                          md:border-[#DADADA] 
                         md:bg-white 
                          md:flex 
                          md:flex-col 
                          md:items-center 
                          md:justify-center 
                          md:p-4
                          ">

                        <Image 
                        src={item.src} 
                        alt="picture" 
                        width={180} 
                        height={120} 
                        className="
                        md:aspect-square 
                        md:object-contain" 
                        />

                        <p className="
                        md:mt-2 
                        md:text-center
                        ">
                            {item.text}
                        </p>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default ContactUsProcess;