const SearchBar = () => {
  return (
    <div
      className="dz-search-area dz-offcanvas offcanvas offcanvas-top"
      tabIndex="-1"
      id="offcanvasTop"
    >
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        &times;
      </button>
      <div className="container">
        <form className="header-item-search">
          <div className="input-group search-input">
            <select className="default-select">
              <option>All Categories</option>
              <option>Clothes</option>
              <option>UrbanSkirt</option>
              <option>VelvetGown</option>
              <option>LushShorts</option>
              <option>Vintage</option>
              <option>Wedding</option>
              <option>Cotton</option>
              <option>Linen</option>
              <option>Navy</option>
              <option>Urban</option>
              <option>Business Meeting</option>
              <option>Formal</option>
            </select>
            <input
              type="search"
              className="form-control"
              placeholder="Search Product"
            />
            <button className="btn" type="button">
              <i className="iconly-Light-Search"></i>
            </button>
          </div>
          <ul className="recent-tag">
            <li className="pe-0">
              <span>Quick Search :</span>
            </li>
            <li>
              <a href="shop-list.html">Clothes</a>
            </li>
            <li>
              <a href="shop-list.html">UrbanSkirt</a>
            </li>
            <li>
              <a href="shop-list.html">VelvetGown</a>
            </li>
            <li>
              <a href="shop-list.html">LushShorts</a>
            </li>
          </ul>
        </form>
        <div className="row">
          <div className="col-xl-12">
            <h5 className="mb-3">You May Also Like</h5>
            <div className="swiper category-swiper2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="shop-card">
                    <div className="dz-media">
                      <img src="images/shop/product/1.png" alt="image" />
                    </div>
                    <div className="dz-content">
                      <h6 className="title">
                        <a href="shop-list.html">SilkBliss Dress</a>
                      </h6>
                      <h6 className="price">$40.00</h6>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="shop-card">
                    <div className="dz-media">
                      <img src="images/shop/product/3.png" alt="image" />
                    </div>
                    <div className="dz-content">
                      <h6 className="title">
                        <a href="shop-list.html">GlamPants</a>
                      </h6>
                      <h6 className="price">$30.00</h6>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="shop-card">
                    <div className="dz-media">
                      <img src="images/shop/product/4.png" alt="image" />
                    </div>
                    <div className="dz-content">
                      <h6 className="title">
                        <a href="shop-list.html">ComfyLeggings</a>
                      </h6>
                      <h6 className="price">$35.00</h6>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="shop-card">
                    <div className="dz-media">
                      <img src="images/shop/product/2.png" alt="image" />
                    </div>
                    <div className="dz-content">
                      <h6 className="title">
                        <a href="shop-list.html">ClassicCapri</a>
                      </h6>
                      <h6 className="price">$20.00</h6>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="shop-card">
                    <div className="dz-media">
                      <img src="images/shop/product/5.png" alt="image" />
                    </div>
                    <div className="dz-content">
                      <h6 className="title">
                        <a href="shop-list.html">DapperCoat</a>
                      </h6>
                      <h6 className="price">$70.00</h6>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="shop-card">
                    <div className="dz-media">
                      <img src="images/shop/product/6.png" alt="image" />
                    </div>
                    <div className="dz-content">
                      <h6 className="title">
                        <a href="shop-list.html">ComfyLeggings</a>
                      </h6>
                      <h6 className="price">$45.00</h6>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="shop-card">
                    <div className="dz-media">
                      <img src="images/shop/product/7.png" alt="image" />
                    </div>
                    <div className="dz-content">
                      <h6 className="title">
                        <a href="shop-list.html">DenimDream Jeans</a>
                      </h6>
                      <h6 className="price">$40.00</h6>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="shop-card">
                    <div className="dz-media">
                      <img src="images/shop/product/4.png" alt="image" />
                    </div>
                    <div className="dz-content">
                      <h6 className="title">
                        <a href="shop-list.html">SilkBliss Dress</a>
                      </h6>
                      <h6 className="price">$60.00</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
