const SideBarCart = () => {
  return (
    <div
      className="offcanvas dz-offcanvas offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasRight"
    >
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        &times;
      </button>
      <div className="offcanvas-body">
        <div className="product-description">
          <div className="dz-tabs">
            <ul className="nav nav-tabs center" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="shopping-cart"
                  data-bs-toggle="tab"
                  data-bs-target="#shopping-cart-pane"
                  type="button"
                  role="tab"
                  aria-controls="shopping-cart-pane"
                  aria-selected="true"
                >
                  Shopping Cart
                  <span className="badge badge-light">5</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="wishlist"
                  data-bs-toggle="tab"
                  data-bs-target="#wishlist-pane"
                  type="button"
                  role="tab"
                  aria-controls="wishlist-pane"
                  aria-selected="false"
                >
                  Wishlist
                  <span className="badge badge-light">2</span>
                </button>
              </li>
            </ul>
            <div className="tab-content pt-4" id="dz-shopcart-sidebar">
              <div
                className="tab-pane fade show active"
                id="shopping-cart-pane"
                role="tabpanel"
                aria-labelledby="shopping-cart"
                tabIndex="0"
              >
                <div className="shop-sidebar-cart">
                  <ul className="sidebar-cart-list">
                    <li>
                      <div className="cart-widget">
                        <div className="dz-media me-3">
                          <img src="images/shop/shop-cart/pic1.jpg" alt="" />
                        </div>
                        <div className="cart-content">
                          <h6 className="title">
                            <a href="product-thumbnail.html">
                              Sophisticated Swagger Suit
                            </a>
                          </h6>
                          <div className="d-flex align-items-center">
                            <div className="btn-quantity light quantity-sm me-3">
                              <input
                                type="text"
                                value="1"
                                name="demo_vertical2"
                              />
                            </div>
                            <h6 className="dz-price mb-0">$50.00</h6>
                          </div>
                        </div>
                        <a href="#" className="dz-close">
                          <i className="ti-close"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="cart-widget">
                        <div className="dz-media me-3">
                          <img src="images/shop/shop-cart/pic2.jpg" alt="" />
                        </div>
                        <div className="cart-content">
                          <h6 className="title">
                            <a href="product-thumbnail.html">
                              Cozy Knit Cardigan Sweater
                            </a>
                          </h6>
                          <div className="d-flex align-items-center">
                            <div className="btn-quantity light quantity-sm me-3">
                              <input
                                type="text"
                                value="1"
                                name="demo_vertical2"
                              />
                            </div>
                            <h6 className="dz-price mb-0">$40.00</h6>
                          </div>
                        </div>
                        <a href="#" className="dz-close">
                          <i className="ti-close"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="cart-widget">
                        <div className="dz-media me-3">
                          <img src="images/shop/shop-cart/pic3.jpg" alt="" />
                        </div>
                        <div className="cart-content">
                          <h6 className="title">
                            <a href="product-thumbnail.html">
                              Athletic Mesh Sports Leggings
                            </a>
                          </h6>
                          <div className="d-flex align-items-center">
                            <div className="btn-quantity light quantity-sm me-3">
                              <input
                                type="text"
                                value="1"
                                name="demo_vertical2"
                              />
                            </div>
                            <h6 className="dz-price mb-0">$65.00</h6>
                          </div>
                        </div>
                        <a href="#" className="dz-close">
                          <i className="ti-close"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="cart-total">
                    <h5 className="mb-0">Subtotal:</h5>
                    <h5 className="mb-0">300.00$</h5>
                  </div>
                  <div className="mt-auto">
                    <div className="shipping-time">
                      <div className="dz-icon">
                        <i className="flaticon flaticon-ship"></i>
                      </div>
                      <div className="shipping-content">
                        <h6 className="title pe-4">
                          Congratulations ,{" you've "}got free shipping!
                        </h6>
                        <div className="progress">
                          <div
                            className="progress-bar progress-animated border-0"
                            // style="width: 75%"
                            role="progressbar"
                          >
                            <span className="sr-only">75% Complete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="shop-checkout.html"
                      className="btn btn-outline-secondary btn-block m-b20"
                    >
                      Checkout
                    </a>
                    <a
                      href="shop-cart.html"
                      className="btn btn-secondary btn-block"
                    >
                      View Cart
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="wishlist-pane"
                role="tabpanel"
                aria-labelledby="wishlist"
                tabIndex="0"
              >
                <div className="shop-sidebar-cart">
                  <ul className="sidebar-cart-list">
                    <li>
                      <div className="cart-widget">
                        <div className="dz-media me-3">
                          <img src="images/shop/shop-cart/pic1.jpg" alt="" />
                        </div>
                        <div className="cart-content">
                          <h6 className="title">
                            <a href="product-thumbnail.html">
                              Sophisticated Swagger Suit
                            </a>
                          </h6>
                          <div className="d-flex align-items-center">
                            <h6 className="dz-price mb-0">$50.00</h6>
                          </div>
                        </div>
                        <a href="#" className="dz-close">
                          <i className="ti-close"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="cart-widget">
                        <div className="dz-media me-3">
                          <img src="images/shop/shop-cart/pic2.jpg" alt="" />
                        </div>
                        <div className="cart-content">
                          <h6 className="title">
                            <a href="product-thumbnail.html">
                              Cozy Knit Cardigan Sweater
                            </a>
                          </h6>
                          <div className="d-flex align-items-center">
                            <h6 className="dz-price mb-0">$40.00</h6>
                          </div>
                        </div>
                        <a href="#" className="dz-close">
                          <i className="ti-close"></i>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="cart-widget">
                        <div className="dz-media me-3">
                          <img src="images/shop/shop-cart/pic3.jpg" alt="" />
                        </div>
                        <div className="cart-content">
                          <h6 className="title">
                            <a href="product-thumbnail.html">
                              Athletic Mesh Sports Leggings
                            </a>
                          </h6>
                          <div className="d-flex align-items-center">
                            <h6 className="dz-price mb-0">$65.00</h6>
                          </div>
                        </div>
                        <a href="#" className="dz-close">
                          <i className="ti-close"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-auto">
                    <a
                      href="shop-wishlist.html"
                      className="btn btn-secondary btn-block"
                    >
                      Check Your Favourite
                    </a>
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

export default SideBarCart;
