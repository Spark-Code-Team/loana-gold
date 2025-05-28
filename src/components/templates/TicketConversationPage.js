"use client"
import { useState } from "react";
import DashboardLeft from "../elements/DashboardLeft";
import ComposeTicket from "../modules/ticketDashboard/ComposeTicket";
import ResponeTicket from "../modules/ticketDashboard/ResponseTicket";
import TicketCoversation from "../modules/ticketDashboard/TicketConversation";

const TicketConversationPage = () =>{

    const [showCompose, setShowCompose] = useState(false);



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
             <DashboardLeft
            title="ادامه گفتگو "
            />
                   <TicketCoversation/>

                   <ResponeTicket/>

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
          <ComposeTicket />
        </div>
      )}

    </div>
  );
};

                   

                 

      
    

export default TicketConversationPage;