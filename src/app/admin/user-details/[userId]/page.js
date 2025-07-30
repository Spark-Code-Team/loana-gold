"use client"

import { useState , useEffect  } from "react";
import { usePathname } from "next/navigation";
import { getSingleUserGrades , getSingleUserInstallments , getSingleUserTransactions } from "@/service/adminSingleUserData";
import UserManagement from "@/components/templates/selectUserData";
import AdminSingleUserGrade from "@/components/templates/AdminSingleUserGrade";
import AdminSingleUserInstallments from "@/components/templates/AdminSingleUserInstallments";
import AdminSingleUserTransactions from "@/components/templates/AdminSingleUserTransactions";

const getSingleUserData = () =>{

    const [section , setSection] = useState("transactions")
    const [id, setId] = useState();
    const path = usePathname()

    // const getInstallments = async () => {
    //     const {response , error} = await getSingleUserInstallments(lastPart) 
    //     if(response){ 
    //         console.log(response , "fuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuck22222222222222222")
    //     }else{
    //         toast.error(error.response?.data.error)}
    // }

    // const getGrade = async () => {
    //     const {response , error} = await getSingleUserGrades(lastPart) 
    //     if(response){ 
    //         console.log(response , "fuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuck33333333333333333")
    //     }else{
    //         toast.error(error.response?.data.error)}
    // }

    const showData = () => {
        let data ; 
        switch (section) {
            case "installments":
                data = <AdminSingleUserInstallments id={id}/>
                break;
            case "userGrade":
                data = <AdminSingleUserGrade id={id}/>
                break;
            case "transactions":
                data = <AdminSingleUserTransactions id={id}/>
                break;

            default:
                break;
        }
        return data
    }

    useEffect(()=>{
        const parts = path.split('/').filter(Boolean);
        const lastPart = parts[parts.length - 1];
        setId(lastPart)
        console.log(id)
    },[])

    return(
        <div className="w-[1024px] p-4">
            <UserManagement section={section} setSection={setSection} />
            <div className="p-5" >
                {id && showData()}    
            </div>
        </div>
    )
}
export default getSingleUserData;