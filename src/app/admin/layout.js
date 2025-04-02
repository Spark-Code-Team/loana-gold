import AdminMainLayoutjs from "@/components/layout/AdminLayout/AdminMainLayout";

const AdminLayout = ({ children }) =>{
    return (
        <>
        <AdminMainLayoutjs>
            { children }
        </AdminMainLayoutjs>
        
        
        </>
    )
}
export default AdminLayout;