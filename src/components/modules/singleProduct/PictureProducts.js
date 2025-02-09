
import Image from "next/image";
const PictureProduct = () => {
    return (
            <div className="w-1/2">
              <Image
                src="/images/ringm.png"
                alt="انگشتر طلا نگین دار"
                width={600}
                height={300}
                className="rounded-lg"
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
        </div>
      );
}
export default PictureProduct;