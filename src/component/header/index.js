'use client'
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
// import Image from "../../../Assets/img";
import Link from "next/link";
// import MyModalTicket from "@/component/modal/modalChat";
import MyVerticallyCenteredModal from "@/component/modal/modalNotif";
import { useEffect, useState } from "react";
// import MydModalWithGrid from "@/component/modal/modalTiket";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { detailProfile } from "../../../Config/redux/actions/profile";

function NavbarComponent() {
  
  // { search, submitSearch, id }
  // const token = localStorage.getItem("Ankasa");
  const [token, setToken] = useState()
  useEffect(() => {
    const storedToken = localStorage.getItem("token")
    setToken(storedToken)
  }, [])
  // const { profile } = useSelector((state) => state.profile);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const localdata = localStorage.getItem("Ankasa");
  //   const { token } = JSON.parse(localdata);
  //   dispatch(detailProfile(token));
  // }, []);

  return (
    <div className=" bg-white">
      <div className="row d-flex justify-content-between">
        <div className="col-lg-2 px-3 d-flex align-content-center flex-wrap justify-content-start">
          <img
            src='/img/fly.png'
            alt="logo"
            style={{ width: "30px", marginRight: "10px" }}
          />
          <Link
            href="/"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            <h5>Ankasa</h5>
          </Link>
        </div>
        <div className="col-lg-4 d-flex align-content-center flex-wrap">
          {/* <Form.Control
            className=""
            type="search"
            placeholder="Where you want to go?"
            aria-label="Search"
            onChange={search}
            onSubmit={submitSearch}
          />
           */}
          <form >
          {/* onSubmit={submitSearch} */}
            <div className="field has-addons d-flex input-group">
              <div className="control is-expanded px-3 input-group-text">
                <button
                  type="submit"
                  className="button is-info form-control-plaintext"
                  style={{ borderRadius: "10px" }}
                >
                  <img
                    src="https://www.citypng.com/public/uploads/preview/download-blue-search-icon-button-png-11640084027s0fkuhz2lb.png"
                    alt="asas"
                    style={{
                      backgroundColor: "white",
                      width: "20px",
                    }}
                  />
                </button>
                <input
                  type="search"
                  className=""
                  // id={id}
                  // onChange={search}
                  placeholder="Where you want to go?"
                  aria-label="Search"
                  name="search"
                  required
                  style={{ borderStyle: "none"}}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 d-flex justify-content-end px-5">
          <Navbar expand="lg" className="">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <button className="btn">
                {/* <MydModalWithGrid /> */}
              </button>
              <Link
                href="/users/mybooking"
                style={{ textDecoration: "none", color: "black" }}
                className="px-lg-5 mt-lg-1"
              >
                <h6> My Booking</h6>
              </Link>
              {token ? (
                <div className=" px-lg-4 d-flex justify-content-end">
                  {/* <MyModalTicket /> */}
                  <MyVerticallyCenteredModal />
                  <Button variant="white" style={{ width: "4rem" }}>
                    <Link href="/Profile">
                      <img
                        src="https://res.cloudinary.com/dafjb9vn7/image/upload/v1693639658/profile_cmqdrx.png"
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
                  <Link href="/auth/login">
                    <Button
                      id="responsive-navbar-nav"
                      className="btn-1 px-lg-4"
                      variant="primary"
                    >
                      Login
                    </Button>
                  </Link>

                  <Link href="/auth/register">
                    <Button
                      className="btn-1  px-lg-4"
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
  );
}
export default NavbarComponent;
