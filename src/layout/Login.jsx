import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="page-content bg-light">
      <section className="px-3 register-page">
        <div className="row align-center-center">
          <div className="col-xxl-6 col-xl-6 col-lg-6 end-side-content">
            <div className="login-area">
              <h2 className="text-secondary text-center">Welcome Back</h2>
              <p className="text-center m-b25">
                welcome please login to your account.
              </p>
              <form>
                <div className="m-b30">
                  <label className="label-title">Email Address</label>
                  <input
                    name="dzName"
                    required=""
                    className="form-control"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
                <div className="m-b15">
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
                <div className="form-row d-flex justify-content-between m-b30">
                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="basic_checkbox_1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="basic_checkbox_1"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <a className="text-primary" href="javascript:void(0);">
                      Forgot Password
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="shop-my-account.html"
                    className="btn btn-secondary btnhover text-uppercase me-2"
                  >
                    Sign In
                  </a>
                  <Link
                    to="/register"
                    className="btn btn-outline-secondary btnhover text-uppercase"
                  >
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 start-side-content register">
            <div className="registration-media logo">
              <Link to="/">
                <img src="images/logo2.png" alt="/" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
