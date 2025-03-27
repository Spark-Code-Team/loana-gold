"use client";
import Image from "next/image";
import { useState } from "react";
import LeftBuyingSecond from "../modules/buying/LeftBuyingSecond";
const ShoppingCartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
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
            w-[760px]
            h-[300px]
            border-[1px]
            border-[#C4C4C4]
            rounded-xl
            flex
            flex-row
            justify-evenly
            items-center
            "
        >
          <Image
            src="/images/ringbuying.png"
            alt="ringm"
            width={391}
            height={252}
            className="
               w-[391px]
               h-[252px]
               "
          />

          <div
            className="
               w-[312px]
               h-[252]
               leading-10
               "
          >
            <p>انگشتر طلا نگین دار 7 میلی متری</p>

            <p>عیار: 24</p>

            <p>وزن: 10 گرم</p>

            <p>سایز: 42</p>

            <div
              className="
                w-[312px]
                h-8
                mt-14
                flex
                flex-row
                justify-between
                "
            >
              <p>{(1_807_790_874 * quantity).toLocaleString()} تومان</p>

              <div
                className="
                     flex 
                     items-center 
                     w-24 
                     justify-between 
                     mt-2
                     "
              >
                <button
                  className="
                         w-8 
                         h-8 
                         flex 
                         items-center 
                         justify-center 
                         border-[1px] 
                         border-primary 
                         rounded-full
                         "
                  onClick={increase}
                >
                  +
                </button>

                <span className="text-lg">{quantity}</span>

                <button
                  className="
                         w-8 
                         h-8 
                         flex 
                         items-center 
                         justify-center 
                         border-[1px] 
                         border-primary 
                         rounded-full
                         "
                  onClick={decrease}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            w-[760px]
            h-[300px]
            border-[1px]
            border-[#C4C4C4]
            rounded-xl
            flex
            flex-row
            justify-evenly
            items-center
            mt-6
            "
        >
          <Image
            src="/images/ringbuying.png"
            alt="ringm"
            width={391}
            height={252}
            className="
               w-[391px]
               h-[252px]
               "
          />

          <div
            className="
               w-[312px]
               h-[252]
               leading-10
               "
          >
            <p>انگشتر طلا نگین دار 7 میلی متری</p>

            <p>عیار: 24</p>

            <p>وزن: 10 گرم</p>

            <p>سایز: 42</p>

            <div
              className="
                w-[312px]
                h-8
                mt-14
                flex
                flex-row
                justify-between
                "
            >
              <p>{(1_807_790_874 * quantity).toLocaleString()} تومان</p>

              <div
                className="
                     flex 
                     items-center 
                     w-24 
                     justify-between 
                     mt-2
                     "
              >
                <button
                  className="
                         w-8 
                         h-8 
                         flex 
                         items-center 
                         justify-center 
                         border-[1px] 
                         border-primary 
                         rounded-full
                         "
                  onClick={increase}
                >
                  +
                </button>

                <span className="text-lg">{quantity}</span>

                <button
                  className="
                         w-8 
                         h-8 
                         flex 
                         items-center 
                         justify-center 
                         border-[1px] 
                         border-primary 
                         rounded-full
                         "
                  onClick={decrease}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            w-[760px]
            h-[300px]
            border-[1px]
            border-[#C4C4C4]
            rounded-xl
            flex
            flex-row
            justify-evenly
            items-center
            mt-6
            "
        >
          <Image
            src="/images/ringbuying.png"
            alt="ringm"
            width={391}
            height={252}
            className="
               w-[391px]
               h-[252px]
               "
          />

          <div
            className="
               w-[312px]
               h-[252]
               leading-10
               "
          >
            <p>انگشتر طلا نگین دار 7 میلی متری</p>

            <p>عیار: 24</p>

            <p>وزن: 10 گرم</p>

            <p>سایز: 42</p>

            <div
              className="
                w-[312px]
                h-8
                mt-14
                flex
                flex-row
                justify-between
                "
            >
              <p>{(1_807_790_874 * quantity).toLocaleString()} تومان</p>

              <div
                className="
                     flex 
                     items-center 
                     w-24 
                     justify-between 
                     mt-2
                     "
              >
                <button
                  className="
                         w-8 
                         h-8 
                         flex 
                         items-center 
                         justify-center 
                         border-[1px] 
                         border-primary 
                         rounded-full
                         "
                  onClick={increase}
                >
                  +
                </button>

                <span className="text-lg">{quantity}</span>

                <button
                  className="
                         w-8 
                         h-8 
                         flex 
                         items-center 
                         justify-center 
                         border-[1px] 
                         border-primary 
                         rounded-full
                         "
                  onClick={decrease}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="
                           w-[392px]
                           "
        >
          <LeftBuyingSecond />

          <div
            className="
            w-[392px]
            h-[290px]
            border-[1px]
            border-[#DADADA]
            rounded-lg
            flex
            flex-col
            items-center
            gap-y-6
            "
          >
            <div
              className="
            w-[344px]
            h-[122px]
            mt-6
            flex
            flex-col
            gap-y-5
            border-b-[1px]
            "
            >
              <div className="flex flex-row justify-between">
                <p>قیمت کالا ها</p>
                <p> ۲۴۰.۰۰۰ تومان </p>
              </div>

              <div className="flex flex-row justify-between">
                <p>قیمت کالا ها</p>
                <p> ۲۴۰.۰۰۰ تومان </p>
              </div>

              <div className="flex flex-row justify-between">
                <p>قیمت کالا ها</p>
                <p> ۲۴۰.۰۰۰ تومان </p>
              </div>
            </div>

            <div
              className="
                                  w-[344px]
                                  h-6
                                  "
            >
              <div className="flex flex-row justify-between">
                <p> مبلغ قابل پرداخت </p>
                <p> ۲۴۰.۰۰۰ تومان </p>
              </div>
            </div>

            <button
              className="
                                   w-[344px]
                                   h-12
                                   bg-primary
                                   text-black
                                   rounded-xl
                                   "
            >
              تکمیل فرایند خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCartPage;
