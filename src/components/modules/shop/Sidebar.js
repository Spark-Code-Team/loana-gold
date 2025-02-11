

"use client";
import { useState } from "react";
import Coin from "../../../../public/icons/Coin";
import Pay from "../../../../public/icons/Pay";
import Send from "../../../../public/icons/Send";

export default function Sidebar() {

    const [price, setPrice] = useState(100); 
    const [weight, setWeight] = useState(50); 

    const handleChange = (setter) => (e) => {
        setter(e.target.value);
    };

    return (
        <div className="
            flex 
            flex-col 
            w-72 
            bg-white
            rounded-xl 
            p-4 
            mt-6 
            shadow-lg
        ">
            <div className="
              flex 
              justify-between 
              items-center 
              pb-2 
              mb-4
              ">
                <h2 className="text-lg font-bold">
                    فیلترها
                </h2>
                <p className="
                 text-primary 
                 text-sm 
                 cursor-pointer 
                 ">
                    پاک کردن همه
                </p>
            </div>
            
            <div className="
              flex 
              flex-col 
              gap-4
              ">
               
            <div className="w-64">
              <div className="
               flex 
               items-center 
               bg-[#F6EEE1] 
               rounded-xl 
               pr-5 py-4 
               font-medium
               ">
                <Coin className="w-6 h-6 ml-2" />
                <h3>محدوده قیمت</h3>
              </div>
            </div>

                <div className="
                  bg-[#FAFAFA] 
                  p-4 
                  rounded-xl
                ">
                    <div className="
                     flex 
                     justify-between 
                     px-2 
                     mb-2 
                     text-sm 
                     font-medium
                     ">
                        <span>{price.toLocaleString()} تومان</span>
                        <span>0 تومان</span>
                    </div>

                    <input 
                    type="range" 
                    min="0"
                    max="1000000"
                    value={price}
                    onChange={handleChange(setPrice)} 
                    className="
                    w-full 
                    mt-2 
                    accent-[#D2AB67]
                    "
                    />

                    <input type="text" className="
                    w-full 
                    mt-2 
                    p-2 
                    border-[#E1E1E1] 
                    rounded-xl
                    focus:outline-none 
                    focus:ring-0
                    focus:border-transparent
                    " 
                    placeholder="حداقل تومان " 
                    />
                    <input type="text" className="
                    w-full 
                    mt-2 
                    p-2 
                    border-[#E1E1E1] 
                    rounded-xl
                    focus:outline-none 
                    focus:ring-0
                    focus:border-transparent
                    " 
                    placeholder="حداکثر تومان " 
                    />

                </div>


            <div className="w-64">
              <div className="
               flex 
               items-center 
               bg-[#F6EEE1] 
               rounded-xl 
               pr-5 py-4 
               font-medium
               ">
                <Coin className="w-6 h-6 ml-2" />
                <h3>محدوده وزن</h3>
              </div>
            </div>

                <div className="
                  bg-[#FAFAFA] 
                  p-4 
                  rounded-xl
                ">
                    <div className="
                      flex 
                      justify-between 
                      px-2 
                      mb-2 
                      text-sm 
                      font-medium
                      ">
                        <span>{weight.toLocaleString()} تومان</span>
                        <span>0 تومان</span>
                    </div>

                    <input 
                    type="range"
                    min="0"
                    max="1000000"
                    value={weight}
                    onChange={handleChange(setWeight)} 
                    className="
                    w-full 
                    mt-2 
                    accent-[#D2AB67]
                    "
                    />
                   
                    <input type="text" className="
                    w-full 
                    mt-2 
                    p-2 
                    border-[#E1E1E1] 
                    rounded-xl
                    focus:outline-none 
                    focus:ring-0
                    focus:border-transparent
                    " 
                    placeholder="حداقل تومان " 
                    />
                    <input type="text" className="
                    w-full 
                    mt-2 
                    p-2 
                    border-[#E1E1E1] 
                    rounded-xl
                    focus:outline-none 
                    focus:ring-0
                    focus:border-transparent
                    " 
                    placeholder="حداکثر تومان " 
                    />

                </div>

            <div className="w-64">
              <div className="
               flex 
               items-center 
               bg-[#F6EEE1] 
               rounded-xl 
               pr-5 py-4 
               font-medium
               ">
                <Pay className="w-6 h-6 ml-2" />
                <h3> نوع پرداخت</h3>
              </div>
            </div>

                <div className="
                bg-[#FAFAFA] 
                p-4 
                rounded-xl
                ">

                    <label className="
                     flex 
                     items-center 
                     gap-2 
                     mt-2
                     ">
                        <input type="radio" name="payment" className="
                        accent-primary
                        w-4 
                        h-4 
                         border-[#3B3B3B] 
                         bg-white 
                         checked:bg-[#3B3B3B] 
                         checked:border-[#3B3B3B] 
                         appearance-none 
                         rounded-xl
                         focus:outline-none focus:ring-0
                        " /> پرداخت نقدی

                    </label>

                    <label className="flex items-center gap-2 mt-2">
                        <input type="radio" name="payment" className="
                        accent-primary
                        w-4 
                        h-4 
                         border-[#3B3B3B] 
                         bg-white 
                         checked:bg-[#3B3B3B] 
                         checked:border-[#3B3B3B] 
                         appearance-none 
                         rounded-xl
                         focus:outline-none 
                         focus:ring-0" /> پرداخت اقساطی
                    </label>

                </div>

            <div className="w-64">
              <div className="
               flex 
               items-center 
               bg-[#F6EEE1] 
               rounded-xl 
               pr-5 py-4 
               font-medium
               ">
                <Send className="w-6 h-6 ml-2" />
                <h3> نحوه ارسال</h3>
              </div>
            </div>

                <div className="
                bg-[#FAFAFA] 
                p-4 
                rounded-xl">

                    <label className="
                    flex 
                    items-center 
                    gap-2 mt-2
                    ">
                        <input type="checkbox" className="
                        w-4 
                        h-4 
                         border-[#3B3B3B] 
                         bg-white 
                         checked:bg-[#3B3B3B] 
                         checked:border-[#3B3B3B] 
                         appearance-none 
                         rounded-xl
                         focus:outline-none 
                         focus:ring-0
                         "/> ارسال حضوری

                    </label>
                </div>
            </div>
        </div>
    );
}








