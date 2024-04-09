const Footer = () => {
  return (
    <footer className="site-footer bg-light">
      {/* <!-- Footer Top --> */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="widget widget_about me-2">
                <div className="footer-logo logo-white">
                  <a href="index-2.html">
                    <img src="/images/logo-main.png" alt="" />
                  </a>
                </div>
                <ul className="widget-address">
                  <li>
                    <p>
                      <span>Address</span> : Savar, Dhaka, Bangladesh
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>E-mail</span> :
                      <a href="mailto:sr.sraboni979@gmail.com">
                        info@srabonisglam.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Phone</span> :
                      <a href="tel:+8801930323626">+880 1930-323-626</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="widget widget_post">
                <h5 className="footer-title">Recent Posts</h5>
                <ul>
                  <li>
                    <div className="dz-media">
                      <img src="images/shop/product/small/1.png" alt="" />
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
                      <img src="images/shop/product/small/2.png" alt="" />
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
                      <img src="images/shop/product/small/3.png" alt="" />
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
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-4 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="widget widget_services">
                <h5 className="footer-title">Our Stores</h5>
                <ul>
                  <li>
                    <a href="#">New York</a>
                  </li>
                  <li>
                    <a href="#">London SF</a>
                  </li>
                  <li>
                    <a href="#">Edinburgh</a>
                  </li>
                  <li>
                    <a href="#">Los Angeles</a>
                  </li>
                  <li>
                    <a href="#">Chicago</a>
                  </li>
                  <li>
                    <a href="#">Las Vegas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-4 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="widget widget_services">
                <h5 className="footer-title">Useful Links</h5>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                  <li>
                    <a href="#">Our Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-md-4 col-sm-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="widget widget_services">
                <h5 className="footer-title">Footer Menu</h5>
                <ul>
                  <li>
                    <a href="#">Instagram profile</a>
                  </li>
                  <li>
                    <a href="#">New Collection</a>
                  </li>
                  <li>
                    <a href="#">Woman Dress</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer Top End --> */}

      {/* <!-- Footer Bottom --> */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row fb-inner wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6 col-md-12 text-start">
              <p className="copyright-text">
                © <span className="current-year">2024 </span>
                {"Sraboni's  Glam"} All Rights Reserved. | Developed by{" "}
                <a href="https://www.srdreamlab.com/" target="__Blank">
                  SR Dream Lab
                </a>
              </p>
            </div>
            <div className="col-lg-6 col-md-12 text-end">
              <div className="d-flex align-items-center justify-content-center justify-content-md-center justify-content-xl-end">
                <span className="me-3">We Accept: </span>
                <img src="images/footer-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer Bottom End --> */}
    </footer>
  );
};

export default Footer;
