import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import InputSearch from "components/InputSearch/InputSearch";
import { toast } from "react-toastify";
import { clearCart } from "redux/features/Cart/CartSlice";
import { logout } from "redux/features/auth/authSlice";

function Header() {
  const dispatch = useDispatch();
  const user: any = useSelector((state: any) => state.auth.login.currentUser);
  const { cartTotalQuantity } = useSelector((state: any) => state.cart);
  const navigate = useNavigate();

  const handleLogOut = () => {
    toast.success("log out succes", {
      position: "top-right"
    });
    dispatch(clearCart());
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div>
      {/* Top Header */}
      <div className="Announcement">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+0987603191</p>
              <p>ngtrungduc.work@gmail.com</p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to="">
                <i className="fab fa-instagram" />
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in" />
              </Link>
              <Link to="">
                <i className="fab fa-youtube" />
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Header mobile */}
      <div className="header">
        <div className="container">
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="Logo" src="/images/logo.png" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  <div className="btn-group">
                    {user.user?.usename.length > 0 ? (
                      <>
                        <div className="">
                          <Link className="menu-auth" to="/profile">
                            hi...{user.user?.usename}
                          </Link>
                          <Link
                            className="menu-auth"
                            to="/login"
                            onClick={handleLogOut}
                          >
                            Logout
                          </Link>
                        </div>
                        <Link to="">
                          <i className="fas fa-shopping-bag icon-bag" />
                          <span className="badge">{cartTotalQuantity}</span>
                        </Link>
                      </>
                    ) : (
                      <div className="">
                        <Link className="menu-auth" to="/login">
                          Login
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Header Pc */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img alt="logo" src="/images/logo.png" />
                </Link>
              </div>
              <InputSearch />
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                <div className="btn-group">
                  {user.user?.usename.length > 0 ? (
                    <>
                      <div className="">
                        <Link className="menu-auth" to="/profile">
                          hi...{user.user?.usename}
                        </Link>
                        <Link
                          className="menu-auth"
                          to="/login"
                          onClick={handleLogOut}
                        >
                          Logout
                        </Link>
                      </div>
                      <Link to="/cart">
                        <i className="fas fa-shopping-bag icon-bag" />
                        <span className="badge">{cartTotalQuantity}</span>
                      </Link>
                    </>
                  ) : (
                    <div className="">
                      <Link className="menu-auth" to="/login">
                        Login
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
