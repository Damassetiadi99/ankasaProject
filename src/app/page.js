import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "@/component/Carousel";
import Footer from "@/component/footer/footer";
import NavbarComponent from "@/component/header/index";


export default function Landing() {
  return (
    <div className="p-5">
  <NavbarComponent />
  <div className="row mt-5 d-flex justify-content-between">
    <div className="col-lg-6 col-md-12">
      <div className="p-5">
        <h1>
          Find your{" "}
          <a style={{ textDecoration: "none" }} className="text-primary">
            Flight
          </a>
        </h1>
        <p>and explore the world with us</p>
      </div>
      <image src='/img/k8.png' alt="" className="img-fluid" />
    </div>
    <div className="col-lg-6 col-md-12 d-flex flex-column">
      <div className="d-flex justify-content-end">
        <image src='/img/k7.png' alt="" className="img-fluid" />
      </div>
      <div className="d-flex justify-content-end">
        <image src='/img/i3.png' alt="" className="p-lg-5 p-3 img-fluid" />
      </div>
    </div>
  </div>
  {/* popular destination */}
  <div className="container">
    <h5 className="text-primary mt-5">TRENDING</h5>
    <div className="d-flex justify-content-between mb-5">
      <h3>Trending destinations</h3>
      <h5 className="text-primary">View All</h5>
    </div>
    <div className="row mb-5 justify-content-between">
      <div className="col-lg-2 col-md-4 col-6 mb-5">
        <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
          <image
            src='/img/k5.png'
            className="card-img-top img-fluid"
            alt=""
          />
          <div className="card-body">
            <h5>Tokyo,</h5>
            <div className="d-flex justify-content-between">
              <h3>Japan</h3>
              <button className="btn rounded-pill">
                <image src='/img/i1.png' alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-5">
        <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
          <image
            src='/img/k9.png'
            className="img-fluid card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5>Tokyo,</h5>
            <div className="d-flex justify-content-between">
              <h3>Japan</h3>
              <button className="btn rounded-pill">
                <image src='/img/i1.png' alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-5">
        <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
          <image
            src='/img/k2.png'
            className="img-fluid card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5>Tokyo,</h5>
            <div className="d-flex justify-content-between">
              <h3>Japan</h3>
              <button className="btn rounded-pill">
                <image src='/img/i1.png' alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-5">
        <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
          <image
            src='/img/k9.png'
            className="img-fluid card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5>Tokyo,</h5>
            <div className="d-flex justify-content-between">
              <h3>Japan</h3>
              <button className="btn rounded-pill">
                <image src='/img/i1.png' alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-5">
        <div className="card p-3 shadow p-2 mb-3 bg-body rounded">
          <image
            src='/img/k3.png'
            className="img-fluid card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5>Tokyo,</h5>
            <div className="d-flex justify-content-between">
              <h3>Japan</h3>
              <button className="btn rounded-pill">
                <image src='/img/i1.png' alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-primary" style={{ borderRadius: "7%" }}>
      <div className="container px-5 py-4 text-center text-white">
        <p>TOP 10</p>
        <h3>Top 10 destinations</h3>
        <div className="row d-flex justify-content-between  p-3">
          <Carousel />
        </div>
        {/* <div className='d-flex justify-content-center mt-lg-3'>
          <button className='btn border-white mx-2'><img className='img-fluid'src={i2} alt='' /></button>
          <button className='btn bg-white mx-2'><img className='img-fluid'src={i1} alt=''/></button>
        </div> */}
      </div>
    </div>
  </div>
  <Footer />
</div>

  );
}
