import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="content-inner">
      <div className="container">
        <div className="row justify-content-md-between align-items-start">
          <div className="col-lg-6 col-md-12">
            <div
              className="section-head style-1 m-b30 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="left-content">
                <h2 className="title">Most popular products</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="site-filters clearfix style-1 align-items-center wow fadeInUp ms-lg-auto"
              data-wow-delay="0.4s"
            >
              <ul className="filters" data-bs-toggle="buttons">
                <li className="btn active">
                  <input type="radio" />
                  <a href="javascript:void(0);">ALL</a>
                </li>
                <li data-filter=".Dresses" className="btn">
                  <input type="radio" />
                  <a href="javascript:void(0);">Dresses</a>
                </li>
                <li data-filter=".Tops" className="btn">
                  <input type="radio" />
                  <a href="javascript:void(0);">Tops</a>
                </li>
                <li data-filter=".Outerwear" className="btn">
                  <input type="radio" />
                  <a href="javascript:void(0);">Outerwear</a>
                </li>
                <li data-filter=".Jacket" className="btn">
                  <input type="radio" />
                  <a href="javascript:void(0);">Jacket</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <ul id="masonry" className="row g-xl-4 g-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Products;
