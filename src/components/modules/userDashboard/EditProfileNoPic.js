import EditProfileIcon from "../../../../public/icons/EditProfile";
import PersonIconEdit from "../../../../public/icons/PersonIconEdit";
import PlusEdit from "../../../../public/icons/PlusEdit";

const EditProfileNoPic = () => {
    return(
        <div className="
        w-72
        shadow-lg
        rounded-xl
        ">

        <div>
 
        <div className="
        h-[116px] 
        flex 
        items-center 
        justify-evenly
        ">

            <div className=" 
            bg-[url('/images/circleedit.png')] 
            bg-cover 
            w-16 
            h-16 
            flex 
            items-center 
            justify-center
            ">
            <PersonIconEdit/>
            </div>
            
            <div className="
            flex 
            flex-col 
            justify-between 
            gap-y-2
            ">
                <p>شیرزاد ملک</p>
                <p className="text-[#98A2B3]"> 09125666835 </p>
            </div>

        </div>

        <div className="mr-6">
            <p>
            کیف پول
            </p>
        </div>
       
       <div className="
       flex 
       items-center 
       justify-center 
       mt-2 
       mb-6
       ">

       <button className="
       w-[240px] 
       h-[49px] 
       bg-[#F6EEE1] 
       rounded-lg 
       flex
       flex-row
       items-center
       justify-around
       ">
        <PlusEdit/>

        ۳۰,۴۰۰,۰۰۰ تومان
            
        </button>
        
       </div>
        
        </div>

    </div>
    )
}
export default EditProfileNoPic;