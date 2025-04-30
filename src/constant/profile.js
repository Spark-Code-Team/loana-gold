"use client"

import EmailDashboard from "../../public/icons/EmailDashboard";
import PersonDashboard from "../../public/icons/PersonDashboard";
import PhoneDashboard from "../../public/icons/PhoneDashboard";

import { UserProfile } from "@/stores/profileStore";

export const getProfile = () => {  
    const profileStore = UserProfile();  
    return [
    {
        id:1,
        field_name:'نام',
        content: profileStore.data.user.first_name ,
        logo:<PersonDashboard/>,

    },
    {
        id:2,
        field_name:' نام خانوادگی',
        content: profileStore.data.user.last_name,
        logo:<PersonDashboard/>

    },
    {
        id:3,
        field_name:'شماره موبایل',
        content: profileStore.data.user.phone_number,
        logo:<EmailDashboard/>
    },
    {
        id:4,
        field_name:'کد ملی',
        content: profileStore.data.user.national_code,
        logo:<PhoneDashboard/>

    },
    {
        id:5,
        field_name:'شماره شبا',
        content: profileStore.data.user.sheba,
        logo:<EmailDashboard/>

    },
    {
        id:6,
        field_name:'نام بانک',
        content: profileStore.data.user.bank_name,
        logo:<PhoneDashboard/>

    },
]}