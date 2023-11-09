'use client'
import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid bg-light">
        <Row>
          <Col>
            <div style={{ marginLeft: "1rem" }}>
              <div className="container-fluid">
                <div className="row mt-5">
                  <div className=" container m-5 text-start">
                    <img src='/img/fly.png' alt="" />
                    <Button
                      className="text text-dark"
                      style={{
                        fontWeight: "bold",
                        width: "5rem",
                      }}
                      variant="outline-light"
                    >
                      Ankasa
                    </Button>
                    <div className="row mt-3 mb-5 ml-5" style={{ color: "#707070" }}>
                    Find your Flight and explore the world with us. We will take
                    care of the rest
                    </div>
                    <div
                  className="row mb-4"
                  style={{ color: "#707070", marginTop: "2rem" }}
                >
                    © Ankasa. All Rights Reserved.
                </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="container-fluid">
              <div className="row mt-5">
                <div className=" container m-5 text-start d-flex flex-column">
                  <Button
                    className="text text-dark"
                    style={{
                      fontWeight: "bold",
                      width: "5rem",
                    }}
                    variant="outline-light"
                  >
                    Features
                  </Button>
                  <div className="offset">
              <Button
                style={{ color: "#707070" , marginTop: "0.5rem"}}
                className="text-secondary"
                variant="outline"
              >
                Find Ticket
              </Button>
            </div>
            <div className="offset">
              <Button
                style={{ color: "#707070" }}
                className="text-secondary"
                variant="outline"
              >
                My Booking
              </Button>
            </div>
            <div className="offset">
              <Button
                style={{ color: "#707070" }}
                className="text-secondary"
                variant="outline"
              >
                Chat
              </Button>
            </div>
            <div className="offset">
              <Button
                style={{ color: "#707070" }}
                className="text-secondary"
                variant="outline"
              >
                Notification
              </Button>
            </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="container-fluid">
              <div className="row mt-5">
                <div className="container m-5 text-start">
                  <Button
                    className="text text-dark"
                    style={{ fontWeight: "bold", width: "15rem" }}
                    variant="outline-light"
                  >
                    Download Ankasa app
                  </Button>
                  <div className="container-fluid">
              <Button
                className="text-dark "
                style={{
                  fontWeight: "bold",
                  width: "13rem",
                }}
                variant="outline-light"
              >
                <img src='/img/App.png' alt="" />
              </Button>
            </div>
            <div className="container-fluid">
              <Button
                className="text-dark mt-4"
                style={{
                  fontWeight: "bold",
                  width: "13rem",
                }}
                variant="outline-light"
              >
                <img src='/img/Play.png' alt="" />
              </Button>
            </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="container-fluid">
              <div className="row mt-5">
                <div className="container m-5 ">
                  <Button
                    className="text text-dark "
                    style={{ fontWeight: "bold", width: "6rem" }}
                    variant="outline-light"
                  >
                    Folllow Us
                  </Button>
                </div>
                <div style={{ marginLeft: "3rem" }}>
                  <img src='/img/fb.png' alt="" className="sosmed" />
                  <img src='/img/twit.png' alt="" className="sosmed" />
                  <img src='/img/ig.png' alt="" className="sosmed" />
                  <img src='/img/yt.png' alt="" className="sosmed" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
