"use client";
import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import "./style.css";

function CardBookingTiketStatus() {
  const [Flight, setFlight] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("Token not found.");
          setIsLoading(false);
          return;
        }

        const response = await fetch(
          `https://easy-lime-seal-toga.cyclic.app/booking/tickets`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          console.error("Error fetching booking data:", response.statusText);
          setIsLoading(false);
          return;
        }

        const data = await response.json();
        console.log("Booking data:", data);
        setFlight(data?.data?.result);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching booking data:", error);
        setIsLoading(false);
      }
    };

    fetchBookingData();
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="col-md-8">
  <div className="card">
    <h5 className="text-primary fw-bold p-3">MY BOOKING</h5>
    <div className="d-flex justify-content-between px-3">
      <h3 className="fw-bolder">My Booking</h3>
      <p className="fw-bold text-primary">Order History</p>
    </div>
  </div>
  <div className="pt-5">
    {Flight.map((booking, index) => (
      <div className="card d-flex flex-column flex-md-row" key={index}>
        <div className="card-header">
          <h6 className="date fs-6 p-3">
            {formatDate(booking.passenger.updatedAt)}
          </h6>
          <div className="d-flex gap-4 px-3">
            <h3 className="fw-bolder">({booking.ticket.from?.code})</h3>
            <img src="/img/plan.png" alt="" height={20} />
            <h3 className="fw-bolder">({booking.ticket.to?.code})</h3>
          </div>
          <p className="px-3" style={{ color: "#979797" }}>
            {booking.ticket.airline.name}
          </p>
        </div>
        <div className="card-text d-flex justify-content-between flex-column flex-md-row">
          <div className="d-flex gap-2 col-12 col-md-5">
            <h6 className="p-4">Status</h6>
            <button
              className="btn btn-success my-2"
              style={{
                borderRadius: "5px",
                backgroundColor:
                  booking.status.name === "Pending" ? "#FF7F23" : "green",
              }}
            >
              {booking.status.name}
            </button>
          </div>
          <div className="d-flex align-items-center mx-4">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>View Details</Accordion.Header>
                <Accordion.Body>
                  <p>View Details</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default CardBookingTiketStatus;
