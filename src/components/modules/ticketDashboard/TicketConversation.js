import DashboardLeft from "@/components/elements/DashboardLeft";

const TicketCoversation = () =>{
    return(
       
        <div className="
        w-[912px]
        h-max
        border-[1px]
        border-[#CBCED7]
        rounded-2xl
        ">
            <DashboardLeft
            title="ارسال تیکت"
            />

            <div className="
            h-12
            w-full
            flex
            flex-row
            items-center
            mt-5
            ">
               <input
               type="text"
               placeholder=" موضوع تیکت"
               className="
               w-[848px]
               h-[40px]
               focus:outline-none 
               focus:border-[#E1E1E1] 
               focus:ring-0
               border-[1px] 
               border-[#E1E1E1] 
               rounded-xl
               mx-auto 
               "
            //    value={ticket.title}
            //    onChange={(e) => {
            //     setTicket(prev => ({
            //       ...prev,
            //       title: e.target.value
            //     }));}}
               />

            </div>

            <div className="
            w-[848px]
            h-[330px]
            mx-8
            mt-4
            ">
                 <textarea
                    className="
                    w-full 
                    h-[352px]
                    p-2 
                    mt-1 
                    focus:outline-none 
                    focus:border-[#E1E1E1] 
                    focus:ring-0
                    border-[1px] 
                    border-[#E1E1E1] 
                    rounded-xl
                    "
                    // value={ticket.message}
                    // onChange={(e) => {
                    //  setTicket(prev => ({
                    //    ...prev,
                    //    message: e.target.value
                    //  }));}}
                    // required
                >


                </textarea>

                <div className="
                flex
                justify-end
                ">
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
                // onClick={snedData} 
                >
                    ارسال تیکت
                </button>
                </div>

                
             
            </div>

            

        </div>

    )
}
export default TicketCoversation;