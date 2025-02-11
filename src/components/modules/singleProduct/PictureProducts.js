
import Image from "next/image";
import Save from "../../../../public/icons/Save";
import SocialMediaIcon from "../../../../public/icons/SocialMediaIcon";
const PictureProduct = () => {
    return (
            <div className="w-1/2">
              <Image
                src="/images/ringm.png"
                alt="انگشتر طلا نگین دار"
                width={200}
                height={200}
                className="
                w-[600px]
                h-[476px]
                rounded-lg"
              />

              <div className="
               flex 
               gap-6 
               mt-4
               ">
                <Image src="/images/ringm.png" 
                alt="تصویر 1" 
                width={100} 
                height={100} 
                className="
                rounded-lg 
                cursor-pointer
                "/>
                  <Image src="/images/ringm.png" 
                alt="تصویر 1" 
                width={100} 
                height={100} 
                className="
                rounded-lg 
                cursor-pointer
                "/>
                  <Image src="/images/ringm.png" 
                alt="تصویر 1" 
                width={100} 
                height={100} 
                className="
                rounded-lg 
                cursor-pointer
                "/>
                  <Image src="/images/ringm.png" 
                alt="تصویر 1" 
                width={100} 
                height={100} 
                className="
                rounded-lg 
                cursor-pointer
                "/>
                  <Image src="/images/ringm.png" 
                alt="تصویر 1" 
                width={100} 
                height={100} 
                className="
                rounded-lg 
                cursor-pointer
                "/>


              </div>    


              <div className="
               w-[600px] 
               h-8
               mt-8
               justify-between
               flex
               ">
                <div className="flex items-center ">
                <Save className/>
                <p className="
                text-lg
                mr-1
                ">
                ذخیره
                </p>
                </div>

                <div className="flex items-center ">
                <SocialMediaIcon className/>
                <p className="
                text-lg
                mr-1
                ">
                اشتراک گذاری
                </p>
                </div>

                
                


              </div> 

        </div>
      );
}
export default PictureProduct;