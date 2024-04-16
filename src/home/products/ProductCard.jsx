import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <li
      className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Tops wow fadeInUp"
      data-wow-delay="0.6s"
    >
      <div className="shop-card">
        <div className="dz-media">
          <img
            src="images/shop/product/clothes/3.png"
            alt="image"
            className="border-2"
          />
          <div className="shop-meta">
            <Link
              to="/shop/product/1"
              className="btn btn-secondary btn-md btn-rounded"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="fa-solid fa-eye d-md-none d-block"></i>
              <span className="d-md-block d-none">Quick View</span>
            </Link>
            <div className="btn btn-primary meta-icon dz-wishicon">
              <i className="icon feather icon-heart dz-heart"></i>
              <i className="icon feather icon-heart-on dz-heart-fill"></i>
            </div>
            <div className="btn btn-primary meta-icon dz-carticon">
              <i className="flaticon flaticon-basket"></i>
              <i className="flaticon flaticon-basket-on dz-heart-fill"></i>
            </div>
          </div>
        </div>
        <div className="dz-content">
          <h5 className="title">Cozy Knit Cardigan Sweater</h5>
          <h5 className="price">$80</h5>
        </div>
        <div className="product-tag">
          <span className="badge">Get 20% Off</span>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
