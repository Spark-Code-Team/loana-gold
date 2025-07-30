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
                if(profileStore.data.role == 2){
                    router.push('/admin/User-Account')
                    document.cookie = "expire_time=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                }else if(profileStore.data.role === 'support'){
                    //اینجا پوش میکنیم به ساپورت
                }else if(profileStore.data.role == 1){
                    router.push('/dashboard/user-account-dashboard')
                    document.cookie = "expire_time=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                }
            } else {
                router.push('/Login')
            }
        }

            fetchProfile()
        }},[profileStore])

    
    return(
        <>
            <DashboardLayout>
                { children }
            </DashboardLayout>
        </>
    )
}