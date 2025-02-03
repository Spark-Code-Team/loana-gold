


const TicketForm = () => {
    return (
        <>

<div className="w-[600px] h-[462px] bg-white my-auto">

<h1 className="text-base font-bold pb-8"> فرم ارسال تیکت  </h1>

<div className=" w-[600px] h-[407px]  ">
<input type="text" placeholder="نام" className="w-72 h-10 my-2 ml-4 rounded-xl border-[1px] border-[#E1E1E1]" />
<input type="text" placeholder="نام" className="w-72 h-10 my-2 ml-2 rounded-xl border-[1px] border-[#E1E1E1]" />
<input type="text" placeholder="نام" className="w-72 h-10 my-2 ml-4 rounded-xl border-[1px] border-[#E1E1E1]" />
<input type="text" placeholder="نام" className="w-72 h-10 my-2 ml-2 rounded-xl border-[1px] border-[#E1E1E1]" />

<textarea placeholder="...." className="w-[600px] h-[231px] border-[1px] border-[#DADADA] rounded-lg"/>

<div className="flex justify-end items-end mt-2">
<button className="w-24 h-12 bg-[#EDEDED] rounded-xl">
    ارسال
</button>
</div>




</div>





</div>
        
        </>
    )
}

export default TicketForm;