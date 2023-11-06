import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import Image from "../../../Assets/img";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailProfile } from "../../../Config/redux/actions/profile";

function NavbarComponentAdmin({ search, submitSearch, id }) {
  const token = localStorage.getItem("Ankasa");
  const { profile } = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    const localdata = localStorage.getItem("Ankasa");
    const { token } = JSON.parse(localdata);
    dispatch(detailProfile(token));
  }, []);

  return (
    <div className="bg-white">
  <div className="container">
    <div className="row d-flex justify-content-between align-items-center">
      <div className="col-lg-2 d-flex align-items-center">
        <img
          src={Image.Fly}
          alt="logo"
          style={{ width: "30px", marginRight: "10px" }}
        />
        <NavLink
          to="/Admin/ticket"
          style={{
            color: "black",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          <h5>Ankasa</h5>
        </NavLink>
      </div>
      <div className="col-lg-4">
        <form onSubmit={submitSearch}>
          <div className="field has-addons">
            <div className="control is-expanded px-3">
              <input
                type="search"
                className="input"
                id={id}
                onChange={search}
                placeholder="Where you want to go now ?"
                aria-label="Search"
                name="search"
                required
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="control">
              <button
                type="submit"
                className="button is-info"
                style={{ borderRadius: "10px" }}
              >
                <img
                  src="https://e7.pngegg.com/pngimages/608/913/png-clipart-computer-icons-google-search-symbol-mobile-search-search-for-miscellaneous-logo-thumbnail.png"
                  alt="search icon"
                  style={{
                    backgroundColor: "white",
                    width: "20px",
                  }}
                />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-6 d-flex justify-content-end">
        <Navbar expand="lg" className="px-0">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            {token ? (
              <div className="px-lg-4 d-flex justify-content-end align-items-center">
                <Button variant="white" style={{ width: "4rem" }}>
                  <Link to="/profile">
                    <img
                      src={profile.photo}
                      alt=""
                      style={{
                        verticalAlign: "middle",
                        height: "40px",
                        borderRadius: "50%",
                        marginLeft: "-5px",
                      }}
                    />
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="d-lg-flex d-flex justify-content-end">
                <Link to="/login">
                  <Button
                    id="responsive-navbar-nav"
                    className="btn-1 px-lg-4"
                    variant="primary"
                  >
                    Login
                  </Button>
                </Link>

                <Link to="/RegisterAdmin">
                  <Button
                    className="btn-1 px-lg-4"
                    variant="outline-primary"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  </div>
</div>

  );
}
export default NavbarComponentAdmin;
