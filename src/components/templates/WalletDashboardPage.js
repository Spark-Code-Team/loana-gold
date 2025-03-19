import DashboardLeft from "../elements/DashboardLeft";
import Image from "next/image";

const bankImages = [
  "/images/bankimage1.png",
  "/images/bankimage2.png",
  "/images/bankimage3.png",
  "/images/bankimage4.png",
  "/images/bankimage5.png",
  "/images/bankimage6.png"
];

const amounts = [
  "500,000 تومان",
  "1,000,000 تومان",
  "1,500,000 تومان",
  "5,000,000 تومان",
  "10,000,000 تومان"
];

const WalletDashboardPage = () => {
  return (
    <div className="
     w-[912px] 
     h-[650px] 
     border 
     border-[#CBCED7] 
     rounded-2xl 
     ">

      <DashboardLeft title="کیف پول نقدی" />

    <div className="
       h-12 
       flex 
       items-center 
       mt-5
       ">
        <p className="
         text-xl 
         mr-8
         ">
            موجودی شما: 46,000,000 تومان
        </p>
    </div>

    <div className="
     w-[848px]
     h-[445px] 
     rounded-lg 
     border 
     border-[#EDEDED] 
     mt-8 
     mx-8
     p-8
     ">
        <div className="
        flex 
        flex-col 
        gap-y-4
        ">
          <p>افزایش اعتبار</p>
          
          <input
            type="text"
            placeholder="مبلغ را به ریال وارد کنید"
            className="
             focus:outline-none 
             focus:border-[#E1E1E1] 
             focus:ring-0
             border-[1px] 
             border-[#E1E1E1] 
             rounded-xl 
             w-full 
             p-2
             "
          />
          
          <div className="flex justify-between">
            {amounts.map((amount, index) => (
              <p
                key={index}
                className="
                 px-4 
                 py-3 
                 border 
                 text-sm 
                 rounded-lg 
                 cursor-pointer 
                 "
              >
                {amount}
              </p>
            ))}
          </div>

          <p
          className="mt-12"
          > درگاه پرداخت: </p>
          
          <div className="flex justify-between">
            {bankImages.map((img, index) => (
              <Image key={index} src={img} alt="icon bank" width={50} height={50} />
            ))}
          </div>
        </div>

        <div className="
         mt-10
         flex 
         justify-end
         ">
          <button className="
           w-full 
           h-12 
           bg-primary 
           rounded-xl 
           text-black 
           transition
           ">
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletDashboardPage;