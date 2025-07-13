"use client"

import TicketConversationPage from "@/components/templates/TicketConversationPage";
import { use, useEffect, useState } from "react";
import { getTickets } from "@/service/tickets";
import { toast } from "react-toastify";
import { getAllTickets } from "@/service/adminTickets";


const AdminTicketConversation =  ({params}) => {
    
    const [reload, setReload] = useState(false)
    const [messages , setMessages] = useState()


    const param = use(params); 
    const ticketId = param.ticketId;


    useEffect(()=>{
        const myTickets = async () => {
            const {response , error} = await getAllTickets() 
            if(response){ 
                setMessages(response.data.filter(p => p.id == ticketId))
            }else{
                toast.error(error.response.data.error)}
        }
        myTickets()
    } , [reload])
    
    
        return (
       <TicketConversationPage setReload={setReload} ticketId={ticketId} messages={messages}/>
    )
}
export default AdminTicketConversation;