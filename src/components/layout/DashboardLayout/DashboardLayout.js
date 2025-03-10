import SidebarDashboard from "./SidebarDashboard";

const DashboardLayout = ({children}) =>{
    return (
        <>
            <div className="
                w-[1224px]
                mx-auto
                mt-28
                flex
                flex-row
                justify-between relative
            ">
                <SidebarDashboard/>
                {children}
            </div>
        </>
    )
}
export default DashboardLayout;