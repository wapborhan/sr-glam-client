import CoverBanner from "../../../components/shared/CoverBanner";
import CartDetails from "./CartDetails";
import DetailsContent from "./DetailsContent";
import DetailsPic from "./DetailsPic";

const ProductDetails = () => {
  return (
    <div>
      <CoverBanner />
      <section className="content-inner py-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-md-4">
              <DetailsPic />
            </div>
            <div className="col-xl-8 col-md-8">
              <div className="row">
                <div className="col-xl-7">
                  <DetailsContent />
                </div>
                <div className="col-xl-5">
                  <CartDetails />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
