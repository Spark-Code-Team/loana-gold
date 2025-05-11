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
        content: profileStore.data.first_name ,
        logo:<PersonDashboard/>,

    },
    {
        id:2,
        field_name:' نام خانوادگی',
        content: profileStore.data.last_name,
        logo:<PersonDashboard/>

    },
    {
        id:3,
        field_name:'شماره موبایل',
        content: profileStore.data.phone_number,
        logo:<EmailDashboard/>
    },
    {
        id:4,
        field_name:'کد ملی',
        content: profileStore.data.national_code,
        logo:<PhoneDashboard/>

    },
    {
        id:5,
        field_name:'شماره شبا',
        content: profileStore.data.sheba,
        logo:<EmailDashboard/>

    },
    {
        id:6,
        field_name:'نام بانک',
        content: profileStore.data.bank_name,
        logo:<PhoneDashboard/>

    },
]}