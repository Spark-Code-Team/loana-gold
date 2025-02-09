import DescriptionProduct from "../modules/singleProduct/DescriptionProduct";
import InfoProduct from "../modules/singleProduct/InfoProduct";
import PictureProduct from "../modules/singleProduct/PictureProducts";

 const SingleProductPage = () => {
    return (
        <div className="mx-auto mt-10 p-6">
         <div className="flex gap-6">
         <PictureProduct/>
         <InfoProduct/>
         </div>
         <DescriptionProduct/>

        </div>
    )
 }
 export default SingleProductPage;