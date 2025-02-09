import ProductsCard from "../modules/shop/ProductsCard";
import Sidebar from "../modules/shop/Sidebar";
import Sorting from "../modules/shop/Sorting";


const ShopPage = () => {
    return (
        <div className="w-full flex justify-center gap-6">
            <div className="w-[288px]">
            <Sidebar/>
            </div>

            <div className="w-[912px]">
            <Sorting/>
            <ProductsCard/>
            </div>

        

        
        


        </div>
        
        
        
    )
}

export default ShopPage;