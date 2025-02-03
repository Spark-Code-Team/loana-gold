
import Image from "next/image";
const InstallmentPayment = () => 
    {
        return(
            <div className="
            bg-[#FAF9F8]
            w-full
            h-[364px]
            px-9
            justify-around
            flex
            ">
                <div className="
                w-1/2
                ">
                    <Image
                    src="/images/ring.png"
                    alt=""
                    width={613}
                    height={364}
                    />
                </div>

                <div className="
                w-1/2
                ">
                    <p className="
                    pt-10
                    text-2xl
                    font-bold
                    ">
                    پرداخت قسطی، راحت و بدون سود!
                    </p>

                    <div className="
                    w-[500px]
                    h-32
                    ">

                    <p className="
                    pt-4
                    leading-7
                    "
                    >
                    ما در لونا به عنوان اولین پلتفرم خرید و فروش طلای قسطی در ایران،
                     شرایطی ویژه و منحصربه‌فرد برای مشتریان عزیز فراهم کرده‌ایم تا
                      خرید طلا دیگر یک رؤیا نباشد! در لونا، شما می‌توانید طلای مورد نظر خود
                      را با شرایط پرداخت آسان و بدون نیاز به پیش‌پرداخت بالا تهیه کنید. 
                    </p>

                    </div>

                    <button className="
                    w-32
                    h-12
                    bg-primary
                    rounded-xl
                    mt-8
                    " >
                        خرید قسطی
                    </button>
                </div>
            
            </div>
        )
    }

export default InstallmentPayment;