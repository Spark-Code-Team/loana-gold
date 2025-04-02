const AdminTitle = ({ title }) => {
    return(
        <div className="
        w-full
        h-[76px]
        border-b-[1px]
        border-[#CBCED7]
        flex
        items-center
        ">
            <p className="
            font-bold
            text-2xl
            pr-5
            ">
                { title }
            </p>

        </div>
    )
}
export default AdminTitle;