import LeftBuying from "../modules/buying/LeftBuying";
import Image from "next/image";
const AddNewAddressPage = () => {
  return (
    <>
      <div
        className="
        flex
        flex-row
        justify-evenly
        mt-28
        "
      >
        <div>

        
        <div
          className="
            w-[808px]
            h-[291px]
            border-[1px]
            border-[#CBCBCB]
            rounded-2xl
            "
        >
            

            
          <div
            className="
                flex
                flex-row
                justify-evenly
                items-center
                mt-9
                "
          >
            <Image
              src="/images/mapbuy.png"
              alt="map"
              width={351}
              height={220}
            />

            <div
              className="
                w-[304px]
                h-[208px]
                leading-10
                "
            >
              <p>
                بجنورد, میدان شهید, بین شهید و 17 شهریور ,کوچه عزیز مصر ,پلاک 13
              </p>

              <p className="text-[#606060]">خراسان شمالی - بجنورد</p>

              <p className="text-[#606060]">خراسان شمالی - بجنورد</p>

              <p className="text-[#606060]">خراسان شمالی - بجنورد</p>

            </div>

          </div>

          </div>

        

          <div className="mt-4">
            <button className="
            border-[1px]
            border-primary
            text-primary
            rounded-xl
            py-2
            px-8
            ">
            افزودن آدرس جدید
            </button>
          </div>

          <div className="
          border-b-[1px]
          mt-5
          pb-3
          ">
            <p>
            انتخاب روز ارسال
            </p>
          </div>

          <div className="
          space-x-4
          space-x-reverse
          mt-8">
            <span className="
            w-24
            h-12
            bg-[#F6EEE1]
            text-primary
            py-3
            px-5
            rounded-lg
            ">
                15 مهر 
            </span>

            <span className="
            w-24
            h-12
            border-[1px]
            border-[#868686]
            py-3
            px-5
            rounded-lg
            ">
                15 مهر 
            </span>

            <span className="
            w-24
            h-12
            border-[1px]
            border-[#868686]
            py-3
            px-5
            rounded-lg
            ">
                15 مهر 
            </span>

            <span className="
            w-24
            h-12
            border-[1px]
            border-[#868686]
            py-3
            px-5
            rounded-lg
            ">
                15 مهر 
            </span>
          </div>


        </div>
        

        <LeftBuying />
      </div>
    </>
  );
};
export default AddNewAddressPage;
