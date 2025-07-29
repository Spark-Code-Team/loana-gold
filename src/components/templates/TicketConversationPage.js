"use client"
import { useEffect, useState } from "react";
import DashboardLeft from "../elements/DashboardLeft";
import ComposeTicket from "../modules/ticketDashboard/ComposeTicket";
import ResponeTicket from "../modules/ticketDashboard/ResponseTicket";
import TicketCoversation from "../modules/ticketDashboard/TicketConversation";
import { convertToJalali } from "@/utils/setTime";
import { useRouter } from 'next/navigation';

const TicketConversationPage = ({messages , setReload , ticketId}) =>{

  const router = useRouter();
  const [ticket , setTicket] = useState()
  const [showCompose, setShowCompose] = useState(false);

  // const parts =  router.asPath.split('/');
  // const lastPart = parts.pop() || '' ;
 
    return(
        <div 
        className="
        w-[912px]
        h-max
        border-[1px]
        border-[#CBCED7]
        rounded-2xl
        "
        >
          <>{console.log(router)}</>
             <DashboardLeft
            title="ادامه گفتگو "
            />
                   <TicketCoversation messages={messages}/>

                   <ResponeTicket messages={messages}/>

        <div className="
        w-full
        flex
         justify-center
         mb-2
         mt-8
         ">
        <button
          className="
            w-[848px]
            h-10 
            rounded-lg
            bg-primary 
            text-white 
            text-xl 
            flex 
            items-center 
            justify-center 
            shadow-md
          "
          onClick={() => setShowCompose(prev => !prev)}
        >
          {showCompose ? "×" : "+"}
        </button>
      </div>

      {showCompose && (
        
        <div className="mt-6">
          <ComposeTicket setReload={setReload} id={ticketId}/>
        </div>

        
      )}

{/* <div key={'1'} className="border-[1px] p-4 m-4 rounded-lg" >

<div className="
w-full
h-full
grid
grid-cols-4
gap-x-6
gap-y-4
py-4
">
    
    <td>
    <p className="font-bold mb-[12px] ">
        موضوع
    </p>
    <tr>
    <p>
        {p.title}
    </p>
    </tr>
    </td>

    <td>
    <p className="font-bold mb-[12px]">
        متن درخواست
    </p>
    <tr>
    <p>
        {p.body}
    </p>
    </tr>
    </td>

    <td>
    <p className="font-bold mb-[12px]">
        زمان
    </p>
    <tr>
    <p>
        {convertToJalali(p.created_at)}
    </p>
    </tr>
    </td>

    <td>
    <p className="font-bold mb-[12px]">
        وضعیت
    </p>
    <tr>
    <p>
            {p.is_closed? 
            <>
            بسته شده
            </>:
            <>
            در جریان
            </>}
    </p>
    </tr>
    </td>
</div>
</div>  */}

    </div>

    
  );
};

                   

                 

      
    

export default TicketConversationPage;