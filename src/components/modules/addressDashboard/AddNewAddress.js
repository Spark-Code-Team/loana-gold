import Addresss from "@/service/Addresss";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const AddNewAddress = () =>{

    const [data,setData] = useState({
        ostan:"",
        shahr:"",
        pelak:"",
        vahed:"",
        codeposti:"",
        mokhtasad1: "",
        mokhtasad2: ""
    })

    const handleSubmit = async()=>{

       
        
          const { response, error } = await Addresss(data);

          if (response){
            toast.success("آدرس با موفقیت ثبت شد ");
            setData({
                ostan:"",
                shahr:"",
                pelak:"",
                vahed:"",
                codeposti:"",
                mokhtasad1: "",
                mokhtasad2: ""
            })

          } else{
            console.log("error----->error")
          }
    }

    return(
       
        <div className="
        flex
        md:flex-row
        flex-col
        mt-2
        mb-40
        ">

            <div className="
            md:w-[808px]
            w-full
            h-[829px]
            ">
                <p>
                ابتدا آدرس خود را تکمیل کنید
                </p>
                
                <div className="
                md:w-[808px]
                w-full
                h-max
                py-2
                rounded-xl
                border-[1px]
                border-[#DADADA]
                mt-4
                grid
                grid-cols-1
                gap-2
                md:grid-cols-2
                place-items-center
                items-center
                ">

                <input
                className="
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[376px] w-80
                h-12
                text-xl
                md:text-base
                rounded-xl
                border-[1px]
                border-[#E1E1E1]
                "
                placeholder="استان"
                type="text"
                name="firstname"
                value={data.ostan}
                onChange={(e) => setData(prev => ({...prev,ostan:e.target.value}))}
                />

                <input
                className="
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[376px] w-80
                h-12
                text-xl
                md:text-base
                rounded-xl
                border-[1px]
                border-[#E1E1E1]
                "
                placeholder="شهر"
                type="text"
                name="firstname"
                value={data.shahr}
                onChange={(e) => setData(prev => ({...prev,shahr:e.target.value}))}
                />

                <input
                className="
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[376px] w-80
                h-12
                text-xl
                md:text-base
                rounded-xl
                border-[1px]
                border-[#E1E1E1]
                "
                placeholder="پلاک"
                type="text"
                name="firstname"
                value={data.pelak}
                onChange={(e) => setData(prev => ({...prev,pelak:e.target.value}))}
                />

                <input
                className="
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[376px] w-80
                h-12
                text-xl
                md:text-base
                rounded-xl
                border-[1px]
                border-[#E1E1E1]
                "
                placeholder="واحد"
                type="text"
                name="firstname"
                value={data.vahed}
                onChange={(e) => setData(prev => ({...prev,vahed:e.target.value}))}
                />

                <input
                className="
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[376px] w-80
                h-12
                text-xl
                md:text-base
                rounded-xl
                border-[1px]
                border-[#E1E1E1]
                "
                placeholder="کدپستی"
                type="text"
                name="firstname"
                value={data.codeposti}
                onChange={(e) => setData(prev => ({...prev,codeposti:e.target.value}))}
                />
{/* 
                <input
                className="
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[376px] w-80
                h-12
                text-xl
                md:text-base
                rounded-xl
                border-[1px]
                border-[#E1E1E1]
                "
                placeholder=" آدرس کامل را وارد کنید "
                type="text"
                name="firstname"
                // value={codeposti}
                // onChange={(e) => setData(prev => ({...prev,codeposti:e.target.value}))}
                /> */}

<input
    className="
    md:w-[376px] w-80
    h-12
    text-xl
    md:text-base
    rounded-xl
    border-[1px]
    border-[#E1E1E1]
    "
    placeholder="عرض جغرافیایی"
    type="text"
    name="firstname"
    value={data.mokhtasad1}
    onChange={(e) => {
        const val = e.target.value;
        // فقط اجازه وارد کردن 0 تا 3 رقم عدد صحیح
        if (/^\d{0,3}$/.test(val)) {
            setData(prev => ({ ...prev, mokhtasad1: val }));
        }
    }}
    pattern="\d{3}"
/>

<input
    className="md:w-[376px] w-80 h-12 text-xl md:text-base rounded-xl border-[1px] border-[#E1E1E1]"
    placeholder="طول جغرافیایی"
    type="text"
    name="firstname"
    value={data.mokhtasad2}
    onChange={(e) => {
        const val = e.target.value;
        if (/^\d{0,3}$/.test(val)) {  // تنها اجازه می‌دهد صفر تا سه رقم وارد شود
            setData(prev => ({ ...prev, mokhtasad2: val }));
        }
    }}
    pattern="\d{3}"
/>

                {/* <input
                className="
                focus:outline-none
                focus:ring-0
                focus:boredr-transparent
                md:w-[376px] w-80
                h-12
                text-xl
                md:text-base
                rounded-xl
                border-[1px]
                border-[#E1E1E1]
                "
                placeholder=" آدرس کامل را وارد کنید "
                type="text"
                name="firstname"
               
                /> */}

                </div>

                <div className="mt-8">
                <Image
                src="/images/mapbuy.png"
                alt="map"
                width={808}
                height={421}
                />
                </div>

                <div className="mt-8">
                    <button className="
                    md:w-[808px]
                    w-full
                    h-12
                    bg-primary
                    rounded-xl
                    "
                    onClick={handleSubmit}>
                    ثبت ادرس
                    </button>
                </div>
            </div>
        </div>
    )
}
export default AddNewAddress;