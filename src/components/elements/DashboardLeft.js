const DashboardLeft = ({ title }) => {
    return(
        <div className="
        md:w-[911px]
        h-[76px]
        border-b-[1px]
        border-[#CBCED7]
        flex
        items-center
        ">
            <p className="
            font-bold
            md:text-2xl
            text-xl
            pr-5
            ">
                { title }
            </p>

        </div>
    )
}
export default DashboardLeft;