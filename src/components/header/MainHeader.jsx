import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import BrowseCategories from "./BrowseCategories";

const MainHeader = () => {
  return (
    <>
      {/* main */}
      <div className="header-info-bar">
        <div className="container clearfix">
          <div className="logo-header logo-dark">
            <Link to="/">
              <img src="/images/logo-main.png" alt="Sraboni's Glam" />
            </Link>
          </div>

          <div className="extra-nav d-md-flex d-none">
            <div className="extra-cell">
              <ul className="ml-3  navbar-nav header-right">
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
                    <a href="tel:+8801930323626">
                      <div className="info-content">
                        <span>24/7 SUPPORT</span>
                        <h6 className="title mb-0">+880 1930-323-626</h6>
                      </div>
                    </a>
                    <div className="dz-social-icons">
                      <ul>
                        <li>
                          <a
                            className="fab fa-facebook-f"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.facebook.com/dexignzone"
                          ></a>
                        </li>

                        <li>
                          <a
                            className="fab fa-instagram"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/dexignzone/"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="header-search-nav">
            <form className="header-item-search">
              <div className="input-group search-input">
                <select className="default-select selectpickers">
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
              <Link to="/">
                <img src="images/logo.svg" alt="logo" />
              </Link>
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
                <Link to="/">
                  <img src="images/logo.svg" alt="" />
                </Link>
              </div>
              <BrowseCategories />
              <NavMenu />
            </div>

            <div className="extra-nav">
              <div className="extra-cell">
                <ul className="header-right">
                  <li className="nav-item login-link">
                    <Link
                      to="/login"
                      className="nav-link"
                      href="shop-my-account.html"
                    >
                      Login / Register
                    </Link>
                  </li>
                  <li className="nav-item search-link">
                    <a
                      className="nav-link"
                      href="#"
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
                      href="#"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <i className="iconly-Light-Heart2"></i>
                    </a>
                  </li>
                  <li className="nav-item cart-link">
                    <a
                      href="#"
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
