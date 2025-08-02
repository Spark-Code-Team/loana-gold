import SidebarDashboard from "./SidebarDashboard";

const DashboardLayout = ({children}) =>{
    return (
        <>
            <div className="
            w-full   
            max-w-7xl
            mx-auto
            mt-7
            flex
            flex-col 
            md:flex-row 
            md:justify-between
            gap-8       
            ">

            <SidebarDashboard />
            {children}
            </div>
        </>
    )
}
export default DashboardLayout;