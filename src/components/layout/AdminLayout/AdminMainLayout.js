import SidebarAdminLayout from "./SidebarAdminLayout";

const AdminMainLayoutjs = ({children}) =>{
    return (
        <>
        <div className="
                w-[1224px]
                mx-auto
                mt-28
                flex
                flex-row
                justify-between
            ">

        
        <SidebarAdminLayout/>
        {children}

        </div>
        
        
        </>
    )
}
export default AdminMainLayoutjs;