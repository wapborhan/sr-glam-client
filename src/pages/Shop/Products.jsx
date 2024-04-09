import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="col-80 col-xl-9">
      <div className="filter-wrapper">
        <div className="filter-left-area">
          <ul className="filter-tag">
            <li>
              <a href="javascript:void(0);" className="tag-btn">
                Dresses
                <i className="icon feather icon-x tag-close"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" className="tag-btn">
                Tops
                <i className="icon feather icon-x tag-close"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" className="tag-btn">
                Outerwear
                <i className="icon feather icon-x tag-close"></i>
              </a>
            </li>
          </ul>
          <span>Showing 1–5 Of 50 Results</span>
        </div>
        <div className="filter-right-area">
          <a href="javascript:void(0);" className="panel-btn me-2">
            <svg
              className="me-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              width="20"
              height="20"
            >
              <g id="Layer_28" data-name="Layer 28">
                <path d="M2.54,5H15v.5A1.5,1.5,0,0,0,16.5,7h2A1.5,1.5,0,0,0,20,5.5V5h2.33a.5.5,0,0,0,0-1H20V3.5A1.5,1.5,0,0,0,18.5,2h-2A1.5,1.5,0,0,0,15,3.5V4H2.54a.5.5,0,0,0,0,1ZM16,3.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z"></path>
                <path d="M22.4,20H18v-.5A1.5,1.5,0,0,0,16.5,18h-2A1.5,1.5,0,0,0,13,19.5V20H2.55a.5.5,0,0,0,0,1H13v.5A1.5,1.5,0,0,0,14.5,23h2A1.5,1.5,0,0,0,18,21.5V21h4.4a.5.5,0,0,0,0-1ZM17,21.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-2a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5Z"></path>
                <path d="M8.5,15h2A1.5,1.5,0,0,0,12,13.5V13H22.45a.5.5,0,1,0,0-1H12v-.5A1.5,1.5,0,0,0,10.5,10h-2A1.5,1.5,0,0,0,7,11.5V12H2.6a.5.5,0,1,0,0,1H7v.5A1.5,1.5,0,0,0,8.5,15ZM8,11.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z"></path>
              </g>
            </svg>
            Filter
          </a>
          <div className="form-group">
            <select className="default-select">
              <option>Latest</option>
              <option>Popularity</option>
              <option>Average rating</option>
              <option>Latest</option>
              <option>Low to high</option>
              <option>high to Low</option>
            </select>
          </div>
          <div className="form-group Category">
            <select className="default-select">
              <option>Products</option>
              <option>9 Products</option>
              <option>12 Products</option>
              <option>14 Products</option>
              <option>18 Products</option>
              <option>24 Products</option>
            </select>
          </div>
          <div className="shop-tab">
            <ul className="nav" role="tablist" id="dz-shop-tab">
              <li className="nav-item" role="presentation">
                <a
                  href="#tab-list-list"
                  className="nav-link active"
                  id="tab-list-list-btn"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-list-list"
                  role="tab"
                  aria-controls="tab-list-list"
                  aria-selected="true"
                >
                  <svg
                    width="512"
                    height="512"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_121_190)">
                      <path
                        d="M42.667 373.333H96C119.564 373.333 138.667 392.436 138.667 416V469.333C138.667 492.898 119.564 512 96 512H42.667C19.103 512 0 492.898 0 469.333V416C0 392.436 19.103 373.333 42.667 373.333Z"
                        fill="black"
                      ></path>
                      <path
                        d="M42.667 186.667H96C119.564 186.667 138.667 205.77 138.667 229.334V282.667C138.667 306.231 119.564 325.334 96 325.334H42.667C19.103 325.333 0 306.231 0 282.667V229.334C0 205.769 19.103 186.667 42.667 186.667Z"
                        fill="black"
                      ></path>
                      <path
                        d="M42.667 0H96C119.564 0 138.667 19.103 138.667 42.667V96C138.667 119.564 119.564 138.667 96 138.667H42.667C19.103 138.667 0 119.564 0 96V42.667C0 19.103 19.103 0 42.667 0Z"
                        fill="black"
                      ></path>
                      <path
                        d="M230.565 373.333H468.437C492.682 373.333 512.336 392.436 512.336 416V469.333C512.336 492.897 492.682 512 468.437 512H230.565C206.32 512 186.666 492.898 186.666 469.333V416C186.667 392.436 206.32 373.333 230.565 373.333Z"
                        fill="black"
                      ></path>
                      <path
                        d="M230.565 186.667H468.437C492.682 186.667 512.336 205.77 512.336 229.334V282.667C512.336 306.231 492.682 325.334 468.437 325.334H230.565C206.32 325.334 186.666 306.231 186.666 282.667V229.334C186.667 205.769 206.32 186.667 230.565 186.667Z"
                        fill="black"
                      ></path>
                      <path
                        d="M230.565 0H468.437C492.682 0 512.336 19.103 512.336 42.667V96C512.336 119.564 492.682 138.667 468.437 138.667H230.565C206.32 138.667 186.666 119.564 186.666 96V42.667C186.667 19.103 206.32 0 230.565 0Z"
                        fill="black"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_121_190">
                        <rect width="512" height="512" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#tab-list-column"
                  className="nav-link"
                  id="tab-list-column-btn"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-list-column"
                  role="tab"
                  aria-controls="tab-list-column"
                  aria-selected="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    // style="enable-background:new 0 0 512 512;"
                    xml:space="preserve"
                    width="512"
                    height="512"
                  >
                    <g>
                      <path d="M85.333,0h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   C38.205,234.667,0,196.462,0,149.333v-64C0,38.205,38.205,0,85.333,0z"></path>
                      <path d="M362.667,0h64C473.795,0,512,38.205,512,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C277.333,38.205,315.538,0,362.667,0z"></path>
                      <path d="M85.333,277.333h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   C38.205,512,0,473.795,0,426.667v-64C0,315.538,38.205,277.333,85.333,277.333z"></path>
                      <path d="M362.667,277.333h64c47.128,0,85.333,38.205,85.333,85.333v64C512,473.795,473.795,512,426.667,512h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C277.333,315.538,315.538,277.333,362.667,277.333z"></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#tab-list-grid"
                  className="nav-link"
                  id="tab-list-grid-btn"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-list-grid"
                  role="tab"
                  aria-controls="tab-list-grid"
                  aria-selected="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_2"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    // style="enable-background:new 0 0 512 512;"
                    xml:space="preserve"
                    width="512"
                    height="512"
                  >
                    <g>
                      <path d="M42.667,373.333H96c23.564,0,42.667,19.103,42.667,42.667v53.333C138.667,492.898,119.564,512,96,512H42.667   C19.103,512,0,492.898,0,469.333V416C0,392.436,19.103,373.333,42.667,373.333z"></path>
                      <path d="M416,373.333h53.333C492.898,373.333,512,392.436,512,416v53.333C512,492.898,492.898,512,469.333,512H416   c-23.564,0-42.667-19.102-42.667-42.667V416C373.333,392.436,392.436,373.333,416,373.333z"></path>
                      <path d="M42.667,186.667H96c23.564,0,42.667,19.103,42.667,42.667v53.333c0,23.564-19.103,42.667-42.667,42.667H42.667   C19.103,325.333,0,306.231,0,282.667v-53.333C0,205.769,19.103,186.667,42.667,186.667z"></path>
                      <path d="M416,186.667h53.333c23.564,0,42.667,19.103,42.667,42.667v53.333c0,23.564-19.102,42.667-42.667,42.667H416   c-23.564,0-42.667-19.103-42.667-42.667v-53.333C373.333,205.769,392.436,186.667,416,186.667z"></path>
                      <path d="M42.667,0H96c23.564,0,42.667,19.103,42.667,42.667V96c0,23.564-19.103,42.667-42.667,42.667H42.667   C19.103,138.667,0,119.564,0,96V42.667C0,19.103,19.103,0,42.667,0z"></path>
                      <path d="M229.333,373.333h53.333c23.564,0,42.667,19.103,42.667,42.667v53.333c0,23.564-19.103,42.667-42.667,42.667h-53.333   c-23.564,0-42.667-19.102-42.667-42.667V416C186.667,392.436,205.769,373.333,229.333,373.333z"></path>
                      <path d="M229.333,186.667h53.333c23.564,0,42.667,19.103,42.667,42.667v53.333c0,23.564-19.103,42.667-42.667,42.667h-53.333   c-23.564,0-42.667-19.103-42.667-42.667v-53.333C186.667,205.769,205.769,186.667,229.333,186.667z"></path>
                      <path d="M229.333,0h53.333c23.564,0,42.667,19.103,42.667,42.667V96c0,23.564-19.103,42.667-42.667,42.667h-53.333   c-23.564,0-42.667-19.103-42.667-42.667V42.667C186.667,19.103,205.769,0,229.333,0z"></path>
                      <path d="M416,0h53.333C492.898,0,512,19.103,512,42.667V96c0,23.564-19.102,42.667-42.667,42.667H416   c-23.564,0-42.667-19.103-42.667-42.667V42.667C373.333,19.103,392.436,0,416,0z"></path>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 tab-content shop-" id="pills-tabContent">
          <div
            className="tab-pane fade active show"
            id="tab-list-grid"
            role="tabpanel"
            aria-labelledby="tab-list-grid-btn"
          >
            <div className="row gx-xl-4 g-3">
              <div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
                <div className="shop-card style-1">
                  <div className="dz-media">
                    <img src="images/shop/product/1.png" alt="image" />
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
                        <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="dz-content">
                    <h5 className="title">Cozy Knit Cardigan Sweater</h5>
                    <h5 className="price">$80</h5>
                  </div>
                  <div className="product-tag">
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
                <div className="shop-card style-1">
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
                        <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
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
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
                <div className="shop-card style-1">
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
                        <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="dz-content">
                    <h5 className="title">
                      <a href="shop-list.html">Classic Denim Skinny Jeans</a>
                    </h5>
                    <h5 className="price">$80</h5>
                  </div>
                  <div className="product-tag">
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
                <div className="shop-card style-1">
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
                        <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
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
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
                <div className="shop-card style-1">
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
                        <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
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
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
                <div className="shop-card style-1">
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
                        <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
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
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
                <div className="shop-card style-1">
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
                        <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
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
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
                <div className="shop-card style-1">
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
                        <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
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
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
                <div className="shop-card style-1">
                  <div className="dz-media">
                    <img src="images/shop/product/9.png" alt="image" />
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
                        <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="dz-content">
                    <h5 className="title">
                      <a href="shop-list.html">Comfy Lounge Jogger Pants</a>
                    </h5>
                    <h5 className="price">$80</h5>
                  </div>
                  <div className="product-tag">
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
                <div className="shop-card style-1">
                  <div className="dz-media">
                    <img src="images/shop/product/10.png" alt="image" />
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
                        <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="dz-content">
                    <h5 className="title">
                      <a href="shop-list.html">Stylish Fedora Hat Collection</a>
                    </h5>
                    <h5 className="price">$80</h5>
                  </div>
                  <div className="product-tag">
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
                <div className="shop-card style-1">
                  <div className="dz-media">
                    <img src="images/shop/product/11.png" alt="image" />
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
                        <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="dz-content">
                    <h5 className="title">
                      <a href="shop-list.html">
                        Suede Ankle Booties Collection
                      </a>
                    </h5>
                    <h5 className="price">$80</h5>
                  </div>
                  <div className="product-tag">
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
                <div className="shop-card style-1">
                  <div className="dz-media">
                    <img src="images/shop/product/12.png" alt="image" />
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
                        <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="dz-content">
                    <h5 className="title">
                      <a href="shop-list.html">
                        Hiking Outdoor Gear Collection
                      </a>
                    </h5>
                    <h5 className="price">$80</h5>
                  </div>
                  <div className="product-tag">
                    <span className="badge ">Get 20% Off</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row page mt-0">
        <div className="col-md-6">
          <p className="page-text">Showing 1–5 Of 50 Results</p>
        </div>
        <div className="col-md-6">
          <nav aria-label="Blog Pagination">
            <ul className="pagination style-1">
              <li className="page-item">
                <a className="page-link active" href="javascript:void(0);">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:void(0);">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link next" href="javascript:void(0);">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Products;
