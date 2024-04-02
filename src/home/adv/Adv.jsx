const Adv = () => {
  return (
    <section className="adv-area">
      <div className="container-fluid px-0">
        <div className="row product-style2 g-0">
          <div
            className="col-lg-6 col-md-12 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="product-box style-4">
              <div
                className="product-media"
                style={{
                  backgroundImage: `url("images/shop/large/product1.png")`,
                }}
              ></div>
              <div className="sale-box">
                <div className="badge style-1 mb-1">Sale Up to 50% Off</div>
                <h2 className="sale-name">
                  Summer<span>2023</span>
                </h2>
                <a
                  href="shop-list.html"
                  className="btn btn-outline-secondary btn-lg text-uppercase"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="product-box style-4">
              <div
                className="product-media"
                style={{
                  backgroundImage: `url("images/shop/large/product2.png")`,
                }}
              ></div>
              <div className="product-content">
                <div className="main-content">
                  <div className="badge style-1 mb-3">Sale Up to 50% Off</div>
                  <h2 className="product-name">New Summer Collection</h2>
                </div>
                <a
                  href="shop-list.html"
                  className="btn btn-secondary btn-lg text-uppercase"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adv;
