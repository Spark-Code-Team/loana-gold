
const ModalPage = ({ isOpen , children}) => {
    return(
        <div className={`
            bg-[#4d49454d]
            fixed
            top-0
            left-0
            flex
            items-center
            justify-center
            w-screen
            h-screen
            ${isOpen?"":"hidden"}
        `}>
            {children}
        </div>
    )
}

export default ModalPage; 