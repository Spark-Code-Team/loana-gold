
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
    <div className="
     mt-10 
     grid 
     grid-cols-3 
     gap-y-4 
     justify-between
     ">
      {products.map((product) => (
        <div
          key={product.id}
          className="
           w-72 
           h-[463px] 
           rounded-lg 
           border-[1px] 
           border-[#DADADA]
           ">
          <div className="
           flex 
           flex-col 
           justify-center 
           items-center
           ">
            <Image
              src={product.image}
              alt={product.name}
              width={256}
              height={293}
              className="mt-4"
            />

            <div className="w-full pr-4">
              <p className="text-base font-bold mt-[6px]">{product.name}</p>
              <p className="text-base text-[#3B3B3B] mt-[6px]">عیار: {product.ayar}</p>
              <p className="text-base text-[#3B3B3B] mt-[6px]">وزن: {product.weight}</p>
            </div>

            <div className="
             w-full 
             flex 
             justify-end 
             pl-4 
             pt-4 
             font-bold 
             text-base
             ">
              <p>{product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
