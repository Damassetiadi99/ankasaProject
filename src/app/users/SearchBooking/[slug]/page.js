"use client";
import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Accordion, Button } from "react-bootstrap";
import Footer from "@/component/footer/footer";
import NavbarComponent from "@/component/header/index";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import axios from "axios";
import "./index.module.css";


function DetailFlightPage(props) {
  const router = useRouter();
  const [data, setData] = useState();
 
  const [dataDetailFlight, setDataDetailFlight] = useState({});
  const [profile, setProfile] = useState({});
  const [flightData, setFlightData] = useState({});
  let code = props.params;
  console.log(code.slug);
  console.log(1);
  const [dataUser, setDataUser] = useState("");
  const [getTitle, setGetTitle] = useState("");
  const [getCountry, setGetCountry] = useState("");

  const handleChange = (e) => {
    const newdata = { ...dataDetailFlight };
    newdata[e.target.name] = e.target.value;
    setDataDetailFlight(newdata);
  };

  let url = `https://easy-lime-seal-toga.cyclic.app/airlines/flight/${code.slug}`;
  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        console.log("get data success");
        console.log(res.data.data);
        res.data.data && setData(res.data.data);
        setSelected(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData(url);
  }, []);

  const handleSubmit = async () => {
    try {
      const data = {
        title1: getTitle,
        fullname1: dataUser,
        nationality1: getCountry,
      };
      console.log(data);
      const result = await axios.post(
        `https://easy-lime-seal-toga.cyclic.app/booking/tickets/${code.slug}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      Swal.fire({
        title: "Success!",
        text: `${result.data.message}`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(result.data)
      router.push(`/users/mybooking/payment/${result.data.data.code}`);
      
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Oops!",
      });
    }
  };

  return (
    <div className="body ">
      <NavbarComponent />
      <div
        className="container-fluid mb-5 p-5 "
        style={{
          backgroundColor: " #2395FF",
          height: "9rem",
          borderBottomRightRadius: "2rem",
          borderBottomLeftRadius: "2rem",
          marginBottom: "5rem",
        }}
      >
        <div className="text" style={{ height: "1rem" }}>
          <img
            src="/img/fly.png"
            alt=""
            height={100}
            style={{ opacity: "2px", background: "#41A4FF" }}
          />
        </div>
        <Row>
          <Col>
            <h4
              className="text-light text-start"
              style={{ fontWeight: "bold", marginLeft: "4rem" }}
            >
              Contact Person Details
            </h4>
          </Col>
          <Col>
            <h4
              className="text-light text-end"
              style={{ fontWeight: "bold", marginRight: "-2rem" }}
            >
              Flight Details
            </h4>
          </Col>
          <Col>
            <h6
              className="text-light text-end"
              style={{ fontWeight: "bold", marginRight: "3rem" }}
            >
              View Details
            </h6>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className=" m-3 d-flex gap-3">
              <div
                className="card"
                style={{
                  marginLeft: "1rem",
                  height: "23rem",
                  width: "50rem",
                  borderRadius: "10px",
                }}
              >
                <Form style={{ paddingTop: "2rem" }}>
                  <h5
                    className="text-secondary text-start"
                    style={{ marginLeft: "2rem" }}
                  >
                    Full Name
                  </h5>
                  <input
                    type="text"
                    className="form-control"
                    name="fullname"
                    id="fullname"
                    placeholder="Your Full Name"
                    onChange={(e) => handleChange(e)}
                    value={profile.fullname}
                    autoFocus
                    style={{ marginLeft: "2rem", width: "38rem" }}
                  />
                  <h5
                    className="text-secondary text-start mt-4"
                    style={{ marginLeft: "2rem" }}
                  >
                    Email
                  </h5>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={(e) => handleChange(e)}
                    value={profile.email}
                    autoFocus
                    style={{ marginLeft: "2rem", width: "38rem" }}
                  />
                  <h5
                    className="text-secondary text-start mt-4"
                    style={{ marginLeft: "2rem" }}
                  >
                    Phone Number
                  </h5>
                  <input
                    country=""
                    type="teks"
                    className="form-control"
                    name="number"
                    id="number"
                    placeholder="Your Phone Number"
                    onChange={(e) => handleChange(e)}
                    value={profile.phone}
                    autoFocus
                    style={{ marginLeft: "2rem", width: "38rem" }}
                  />
                </Form>
                <div
                  className="info mt-4"
                  style={{
                    backgroundColor: "#f0cec3",
                    width: "32rem",
                    marginLeft: "5rem",
                    height: "2rem",
                    paddingRight: "20rem",
                    borderRadius: "5px",
                  }}
                >
                  <img src="/img/atten.png" alt="" />
                </div>
              </div>
              <div
                className="card"
                style={{
                  height: "25rem",
                  width: "40rem",
                  borderRadius: "10px",
                }}
              >
                <Row>
                  <Col>
                    <div className=" mt-4 mb-1 mx-5">
                      <img src={data?.photo} alt="" width={120} />
                    </div>
                  </Col>
                  <Col>
                    <div
                      style={{
                        paddingTop: "2rem",
                        paddingRight: "3rem",
                        fontWeight: "bold",
                      }}
                    >
                      <h4
                        className="airlines text-center "
                        onChange={(e) => handleChange(e)}
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {data?.name}
                      </h4>
                    </div>
                  </Col>
                </Row>
                <Row className="fly " md={4}>
                  <Col xs={6} md={3}>
                    <div
                      className="fly"
                      style={{
                        width: "16rem",
                        marginLeft: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      <h4
                        className="flight"
                        onChange={(e) => handleChange(e)}
                        style={{ marginLeft: "1rem" }}
                      >
                        {data?.to.country} ({data?.to.code})
                      </h4>
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div className="fly" style={{ marginLeft: "6rem" }}>
                      <img src="/img/plan.png" alt="" height={20} />
                    </div>
                  </Col>
                  <Col xs={6} md={4}>
                    <div
                      className="fly col-12"
                      onChange={(e) => handleChange(e)}
                      style={{ width: "16rem", marginLeft: "1rem" }}
                    >
                      <h4 className="flight">
                        {data?.from.country} ({data?.from.code})
                      </h4>
                    </div>
                  </Col>
                </Row>

                <Row
                  className="mt-3"
                  xs={2}
                  md={4}
                  lg={6}
                  style={{ width: "80rem", marginLeft: "2rem" }}
                >
                  <Col>
                    <div style={{ width: "12rem" }}>
                      <p onChange={(e) => handleChange(e)}>
                        {/* {data?.departure_full} */}
                        {data?.landing}
                      </p>
                    </div>
                  </Col>
                  -
                  <Col>
                    <div style={{ marginLeft: "2rem" }}>
                      <p onChange={(e) => handleChange(e)}>{data?.takeoff}</p>
                    </div>
                  </Col>
                </Row>
                <div>
                  <Container>
                    <Form>
                      {["checkbox"].map((type) => (
                        <div
                          key={`inline-${type}`}
                          className="tick mb-3 text-primary text-start"
                          style={{ marginLeft: "1rem" }}
                        >
                          <Form.Check
                            label="Refundable"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                      ))}
                    </Form>
                  </Container>
                </div>
                <div>
                  <Container>
                    <Form>
                      {["checkbox"].map((type) => (
                        <div
                          key={`inline-${type}`}
                          className="tick mb-3 text-primary text-start"
                          style={{ marginLeft: "1rem" }}
                        >
                          <Form.Check
                            label="Can reschedule"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </div>
                      ))}
                      <hr />
                    </Form>
                  </Container>
                </div>
                <div>
                  <Container>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <h4>Total Payment</h4>

                      <h4 className="payment text-primary">
                        $ {data?.price},00
                      </h4>
                    </div>
                  </Container>
                </div>
              </div>
            </div>
            <h4
              className="title mt-5 text-start"
              style={{ fontWeight: "bold", marginLeft: "4rem" }}
            >
              Passenger Details
            </h4>
            <div className=" m-4">
              <div
                className="card"
                style={{
                  marginLeft: "1rem",
                  height: "25rem",
                  width: "50rem",
                  borderRadius: "10px",
                }}
              >
                <Form style={{ paddingTop: "2rem" }}>
                  <div
                    className="bg mb-3"
                    style={{
                      marginLeft: "2rem",
                      width: "46rem",
                      height: "2rem",
                      borderRadius: "8px",
                    }}
                  >
                    <Container>
                      <Row
                        style={{
                          backgroundColor: " #abcfe1",
                          paddingTop: "5px",
                          borderRadius: "8px",
                        }}
                      >
                        <Col>
                          <div className="all col-12">
                            <h6>Passenger : 1 Adult</h6>
                          </div>
                        </Col>
                        <Col>
                          <div
                            className="all col-12"
                            style={{ marginLeft: "14rem" }}
                          >
                            <h6>Same as contact person</h6>
                          </div>
                        </Col>
                        <Col>
                          <Form.Check
                            className="col-1"
                            type="switch"
                            id="custom-switch"
                            style={{ marginLeft: "12rem" }}
                          />
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <h5
                    className="text-secondary text-start"
                    style={{ marginLeft: "2rem" }}
                  >
                    Title
                  </h5>
                  <Form.Select
                    aria-label="title"
                    name="title1"
                    placeholder="Your Title"
                    id="title1"
                    value={dataDetailFlight.title1}
                    onChange={(e) => setGetTitle(e.target.value)}
                    autoFocus
                    style={{
                      marginLeft: "2rem",
                      width: "47rem",
                      height: "45px",
                    }}
                  >
                    <option>Open Title</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                  </Form.Select>
                  <h5
                    className="text-secondary text-start mt-3"
                    style={{ marginLeft: "2rem" }}
                  >
                    Full Name
                  </h5>
                  <input
                    name="fullname1"
                    className="form-control"
                    placeholder=""
                    value={dataDetailFlight.fullname1}
                    onChange={(e) => setDataUser(e.target.value)}
                    autoFocus
                    style={{ marginLeft: "2rem", width: "47rem" }}
                  />
                  <h5
                    className="text-secondary text-start mt-3"
                    style={{ marginLeft: "2rem" }}
                  >
                    Country
                  </h5>
                  <Form.Select
                    name="country"
                    onChange={(e) => setGetCountry(e.target.value)}
                    value={dataDetailFlight.country}
                    autoFocus
                    style={{
                      marginLeft: "2rem",
                      width: "47rem",
                      height: "45px",
                      marginBottom: "5rem",
                    }}
                  >
                    <option>Open Country</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Japan">Japan</option>
                    <option value="Argentina">Argentina</option>
                    <option value="France">France</option>
                    <option value="Spain">Spain</option>
                    <option value="Australia">Australia</option>
                  </Form.Select>
                </Form>
              </div>
              <h4
                className="title mt-5 text-start"
                style={{ fontWeight: "bold", marginLeft: "2rem" }}
              >
                Passenger Details
              </h4>
              <div className=" m-2 mt-4">
                <div
                  className="card"
                  style={{
                    height: "12rem",
                    width: "50rem",
                    borderRadius: "10px",
                  }}
                >
                  <Row>
                    <Col>
                      <Form style={{ paddingTop: "1rem" }}>
                        {["checkbox"].map((type) => (
                          <div
                            key={`inline-${type}`}
                            className="tick mb-4 text-primary text-start"
                            style={{
                              borderBottom: "dark",
                              width: "20rem",
                              margin: "1rem",
                            }}
                          >
                            <Form.Check
                              label="Travel Insurance"
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                            />
                          </div>
                        ))}
                      </Form>
                    </Col>
                    <Col>
                      <h5
                        className="main text-end text-primary"
                        style={{ margin: "2rem" }}
                      >
                        $ 2,00/pax
                      </h5>
                    </Col>
                    <hr style={{ width: "50rem", marginLeft: "10px" }} />
                    <div>
                      <h6
                        className="txt text-start"
                        style={{ marginLeft: "1rem" }}
                      >
                        Get travel compensation up to $ 10.000,00
                      </h6>
                    </div>
                  </Row>
                </div>
                <div className="d-flex justify-content-center col-8">
                  <Button
                    className="btn mt-4 mb-3"
                    variant="primary"
                    size="lg"
                    onClick={handleSubmit}
                    // style={{ marginRight: "3em", width: "15em" }}
                  >
                    Proceed to Payment
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <div className="row bg-danger m-3"></div>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    </div>
  );
}
export default DetailFlightPage;
