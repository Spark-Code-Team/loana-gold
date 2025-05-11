"use client"

import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";
import { UserProfile } from "@/stores/profileStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Profile } from "@/service/profile";


export default function DashboardLayoutUser({ children }){

    const profileStore = UserProfile()
    const router = useRouter()
    
    
    useEffect(() => {  
        if(!profileStore.data.role){
            const fetchProfile = async () => {
            const {response , error} = await Profile()
            if (response){
                profileStore.setProfile(response.data); 
            } else {
                router.push('/Login')
            }
        }

            fetchProfile()
        }},[])
    
    return(
        <>
            <DashboardLayout>
                { children }
            </DashboardLayout>
        </>
    )
}