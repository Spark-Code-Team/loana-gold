import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "انگشتر طلا نگین دار 7 میلی متری",
    ayar: 24,
    weight: "10.1 گرم",
    price: "80,148,514 تومان",
    image: "/images/ringm.png",
  },
  {
    id: 2,
    name: "انگشتر طلای کلاسیک 5 میلی متری",
    ayar: 18,
    weight: "8.5 گرم",
    price: "60,248,900 تومان",
    image: "/images/ringm.png",
  },
  {
    id: 3,
    name: "حلقه طلای ساده 6 میلی متری",
    ayar: 22,
    weight: "9.2 گرم",
    price: "70,356,420 تومان",
    image: "/images/ringm.png",
  },
  {
    id: 4,
    name: "انگشتر طرح گل نگین دار",
    ayar: 21,
    weight: "7.8 گرم",
    price: "55,999,200 تومان",
    image: "/images/ringm.png",
  },
  {
    id: 5,
    name: "انگشتر مردانه طلای سفید",
    ayar: 18,
    weight: "12.3 گرم",
    price: "85,248,700 تومان",
    image: "/images/ringm.png",
  },
  {
    id: 6,
    name: "حلقه ظریف طلای زرد",
    ayar: 24,
    weight: "5.5 گرم",
    price: "45,148,600 تومان",
    image: "/images/ringm.png",
  },
  {
    id: 7,
    name: "انگشتر طرح گل نگین دار",
    ayar: 21,
    weight: "7.8 گرم",
    price: "55,999,200 تومان",
    image: "/images/ringm.png",
  },
  {
    id: 8,
    name: "انگشتر مردانه طلای سفید",
    ayar: 18,
    weight: "12.3 گرم",
    price: "85,248,700 تومان",
    image: "/images/ringm.png",
  },
  {
    id: 9,
    name: "حلقه ظریف طلای زرد",
    ayar: 24,
    weight: "5.5 گرم",
    price: "45,148,600 تومان",
    image: "/images/ringm.png",
  },
];

const ProductsCard = () => {
  return (
    <div
      className="
        mt-10 
        grid 
        grid-cols-1   /* موبایل: یک ستون */
        sm:grid-cols-2 /* تبلت: دو ستون */
        lg:grid-cols-3 /* دسکتاپ: سه ستون */
        gap-4
        justify-between
        px-4  /* فاصله از چپ و راست که در موبایل بهتر باشه */
      "
    >
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} passHref>
          <div
            className="
              w-full            /* تا کارت پر کند عرض ستون */
              max-w-xs          /* حداکثر عرض کارت */
              rounded-lg 
              border-[1px] 
              border-[#DADADA]
              mx-auto           /* وسط چین در ستون‌های کمتر */
              hover:shadow-lg
              transition-shadow
              duration-300
              cursor-pointer
              h-auto            /* ارتفاع اتوماتیک */
            "
          >
            <div className="flex flex-col justify-center items-center p-4">
              <Image
                src={product.image}
                alt={product.name}
                width={256}
                height={293}
                className="mt-4 object-contain w-full h-auto"
              />
              <div className="w-full pr-0 sm:pr-4 mt-4">
                <p className="text-base font-bold">{product.name}</p>
                <p className="text-base text-[#3B3B3B] mt-1">عیار: {product.ayar}</p>
                <p className="text-base text-[#3B3B3B] mt-1">وزن: {product.weight}</p>
              </div>
              <div className="w-full flex justify-end font-bold text-base mt-4 pl-0 sm:pl-4">
                <p>{product.price}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsCard;
