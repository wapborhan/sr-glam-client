import CoverBanner from "../../components/shared/CoverBanner";
import Filter from "./Filter";
import Products from "./Products";

const Shop = () => {
  return (
    <>
      <CoverBanner />
      <section className="content-inner-3 pt-3 z-index-unset">
        <div className="container-fluid">
          <div className="row">
            <Filter />
            <Products />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
