"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Barcode from "react-barcode";

const PaymentBookingPass = () => {
  const router = useRouter();
  const params = useParams();
  const code = params.code;
  // const code = '86dd6dd5b9f04abb976202fe366d6c32';
  console.log(code);
  // const [flightData, setFlightData] = useState(null);
  const [Flight, setFlight] = useState(null);
  // ========================================= Call API ================================================
  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("Token not found.");
          return;
        }

        const response = await fetch(
          `https://easy-lime-seal-toga.cyclic.app/booking/tickets/${code}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          console.error("Error fetching booking data:", response.statusText);
          return;
        }

        const data = await response.json();
        console.log("Booking data:", data);
        setFlight(data?.data?.result);
      } catch (error) {
        const data = await response.json();
        console.log(data);
      }
    };

    fetchBookingData();
  }, []);

  //========================================= End API =================================================

  //===================================================== Get Time  =====================================

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  //===================================================== End Time -=======================================================

  return (
    <div>
    <div className="container mt-3 bg-light" style={{ height: '550px', width: '800px' }}>
      <h1 className="fw-bold mx-4 py-3">
        Booking Pass
      </h1>
      <div className="row bg-light">
        <div className="col-md-7 border rounded bg-white  mt-5">
          <div className=" d-flex ">
            <image className="img-fluid " src={Flight?.ticket.airline.photo} alt="Photo Airline" style={{ maxwidth: '40px', height: '60px', objectFit: 'cover', marginLeft: '30px' }} />
            <h5 className="fw-bold mt-4" style={{ marginLeft: '30px' }}>
              {Flight?.ticket.from.code}
            </h5>
            <image className="img-fluid mt-4" src="/Vector.svg" alt=" Vector" style={{ marginLeft: '20px' }} />
            <h5 className="fw-bold mt-4" style={{ marginLeft: '30px' }}>
              {Flight?.ticket.to.code}
            </h5>
          </div>
          <div className="mt-4 row align-items-center">
            <div className="col-md-6 d-flex " style={{ marginLeft: '30px' }}>
              <div className="d-flex flex-column">
                <label className="fw-bold">Code</label>
                <small className="">A5-23</small>
              </div>

              <div className="col-md-6 d-flex flex-column text-end">
                <label className="fw-bold">Class</label>
                <small>Ekonomi</small>
              </div>
            </div>

            {/*  ============================ Second Sension   ============================*/}

            <div className="col-md-6 d-flex mt-4 " style={{ marginLeft: '30px' }}>
              <div className="d-flex flex-column">
                <label className="fw-bold">Code</label>
                <small className="">A5-23</small>
              </div>

              <div className="col-md-6 d-flex flex-column text-end">
                <label className="fw-bold">Class</label>
                <small>Ekonomi</small>
              </div>
            </div>
            {/* ============================ End Second Sension ============================= */}

            {/*  ============================ Data Booking Ticket  ============================*/}

            <div className="col-md-6 d-flex mt-4 flex-column" style={{ marginLeft: '30px' }}>
              <label className="fw-bold">Departure</label>
              <small className="">{formatDate(Flight?.passenger.createdAt)}</small>
            </div>

            {/* =========================== End Data Booking Ticket */}
          </div>
        </div>
        {/* =============================== Barcode ================================= */}
        <div className="col-md-5 border rounded mt-5" style={{ display: 'flex', justifyContent: 'flex-end', transform : 'rotate(90deg)' }}>
          <Barcode value={Flight?.code} width={1} height={80}/>
        </div>
        {/* ============================== End Barcode  ================================ */}
      </div>
    </div>
  </div>
);
};

export default PaymentBookingPass;
