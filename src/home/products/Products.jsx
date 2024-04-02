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
            <li
              className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Tops wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="shop-card">
                <div className="dz-media">
                  <img src="images/shop/product/1.png" alt="image" />
                  <div className="shop-meta">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-secondary btn-md btn-rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fa-solid fa-eye d-md-none d-block"></i>
                      <span className="d-md-block d-none">Quick View</span>
                    </a>
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
                  <h5 className="title">
                    <a href="shop-list.html">Cozy Knit Cardigan Sweater</a>
                  </h5>
                  <h5 className="price">$80</h5>
                </div>
                <div className="product-tag">
                  <span className="badge">Get 20% Off</span>
                </div>
              </div>
            </li>
            <li
              className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Dresses Jacket wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="shop-card">
                <div className="dz-media">
                  <img src="images/shop/product/2.png" alt="image" />
                  <div className="shop-meta">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-secondary btn-md btn-rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fa-solid fa-eye d-md-none d-block"></i>
                      <span className="d-md-block d-none">Quick View</span>
                    </a>
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
                  <h5 className="title">
                    <a href="shop-list.html">Sophisticated Swagger Suit</a>
                  </h5>
                  <h5 className="price">$80</h5>
                </div>
                <div className="product-tag">
                  <span className="badge">Get 20% Off</span>
                </div>
              </div>
            </li>
            <li
              className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Dresses wow fadeInUp"
              data-wow-delay="1.0s"
            >
              <div className="shop-card">
                <div className="dz-media">
                  <img src="images/shop/product/3.png" alt="image" />
                  <div className="shop-meta">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-secondary btn-md btn-rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fa-solid fa-eye d-md-none d-block"></i>
                      <span className="d-md-block d-none">Quick View</span>
                    </a>
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
                  <h5 className="title">
                    <a href="shop-list.html">classNameic Denim Skinny Jeans</a>
                  </h5>
                  <h5 className="price">$80</h5>
                </div>
                <div className="product-tag">
                  <span className="badge">Get 20% Off</span>
                </div>
              </div>
            </li>
            <li
              className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Tops Jacket wow fadeInUp"
              data-wow-delay="1.2s"
            >
              <div className="shop-card">
                <div className="dz-media">
                  <img src="images/shop/product/4.png" alt="image" />
                  <div className="shop-meta">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-secondary btn-md btn-rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fa-solid fa-eye d-md-none d-block"></i>
                      <span className="d-md-block d-none">Quick View</span>
                    </a>
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
                  <h5 className="title">
                    <a href="shop-list.html">Athletic Mesh Sports Leggings</a>
                  </h5>
                  <h5 className="price">$80</h5>
                </div>
                <div className="product-tag">
                  <span className="badge">Get 20% Off</span>
                </div>
              </div>
            </li>
            <li
              className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Dresses wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="shop-card">
                <div className="dz-media">
                  <img src="images/shop/product/5.png" alt="image" />
                  <div className="shop-meta">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-secondary btn-md btn-rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fa-solid fa-eye d-md-none d-block"></i>
                      <span className="d-md-block d-none">Quick View</span>
                    </a>
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
                  <h5 className="title">
                    <a href="shop-list.html">Vintage Denim Overalls Shorts</a>
                  </h5>
                  <h5 className="price">$80</h5>
                </div>
                <div className="product-tag">
                  <span className="badge">Get 20% Off</span>
                </div>
              </div>
            </li>
            <li
              className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Outerwear wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="shop-card">
                <div className="dz-media">
                  <img src="images/shop/product/6.png" alt="image" />
                  <div className="shop-meta">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-secondary btn-md btn-rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fa-solid fa-eye d-md-none d-block"></i>
                      <span className="d-md-block d-none">Quick View</span>
                    </a>
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
                  <h5 className="title">
                    <a href="shop-list.html">Satin Wrap Party Blouse</a>
                  </h5>
                  <h5 className="price">$80</h5>
                </div>
                <div className="product-tag">
                  <span className="badge">Get 20% Off</span>
                </div>
              </div>
            </li>
            <li
              className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Dresses wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="shop-card">
                <div className="dz-media">
                  <img src="images/shop/product/7.png" alt="image" />
                  <div className="shop-meta">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-secondary btn-md btn-rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fa-solid fa-eye d-md-none d-block"></i>
                      <span className="d-md-block d-none">Quick View</span>
                    </a>
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
                  <h5 className="title">
                    <a href="shop-list.html">Plaid Wool Winter Coat</a>
                  </h5>
                  <h5 className="price">$80</h5>
                </div>
                <div className="product-tag">
                  <span className="badge">Get 20% Off</span>
                </div>
              </div>
            </li>
            <li
              className="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Tops wow fadeInUp"
              data-wow-delay="2.0s"
            >
              <div className="shop-card">
                <div className="dz-media">
                  <img src="images/shop/product/8.png" alt="image" />
                  <div className="shop-meta">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-secondary btn-md btn-rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="fa-solid fa-eye d-md-none d-block"></i>
                      <span className="d-md-block d-none">Quick View</span>
                    </a>
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
                  <h5 className="title">
                    <a href="shop-list.html">
                      Water-Resistant Windbreaker Jacket
                    </a>
                  </h5>
                  <h5 className="price">$80</h5>
                </div>
                <div className="product-tag">
                  <span className="badge">Get 20% Off</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Products;
