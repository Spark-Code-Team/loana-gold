'use client'
import { useState } from "react";
import { sendmessage } from "@/service/tickets";


const ComposeTicket = ({setReload , id}) =>{
    
    const [answer , setAnswer] = useState()

    const sendMessage = async () =>{
        const {response , error} = await sendmessage({
            message: answer ,
            ticket: id})
        if(response){
            setReload(prev=>!prev)
            setAnswer('')
        }else{
            console.log(error)
        }
    }

    return(
        <div className="
            w-[848px]
            mx-8
            mt-4
            p-2
            border-[1px] 
            border-[#E1E1E1] 
            rounded-xl
            ">
                <textarea className="
                w-full 
                h-[250px]
                p-2 
                border-none
                focus:ring-0
                "
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
                placeholder="
                متن پیام خودرا بنویسید
                ">
               
                </textarea>
                <button className="
                hover:bg-primary
                hover:text-[#EDEDED]
                w-[98px]
                h-8
                bg-[#EDEDED]
                rounded-xl
                text-sm
                text-[#7A7A7A]
                    "
                    onClick={()=>{sendMessage()}}>
                        ارسال
                    </button>
            </div>
    )
}
export default ComposeTicket;