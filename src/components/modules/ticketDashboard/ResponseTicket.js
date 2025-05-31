'use client'

import { useEffect, useState } from "react";

const ResponeTicket = ({messages}) =>{
    const [data , setData] = useState(messages)
    useEffect(()=>{
        setData(messages)
    },[messages])
    
return(
        <>{
            data?.map((p,index)=>{
                return(
                <div key={index}>
                { 
                    p.messages?.map((p,index)=>{
                    return (     
                         <div className="
                    w-[848px]
                    mx-8
                    mt-4
                    border-[1px] 
                    border-[#E1E1E1] 
                    rounded-xl
                    p-2
                    "
                    key={index}>
                        <div>
                            <p>
                                نام : {p.sender}
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
                          پاسخ  پیام : {p.message}
                        </div>
            
                        <div className="
                        flex
                        justify-end
                        ">
                       
                        </div>
                        
            
                        
                     
                    </div>
                    )
                })
                }
                </div>)

            })

        }</>
    )
}
export default ResponeTicket;