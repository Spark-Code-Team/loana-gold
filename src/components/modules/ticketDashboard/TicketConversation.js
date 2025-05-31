'use client'

import { useEffect, useState } from "react";

const TicketCoversation = ({messages}) =>{

    const [data , setData] = useState(messages)
    useEffect(()=>{
        setData(messages)
    },[messages])
    return(
       data?.map((p,index)=>{
        return(
        <div key={index}>
            <div>
           
            <div className="
            w-[848px]
            mx-8
            mt-4
            border-[1px] 
            border-[#E1E1E1] 
            rounded-xl
            p-2
            ">
                <div>
                    <p>
                        موضوع تیکت: {p.title}
                    </p>
                </div>

              
                 <div
                    className="
                    w-full 
                    h-full
                    p-2 
                    mt-1 
                    focus:outline-none 
                    focus:border-[#E1E1E1] 
                    focus:ring-0
                   
                    
                    "
                >
                    متن تیکت : {p.body}
                </div>
             
            </div>
            
            
            </div>
       

        </div>)
       })


    )
}
export default TicketCoversation;