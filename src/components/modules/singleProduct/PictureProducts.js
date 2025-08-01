import Image from "next/image";
import Save from "../../../../public/icons/Save";
import SocialMediaIcon from "../../../../public/icons/SocialMediaIcon";

const PictureProduct = () => {
  return (
    <div className="w-full lg:w-1/2">
      <Image
        src="/images/ringm.png"
        alt="انگشتر طلا نگین دار"
        width={600}
        height={476}
        className="
          w-full 
          h-auto 
          max-w-[600px] 
          rounded-lg 
          mx-auto
        "
      />

      <div
        className="
          flex 
          flex-wrap
          justify-center
          gap-4 
          mt-4
        "
      >
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src="/images/ringm.png"
            alt={`تصویر ${i + 1}`}
            width={100}
            height={100}
            className="
              w-20 
              h-20 
              rounded-lg 
              cursor-pointer 
              object-cover
            "
          />
        ))}
      </div>

      <div
        className="
          flex 
          justify-between 
          items-center 
          mt-6 
          px-2 
          max-w-[600px] 
          mx-auto
          text-sm 
          sm:text-base
        "
      >
        <div className="flex items-center gap-1">
          <Save className="w-5 h-5" />
          <p>ذخیره</p>
        </div>

        <div className="flex items-center gap-1">
          <SocialMediaIcon className="w-5 h-5" />
          <p>اشتراک گذاری</p>
        </div>
      </div>
    </div>
  );
};

export default PictureProduct;
