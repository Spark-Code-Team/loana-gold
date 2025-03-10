import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";


export default function DashboardLayoutUser({ children }){
    return(
        <>
            <DashboardLayout>
                { children }
            </DashboardLayout>
        </>
    )
}