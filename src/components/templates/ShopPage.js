import ProductsCard from "../modules/shop/ProductsCard";
import Sidebar from "../modules/shop/Sidebar";
import Sorting from "../modules/shop/Sorting";


const ShopPage = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start">
            <div className="w-full lg:w-[288px] lg:mx-0">
                <Sidebar/>
            </div>

            <div className="w-full lg:w-[912px]">
                <Sorting/>
                <ProductsCard/>
            </div>
        </div>
    )
}

export default ShopPage;