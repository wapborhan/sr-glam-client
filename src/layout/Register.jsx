import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="page-content bg-light">
      <section className="px-3 register-page">
        <div className="row align-center-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 start-side-content register">
            <div className="registration-media logo">
              <Link to="/">
                <img src="images/logo2.png" alt="/" />
              </Link>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 end-side-content">
            <div className="login-area">
              <h2 className="text-secondary text-center">Registration Now</h2>
              <p className="text-center m-b30">
                Welcome please registration to your account
              </p>
              <form>
                <div className="m-b25">
                  <label className="label-title">Username</label>
                  <input
                    name="dzName"
                    required=""
                    className="form-control"
                    placeholder="Username"
                    type="text"
                  />
                </div>
                <div className="m-b25">
                  <label className="label-title">Email Address</label>
                  <input
                    name="dzName"
                    required=""
                    className="form-control"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <div className="m-b40">
                  <label className="label-title">Password</label>
                  <div className="secure-input ">
                    <input
                      type="password"
                      name="password"
                      className="form-control dz-password"
                      placeholder="Password"
                    />
                    <div className="show-pass">
                      <i className="eye-open fa-regular fa-eye"></i>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="shop-registration.html"
                    className="btn btn-secondary btnhover text-uppercase me-2"
                  >
                    Register
                  </a>
                  <Link
                    to="/login"
                    className="btn btn-outline-secondary btnhover text-uppercase"
                  >
                    Sign In
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
