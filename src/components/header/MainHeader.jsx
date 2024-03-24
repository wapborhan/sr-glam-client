const MainHeader = () => {
  return (
    <>
      {/* main */}
      <div className="header-info-bar">
        <div className="container clearfix">
          <div className="logo-header logo-dark">
            <a href="index-2.html">
              <img src="images/logo.svg" alt="logo" />
            </a>
          </div>

          <div className="extra-nav d-md-flex d-none">
            <div className="extra-cell">
              <ul className="navbar-nav header-right m-0">
                <li className="nav-item info-box">
                  <div className="nav-link">
                    <div className="dz-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        // style="enable-background: new 0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <path
                          // style="fill: #3cc"
                          d="M489.343 210.251c-4.827-105.317-92.01-189.513-198.498-189.513h-69.689c-106.488 0-193.67 84.197-198.498 189.513C9.495 214.747 0 227.228 0 241.894v78.61c0 18.436 15 33.436 33.437 33.436h60.996c6.075 0 11-4.925 11-11V219.458c0-6.075-4.925-11-11-11H44.789c5.699-92.338 82.618-165.72 176.366-165.72h69.689c93.749 0 170.667 73.381 176.366 165.72h-49.644c-6.075 0-11 4.925-11 11V342.94c0 6.075 4.925 11 11 11h60.996c18.436 0 33.436-15 33.436-33.436v-78.61c.002-14.666-9.493-27.147-22.655-31.643zM83.433 331.94H33.437c-6.306 0-11.437-5.13-11.437-11.436v-78.61c0-6.306 5.131-11.436 11.437-11.436h49.996V331.94zM490 320.504c0 6.306-5.131 11.436-11.436 11.436h-49.996V230.458h49.996c6.306 0 11.436 5.13 11.436 11.436v78.61z"
                        />
                        <path d="M256 491.262a11.001 11.001 0 0 1-8.402-3.9l-52.108-61.671h-74.566c-20.673 0-37.491-16.818-37.491-37.49V188.049c0-20.673 16.818-37.491 37.491-37.491h270.154c20.672 0 37.49 16.818 37.49 37.491V388.2c0 20.672-16.818 37.49-37.49 37.49h-74.566l-52.108 61.671a11.006 11.006 0 0 1-8.404 3.901zM120.923 172.558c-8.542 0-15.491 6.949-15.491 15.491V388.2c0 8.541 6.949 15.49 15.491 15.49h79.673c3.238 0 6.312 1.427 8.402 3.9L256 463.218l47.002-55.627a10.998 10.998 0 0 1 8.402-3.9h79.673c8.541 0 15.49-6.949 15.49-15.49V188.049c0-8.542-6.949-15.491-15.49-15.491H120.923z" />
                        <path d="M193.81 259.09c-8.663.084-14.039-9.956-9.139-17.11 4.134-6.475 14.16-6.434 18.29 0 4.892 7.164-.483 17.196-9.151 17.11zM311.729 259.09c-7.629.166-13.258-8.219-10.16-15.21 3.614-8.972 16.705-8.978 20.31 0 3.113 6.979-2.526 15.376-10.15 15.21zM256 352.204c-25.31 0-50.619-10.009-73.192-30.028-4.545-4.03-4.962-10.982-.931-15.528 4.029-4.545 10.982-4.962 15.528-.931 36.689 32.536 80.501 32.538 117.19 0 4.547-4.031 11.497-3.614 15.528.931 4.031 4.546 3.614 11.498-.931 15.528-22.572 20.019-47.882 30.028-73.192 30.028z" />
                      </svg>
                    </div>
                    <div className="info-content">
                      <span>24/7 SUPPORT</span>
                      <h6 className="title mb-0">+73 099 321 312</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="header-search-nav">
            <form className="header-item-search">
              <div className="input-group search-input">
                <select className="default-select">
                  <option>All Categories</option>
                  <option>Photography</option>
                  <option>Arts</option>
                  <option>Adventure</option>
                  <option>Action</option>
                  <option>Games</option>
                  <option>Movies</option>
                  <option>Comics</option>
                  <option>Biographies</option>
                  <option>Children’s Books</option>
                  <option>Historical</option>
                  <option>Contemporary</option>
                  <option>classNameics</option>
                  <option>Education</option>
                </select>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with dropdown button"
                  placeholder="Search for products"
                />
                <button className="btn" type="button">
                  <i className="iconly-Light-Search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* sticky */}
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          <div className="container clearfix d-lg-flex d-block">
            <div className="logo-header logo-dark">
              <a href="index-2.html">
                <img src="images/logo.svg" alt="logo" />
              </a>
            </div>

            <button
              className="navbar-toggler collapsed navicon justify-content-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div
              className="header-nav navbar-collapse collapse justify-content-start"
              id="navbarNavDropdown"
            >
              <div className="logo-header">
                <a href="index-2.html">
                  <img src="images/logo.svg" alt="" />
                </a>
              </div>
              <div className="browse-category-menu">
                <a href="javascript:void(0);" className="category-btn">
                  <div className="category-menu me-3">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="category-btn-title">
                    {" "}
                    Browse Categories{" "}
                  </span>
                  <span className="toggle-arrow ms-auto">
                    <i className="icon feather icon-chevron-down"></i>
                  </span>
                </a>
                <div
                  className="category-menu-items"
                  //  style="display: none"
                >
                  <ul className="nav navbar-nav">
                    <li className="has-mega-menu cate-drop">
                      <a href="javascript:void(0);">
                        <i className="icon feather icon-arrow-right"></i>
                        <span>Bamboo Products</span>
                        <span className="menu-icon">
                          <i className="icon feather icon-chevron-right"></i>
                        </span>
                      </a>
                      <div className="mega-menu">
                        <div className="row">
                          <div className="col-md-3 col-sm-4 col-6">
                            <a
                              href="javascript:void(0);"
                              className="menu-title"
                            >
                              Smart Home Products
                            </a>
                            <ul>
                              <li>
                                <a href="shop-standard.html">Thermostats</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Lighting</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Security Systems
                                  <span className="badge bg-primary">NEW</span>
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Locks</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Home Assistants</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Home Entertainment Systems
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Blinds And Shades
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Water Monitors</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 col-sm-4 col-6">
                            <a href="shop-standard.html" className="menu-title">
                              Smart Home Products
                            </a>
                            <ul>
                              <li>
                                <a href="shop-standard.html">Thermostats</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Lighting</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Security Systems
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Locks</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Home Assistants</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Home Entertainment Systems
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Blinds And Shades
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Water Monitors</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 col-sm-4 col-6">
                            <a href="shop-standard.html" className="menu-title">
                              Smart Home Products
                            </a>
                            <ul>
                              <li>
                                <a href="shop-standard.html">Thermostats</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Lighting</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Security Systems
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Locks</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Home Assistants</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Home Entertainment Systems
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Blinds And Shades
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Water Monitors
                                  <span className="badge bg-red">Offer</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 col-sm-4 col-6">
                            <a href="shop-standard.html" className="menu-title">
                              Smart Home Products
                            </a>
                            <ul>
                              <li>
                                <a href="shop-standard.html">Thermostats</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Lighting
                                  <span className="badge bg-secondary">
                                    Exclusive
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Security Systems
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Locks</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Home Assistants</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Home Entertainment Systems
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Blinds And Shades
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Water Monitors</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 col-sm-4 col-6">
                            <a href="shop-standard.html" className="menu-title">
                              Smart Home Products
                            </a>
                            <ul>
                              <li>
                                <a href="shop-standard.html">Thermostats</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Lighting
                                  <span className="badge bg-orange">
                                    Feture
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Security Systems
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Locks</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Home Assistants</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 col-sm-4 col-6">
                            <a href="shop-standard.html" className="menu-title">
                              Smart Home Products
                            </a>
                            <ul>
                              <li>
                                <a href="shop-standard.html">Thermostats</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Lighting</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Security Systems
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Locks
                                  <span className="badge bg-purple">SALE</span>
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Home Assistants</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Home Entertainment Systems
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Blinds And Shades
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 col-sm-4 col-6">
                            <a href="shop-standard.html" className="menu-title">
                              Smart Home Products
                            </a>
                            <ul>
                              <li>
                                <a href="shop-standard.html">Thermostats</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Lighting</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Security Systems
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Locks</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Home Assistants</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Home Entertainment Systems
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3 col-sm-4 col-6">
                            <a href="shop-standard.html" className="menu-title">
                              Smart Home Products
                            </a>
                            <ul>
                              <li>
                                <a href="shop-standard.html">Thermostats</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Lighting</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">
                                  Security Systems
                                </a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Locks</a>
                              </li>
                              <li>
                                <a href="shop-standard.html">Home Assistants</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="cate-drop">
                      <a href="javascript:void(0);">
                        <i className="icon feather icon-arrow-right"></i>
                        <span>Fitness Trackers</span>
                        <span className="menu-icon">
                          <i className="icon feather icon-chevron-right"></i>
                        </span>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="shop-standard.html">Thermostats</a>
                        </li>
                        <li>
                          <a href="shop-standard.html">Lighting</a>
                        </li>
                        <li>
                          <a href="shop-standard.html">Security Systems</a>
                        </li>
                        <li>
                          <a href="shop-standard.html">Locks</a>
                        </li>
                        <li>
                          <a href="shop-standard.html">Home Assistants</a>
                        </li>
                        <li>
                          <a href="shop-standard.html">Entertainment Systems</a>
                        </li>
                        <li>
                          <a href="shop-standard.html">Blinds And Shades</a>
                        </li>
                        <li>
                          <a href="shop-standard.html">Appliances</a>
                        </li>
                        <li>
                          <a href="shop-standard.html">Water Monitors</a>
                        </li>
                        <li>
                          <a href="shop-standard.html">Gardening Systems</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="shop-standard.html">
                        <i className="icon feather icon-arrow-right"></i>
                        <span>Protein Supplements</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-standard.html">
                        <i className="icon feather icon-arrow-right"></i>
                        <span>Fitness Equipment</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-standard.html">
                        <i className="icon feather icon-arrow-right"></i>
                        <span>Reusable Bags</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-standard.html">
                        <i className="icon feather icon-arrow-right"></i>
                        <span>Water Bottles </span>
                        <span className="badge bg-purple">SALE</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-standard.html">
                        <i className="icon feather icon-arrow-right"></i>
                        <span>Home Assistants</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-standard.html">
                        <i className="icon feather icon-arrow-right"></i>
                        <span>Water Monitors</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-standard.html">
                        <i className="icon feather icon-arrow-right"></i>
                        <span>Baby Monitors</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-standard.html">
                        <i className="icon feather icon-arrow-right"></i>
                        <span>Convertible Car Seats</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-standard.html">
                        <i className="icon feather icon-arrow-right"></i>
                        <span>Convertible Car Seats</span>
                      </a>
                    </li>
                    <li className="menu-items">
                      <a href="javascript:void(0);">
                        <i className="flaticon-blocks me-3"></i>
                        <span>More Products</span>
                        <span className="menu-icon">
                          <i className="icon feather icon-chevron-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="nav navbar-nav dark-nav">
                <li className="has-mega-menu sub-menu-down">
                  <a href="javascript:void(0);">
                    <span>Home</span>
                    <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <div className="mega-menu demo-menu">
                    <div className="row">
                      <div className="col-md-4 col-6">
                        <a href="index-2.html">
                          <img src="images/demo/demo-1.png" alt="/" />
                          <span className="menu-title">01 Home Page</span>
                        </a>
                      </div>
                      <div className="col-md-4 col-6">
                        <a href="index-3.html">
                          <img src="images/demo/demo-2.png" alt="/" />
                          <span className="menu-title">02 Home Page</span>
                        </a>
                      </div>
                      <div className="col-md-4 col-6">
                        <a href="index-4.html">
                          <img src="images/demo/demo-3.png" alt="/" />
                          <span className="menu-title">03 Home Page</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="has-mega-menu sub-menu-down">
                  <a href="javascript:void(0);">
                    <span>Shop</span>
                    <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <div className="mega-menu shop-menu">
                    <div className="row">
                      <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="row">
                          <div className="col-md-4 col-sm-4 col-6">
                            <a href="javascript:;" className="menu-title">
                              Shop Structure
                            </a>
                            <ul>
                              <li>
                                <a href="shop-standard.html">Shop Standard</a>
                              </li>
                              <li>
                                <a href="shop-list.html">Shop List</a>
                              </li>
                              <li>
                                <a href="shop-with-category.html">
                                  Shop With Category
                                </a>
                              </li>
                              <li>
                                <a href="shop-filters-top-bar.html">
                                  Shop Filters Top Bar
                                </a>
                              </li>
                              <li>
                                <a href="shop-sidebar.html">Shop Sidebar</a>
                              </li>
                              <li>
                                <a href="shop-style-1.html">Shop Style 1</a>
                              </li>
                              <li>
                                <a href="shop-style-2.html">Shop Style 2</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-4 col-sm-4 col-6">
                            <a href="javascript:;" className="menu-title">
                              Product Structure
                            </a>
                            <ul>
                              <li>
                                <a href="product-default.html">Default</a>
                              </li>
                              <li>
                                <a href="product-thumbnail.html">Thumbnail</a>
                              </li>
                              <li>
                                <a href="product-grid-media.html">Grid Media</a>
                              </li>
                              <li>
                                <a href="product-carousel.html">Carousel</a>
                              </li>
                              <li>
                                <a href="product-full-width.html">Full Width</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-4 col-sm-4 col-12">
                            <a href="javascript:;" className="menu-title">
                              Shop Pages
                            </a>
                            <ul>
                              <li>
                                <a href="shop-wishlist.html">Wishlist</a>
                              </li>
                              <li>
                                <a href="shop-cart.html">Cart</a>
                              </li>
                              <li>
                                <a href="shop-checkout.html">Checkout</a>
                              </li>
                              <li>
                                <a href="shop-compare.html">Compare</a>
                              </li>
                              <li>
                                <a href="shop-order-tracking.html">
                                  Order Tracking
                                </a>
                              </li>
                              <li>
                                <a href="shop-my-account.html">My Account</a>
                              </li>
                              <li>
                                <a href="shop-registration.html">
                                  Registration
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="month-deal">
                              <div>
                                <h3>Deal of the month</h3>
                                <p className="mb-0">
                                  Yes! Send me exclusive offers, personalised,
                                  and unique gift ideas, tips for shopping on
                                  Pixio
                                  <a
                                    href="shop-standard.html"
                                    className="dz-link-2"
                                  >
                                    View All Products
                                  </a>
                                </p>
                              </div>
                              <div className="sale-countdown">
                                <div className="countdown text-center">
                                  <div className="date">
                                    <span className="time days text-primary"></span>
                                    <span className="work-time">Days</span>
                                  </div>
                                  <div className="date">
                                    <span className="time hours text-primary"></span>
                                    <span className="work-time">Hours</span>
                                  </div>
                                  <div className="date">
                                    <span className="time mins text-primary"></span>
                                    <span className="work-time">Minutess</span>
                                  </div>
                                  <div className="date">
                                    <span className="time secs text-primary"></span>
                                    <span className="work-time">Second</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 d-none d-lg-block">
                        <div className="adv-media">
                          <img src="images/adv-1.png" alt="/" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="has-mega-menu sub-menu-down">
                  <a href="javascript:void(0);">
                    <span>Blog</span>
                    <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <div className="mega-menu">
                    <div className="row">
                      <div className="col-md-3 col-sm-6 col-6">
                        <a href="javascript:;" className="menu-title">
                          Blog Dark Style
                        </a>
                        <ul>
                          <li>
                            <a href="blog-dark-2-column.html">Blog 2 Column</a>
                          </li>
                          <li>
                            <a href="blog-dark-2-column-sidebar.html">
                              Blog 2 Column Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="blog-dark-3-column.html">Blog 3 Column</a>
                          </li>
                          <li>
                            <a href="blog-dark-half-image.html">
                              Blog Half Image
                            </a>
                          </li>
                        </ul>
                        <a href="javascript:;" className="menu-title">
                          Blog Light Style
                        </a>
                        <ul>
                          <li>
                            <a href="blog-light-2-column.html">Blog 2 Column</a>
                          </li>
                          <li>
                            <a href="blog-light-2-column-sidebar.html">
                              Blog 2 Column Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="blog-light-half-image.html">
                              Blog Half Image
                            </a>
                          </li>
                          <li>
                            <a href="blog-exclusive.html">Blog Exclusive</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 col-sm-6 col-6">
                        <a href="javascript:;" className="menu-title">
                          Blog Sidebar
                        </a>
                        <ul>
                          <li>
                            <a href="blog-left-sidebar.html">
                              Blog left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="blog-right-sidebar.html">
                              Blog Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="blog-both-sidebar.html">
                              Blog Both Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="blog-wide-sidebar.html">
                              Blog Wide Sidebar
                            </a>
                          </li>
                        </ul>

                        <a href="javascript:;" className="menu-title">
                          Blog Page
                        </a>
                        <ul>
                          <li>
                            <a href="blog-archive.html">Blog Archive</a>
                          </li>
                          <li>
                            <a href="blog-author.html">Author</a>
                          </li>
                          <li>
                            <a href="blog-category.html">Blog Category</a>
                          </li>
                          <li>
                            <a href="blog-tag.html">Blog Tag</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 col-sm-6 col-6">
                        <a href="javascript:;" className="menu-title">
                          Blog Details
                        </a>
                        <ul>
                          <li>
                            <a href="post-standard.html">Post Standard</a>
                          </li>
                          <li>
                            <a href="post-left-sidebar.html">
                              Post Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="post-header-image.html">
                              Post Header Image
                            </a>
                          </li>
                          <li>
                            <a href="post-slide-show.html">Post Slide Show</a>
                          </li>
                          <li>
                            <a href="post-side-image.html">Post Side Image</a>
                          </li>
                          <li>
                            <a href="post-gallery.html">Post Gallery</a>
                          </li>
                          <li>
                            <a href="post-gallery-alternative.html">
                              Post Gallery Alternative
                            </a>
                          </li>
                          <li>
                            <a href="post-open-gutenberg.html">
                              Post Open Gutenberg
                            </a>
                          </li>
                          <li>
                            <a href="post-link.html">Post Link</a>
                          </li>
                          <li>
                            <a href="post-audio.html">Post Audio</a>
                          </li>
                          <li>
                            <a href="post-video.html">Post Video</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3 col-sm-6 col-12">
                        <a href="javascript:;" className="menu-title">
                          Recent Posts
                        </a>
                        <div className="widget widget_post pt-2">
                          <ul>
                            <li>
                              <div className="dz-media">
                                <img
                                  src="images/shop/product/small/1.png"
                                  alt=""
                                />
                              </div>
                              <div className="dz-content">
                                <h6 className="name">
                                  <a href="post-standard.html">
                                    Cozy Knit Cardigan Sweater
                                  </a>
                                </h6>
                                <span className="time">July 23, 2023</span>
                              </div>
                            </li>
                            <li>
                              <div className="dz-media">
                                <img
                                  src="images/shop/product/small/2.png"
                                  alt=""
                                />
                              </div>
                              <div className="dz-content">
                                <h6 className="name">
                                  <a href="post-standard.html">
                                    Sophisticated Swagger Suit
                                  </a>
                                </h6>
                                <span className="time">July 23, 2023</span>
                              </div>
                            </li>
                            <li>
                              <div className="dz-media">
                                <img
                                  src="images/shop/product/small/3.png"
                                  alt=""
                                />
                              </div>
                              <div className="dz-content">
                                <h6 className="name">
                                  <a href="post-standard.html">
                                    Athletic Mesh Sports Leggings
                                  </a>
                                </h6>
                                <span className="time">July 23, 2023</span>
                              </div>
                            </li>
                            <li>
                              <div className="dz-media">
                                <img
                                  src="images/shop/product/small/4.png"
                                  alt=""
                                />
                              </div>
                              <div className="dz-content">
                                <h6 className="name">
                                  <a href="post-standard.html">
                                    Satin Wrap Party Blouse
                                  </a>
                                </h6>
                                <span className="time">July 23, 2023</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="has-mega-menu sub-menu-down">
                  <a href="javascript:void(0);">
                    <span>Portfolio</span>
                    <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <div className="mega-menu portfolio-menu">
                    <div className="row">
                      <div className="col-xl-10 col-lg-9 col-md-9 pe-xl-5 pe-md-3 col-sm-8">
                        <ul className="row portfolio-nav-link">
                          <li className="col">
                            <a href="portfolio-tiles.html">
                              <img
                                src="images/portfolio/icons/portfolio-tiles.svg"
                                alt="/"
                              />
                              <span>Portfolio Tiles</span>
                            </a>
                          </li>
                          <li className="col">
                            <a href="collage-style-1.html">
                              <img
                                src="images/portfolio/icons/collage-style-1.svg"
                                alt="/"
                              />
                              <span>Collage Style 1</span>
                            </a>
                          </li>
                          <li className="col">
                            <a href="collage-style-2.html">
                              <img
                                src="images/portfolio/icons/collage-style-2.svg"
                                alt="/"
                              />
                              <span>Collage Style 2</span>
                            </a>
                          </li>
                          <li className="col">
                            <a href="masonry-grid.html">
                              <img
                                src="images/portfolio/icons/masonry-grid.svg"
                                alt="/"
                              />
                              <span>Masonry Grid</span>
                            </a>
                          </li>
                          <li className="col">
                            <a href="cobble-style-1.html">
                              <img
                                src="images/portfolio/icons/cobble-style-1.svg"
                                alt="/"
                              />
                              <span>Cobble Style 1</span>
                            </a>
                          </li>
                          <li className="col">
                            <a href="cobble-style-2.html">
                              <img
                                src="images/portfolio/icons/cobble-style-2.svg"
                                alt="/"
                              />
                              <span>Cobble Style 2</span>
                            </a>
                          </li>
                          <li className="col">
                            <a href="portfolio-thumbs-slider.html">
                              <img
                                src="images/portfolio/icons/portfolio-thumbs-slider.svg"
                                alt="/"
                              />
                              <span>Portfolio Thumbs Slider</span>
                            </a>
                          </li>
                          <li className="col">
                            <a href="portfolio-film-strip.html">
                              <img
                                src="images/portfolio/icons/portfolio-film-strip.svg"
                                alt="/"
                              />
                              <span>Portfolio Film Strip</span>
                            </a>
                          </li>
                          <li className="col">
                            <a href="carousel-showcase.html">
                              <img
                                src="images/portfolio/icons/carousel-showcase.svg"
                                alt="/"
                              />
                              <span>Carousel Showcase</span>
                            </a>
                          </li>
                          <li className="col">
                            <a href="portfolio-split-slider.html">
                              <img
                                src="images/portfolio/icons/portfolio-split-slider.svg"
                                alt="/"
                              />
                              <span>Portfolio Split Slider</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-2 col-lg-3 col-md-3 line-left ps-3 pe-0 col-sm-4">
                        <a href="javascript:;" className="menu-title">
                          Portfolio Details
                        </a>
                        <ul>
                          <li>
                            <a href="portfolio-details-1.html">
                              Portfolio Details 1
                            </a>
                          </li>
                          <li>
                            <a href="portfolio-details-2.html">
                              Portfolio Details 2
                            </a>
                          </li>
                          <li>
                            <a href="portfolio-details-3.html">
                              Portfolio Details 3
                            </a>
                          </li>
                          <li>
                            <a href="portfolio-details-4.html">
                              Portfolio Details 4
                            </a>
                          </li>
                          <li>
                            <a href="portfolio-details-5.html">
                              Portfolio Details 5
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="has-mega-menu sub-menu-down">
                  <a href="javascript:void(0);">
                    <span>Pages</span>
                    <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <div className="mega-menu">
                    <div className="row justify-content-md-between">
                      <div className="col-md-2 col-sm-4 col-6">
                        <a href="javascript:;" className="menu-title">
                          Pages
                        </a>
                        <ul>
                          <li>
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li>
                            <a href="about-me.html">About Me</a>
                          </li>
                          <li>
                            <a href="pricing-table.html">Pricing Table</a>
                          </li>
                          <li>
                            <a href="our-gift-vouchers.html">
                              Our Gift Vouchers
                            </a>
                          </li>
                          <li>
                            <a href="what-we-do.html">What We Do</a>
                          </li>
                          <li>
                            <a href="faqs-1.html">Faqs 1</a>
                          </li>
                          <li>
                            <a href="faqs-2.html">Faqs 2</a>
                          </li>
                          <li>
                            <a href="our-team.html">Our Team</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-2 col-sm-4 col-6">
                        <a href="javascript:;" className="menu-title">
                          Contact Us
                        </a>
                        <ul>
                          <li>
                            <a href="contact-us-1.html">Contact Us 1</a>
                          </li>
                          <li>
                            <a href="contact-us-2.html">Contact Us 2</a>
                          </li>
                          <li>
                            <a href="contact-us-3.html">Contact Us 3</a>
                          </li>
                        </ul>

                        <a href="javascript:;" className="menu-title">
                          Web Pages
                        </a>
                        <ul>
                          <li>
                            <a href="error-1.html">Error 404 1</a>
                          </li>
                          <li>
                            <a href="error-2.html">Error 404 2</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming Soon</a>
                          </li>
                          <li>
                            <a href="under-construction.html">
                              Under Construction
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-2 col-sm-4 col-6">
                        <a href="javascript:;" className="menu-title">
                          Banner Style
                        </a>
                        <ul>
                          <li>
                            <a href="banner-with-bg-color.html">
                              Banner with BG Color
                            </a>
                          </li>
                          <li>
                            <a href="banner-with-image.html">
                              Banner with Image
                            </a>
                          </li>
                          <li>
                            <a href="banner-with-video.html">
                              Banner with Video
                            </a>
                          </li>
                          <li>
                            <a href="banner-with-kanbern.html">
                              Banner with Kanbern
                            </a>
                          </li>
                          <li>
                            <a href="banner-small.html">Banner Small</a>
                          </li>
                          <li>
                            <a href="banner-medium.html">Banner Medium</a>
                          </li>
                          <li>
                            <a href="banner-large.html">Banner Large</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-2 col-sm-4 col-6">
                        <a href="javascript:;" className="menu-title">
                          Header Style
                        </a>
                        <ul>
                          <li>
                            <a href="header-style-1.html">Header Style 1</a>
                          </li>
                          <li>
                            <a href="header-style-2.html">Header Style 2</a>
                          </li>
                          <li>
                            <a href="header-style-3.html">Header Style 3</a>
                          </li>
                          <li>
                            <a href="header-style-4.html">Header Style 4</a>
                          </li>
                          <li>
                            <a href="header-style-5.html">Header Style 5</a>
                          </li>
                          <li>
                            <a href="header-style-6.html">Header Style 6</a>
                          </li>
                          <li>
                            <a href="header-style-7.html">Header Style 7</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-2 col-sm-4 col-6">
                        <a href="javascript:;" className="menu-title">
                          Footer Style
                        </a>
                        <ul>
                          <li>
                            <a href="footer-style-1.html">Footer Style 1</a>
                          </li>
                          <li>
                            <a href="footer-style-2.html">Footer Style 2</a>
                          </li>
                          <li>
                            <a href="footer-style-3.html">Footer Style 3</a>
                          </li>
                          <li>
                            <a href="footer-style-4.html">Footer Style 4</a>
                          </li>
                          <li>
                            <a href="footer-style-5.html">Footer Style 5</a>
                          </li>
                          <li>
                            <a href="footer-style-6.html">Footer Style 6</a>
                          </li>
                          <li>
                            <a href="footer-style-7.html">Footer Style 7</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="dz-social-icon">
                <ul>
                  <li>
                    <a
                      className="fab fa-facebook-f"
                      target="_blank"
                      href="https://www.facebook.com/dexignzone"
                    ></a>
                  </li>
                  <li>
                    <a
                      className="fab fa-twitter"
                      target="_blank"
                      href="https://twitter.com/dexignzones"
                    ></a>
                  </li>
                  <li>
                    <a
                      className="fab fa-linkedin-in"
                      target="_blank"
                      href="https://www.linkedin.com/showcase/3686700/admin/"
                    ></a>
                  </li>
                  <li>
                    <a
                      className="fab fa-instagram"
                      target="_blank"
                      href="https://www.instagram.com/dexignzone/"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="extra-nav">
              <div className="extra-cell">
                <ul className="header-right">
                  <li className="nav-item login-link">
                    <a className="nav-link" href="shop-my-account.html">
                      Login / Register
                    </a>
                  </li>
                  <li className="nav-item search-link">
                    <a
                      className="nav-link"
                      href="javascript:void(0);"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasTop"
                      aria-controls="offcanvasTop"
                    >
                      <i className="iconly-Light-Search"></i>
                    </a>
                  </li>
                  <li className="nav-item wishlist-link">
                    <a
                      className="nav-link"
                      href="javascript:void(0);"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <i className="iconly-Light-Heart2"></i>
                    </a>
                  </li>
                  <li className="nav-item cart-link">
                    <a
                      href="javascript:void(0);"
                      className="nav-link cart-btn"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <i className="iconly-Broken-Buy"></i>
                      <span className="badge badge-circle">5</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
