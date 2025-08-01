import DescriptionProduct from "../modules/singleProduct/DescriptionProduct";
import InfoProduct from "../modules/singleProduct/InfoProduct";
import PictureProduct from "../modules/singleProduct/PictureProducts";

const SingleProductPage = () => {
  return (
    <div className="mx-auto mt-10 p-4 max-w-7xl">
      <div className="flex flex-col lg:flex-row gap-6">
        <PictureProduct />
        <InfoProduct />
      </div>
      <div className="mt-6">
        <DescriptionProduct />
      </div>
    </div>
  );
};

export default SingleProductPage;