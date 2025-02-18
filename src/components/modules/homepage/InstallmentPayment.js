
import Image from "next/image";
const InstallmentPayment = () => 
    {
        return(
            <div className="
            bg-[#FAF9F8]
            md:w-full
            md:h-[364px]
            md:px-9
            md:justify-around
            md:flex
            hidden
            ">
                <div className="
                md:w-1/2
                ">
                    <Image
                    src="/images/ring.png"
                    alt="imagemd:"
                    width={613}
                    height={364}
                    />
                </div>

                <div className="
                md:w-1/2
                ">
                    <p className="
                    md:pt-10
                    md:text-2xl
                    md:font-bold
                    ">
                    پرداخت قسطی، راحت و بدون سود!
                    </p>

                    <div className="
                    md:w-[500px]
                    md:h-32
                    ">

                    <p className="
                    md:pt-4
                    md:leading-7
                    "
                    >
                    ما در لونا به عنوان اولین پلتفرم خرید و فروش طلای قسطی در ایران،
                     شرایطی ویژه و منحصربه‌فرد برای مشتریان عزیز فراهم کرده‌ایم تا
                      خرید طلا دیگر یک رؤیا نباشد! در لونا، شما می‌توانید طلای مورد نظر خود
                      را با شرایط پرداخت آسان و بدون نیاز به پیش‌پرداخت بالا تهیه کنید. 
                    </p>

                    </div>

                    <button className="
                    md:w-32
                    md:h-12
                    bg-primary
                    md:rounded-xl
                    md:mt-8
                    " >
                        خرید قسطی
                    </button>
                </div>
            
            </div>
        )
    }

export default InstallmentPayment;