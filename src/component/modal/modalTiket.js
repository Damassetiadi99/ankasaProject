// import React, { useState } from "react";
// // import Button from 'react-bootstrap/Button';
// import Container from "react-bootstrap/Container";
// import Modal from "react-bootstrap/Modal";
// import gr from "../../../Assets/img/gr.png";
// import gr3 from "../../../Assets/img/gr3.png";
// import gr6 from "../../../Assets/img/gr6.png";
// import gr8 from "../../../Assets/img/gr8.png";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Link } from "react-router-dom";

// function MydModalWithGrid(props) {
//   const [startDate, setStartDate] = useState(new Date());

//   return (
//     <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
//       <Modal.Body className="show-grid">
//         <Container>
//           <h6>Hey,</h6>
//           <h5>Where you want to go?</h5>
//           <h6 className="text-primary">Recently Searched</h6>
//           <div className="card shadow p-2 mb-3 bg-body rounded">
//             <div className="card-body">
//               <div className="d-flex justify-content-between">
//                 <div>
//                   <p>From</p>
//                   <h3>Medan</h3>
//                   <p>Indonesia</p>
//                 </div>
//                 <div className="p-4">
//                   <button className="btn btn-white">
//                     <img src={gr6} alt="" />
//                   </button>
//                 </div>
//                 <div className="text-end">
//                   <p>To</p>
//                   <h5>Tokyo</h5>
//                   <p>Jepang</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <dv className="d-flex justify-content-between">
//             <button type="button" className="col-5 btn btn-primary">
//               <img src={gr3} alt="" />
//             </button>
//             <button
//               style={{ backgroundColor: "#F0F0F0", marginLeft: "" }}
//               type="button"
//               className="col-6  btn"
//             >
//               <img src={gr} alt="" />
//             </button>
//           </dv>
//           <p className="mt-2" style={{ color: "#6B6B6B" }}>
//             Departure
//           </p>
//           <div className="col-12 ">
//             <DatePicker
//               selected={startDate}
//               onChange={(date) => setStartDate(date)}
//               className="form-select"
//             />
//           </div>
//           <p className="mt-2" style={{ color: "#6B6B6B" }}>
//             How many person
//           </p>
//           <div className="d-flex">
//             <select className="form-select" aria-label="Default select example">
//               <option selected>Child</option>
//               <option value="1">1 Child</option>
//               <option value="2">2 Child</option>
//               <option value="3">3 Child</option>
//             </select>
//             <select className="form-select" aria-label="Default select example">
//               <option selected>Adult</option>
//               <option value="1">
//                 <h6>1 Adult</h6>
//               </option>
//               <option value="2">2 Adult</option>
//               <option value="3">3 Adult</option>
//             </select>
//           </div>
//           <p className="mt-2" style={{ color: "#6B6B6B" }}>
//             Which class do you want?
//           </p>
//           <div className="d-flex justify-content-between mb-3">
//             <div className="form-check form-check-inline ">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="inlineRadioOptions"
//                 id="inlineRadio1"
//                 value="option1"
//               />
//               <label className="form-check-label" for="inlineRadio1">
//                 Economi
//               </label>
//             </div>
//             <div className="form-check form-check-inline">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="inlineRadioOptions"
//                 id="inlineRadio2"
//                 value="option2"
//               />
//               <label className="form-check-label" for="inlineRadio2">
//                 Business
//               </label>
//             </div>
//             <div className="form-check form-check-inline">
//               <input
//                 className="form-check-input"
//                 type="radio"
//                 name="inlineRadioOptions"
//                 id="inlineRadio2"
//                 value="option2"
//               />
//               <label className="form-check-label" for="inlineRadio2">
//                 First Class
//               </label>
//             </div>
//           </div>

//           <button
//             to="/searchbooking"
//             type="button"
//             className="col-12 btn btn-primary"
//           >
//             <Link
//               to="/searchbooking"
//               className="d-flex justify-content-between p-2"
//             >
//               <b style={{ color: "white" }}>SEARCH FLIGHT</b>

//               <img className="text-white text-end" src={gr8} alt="" />
//             </Link>
//           </button>
//         </Container>
//       </Modal.Body>
//       {/* <Modal.Footer>
//                 <Button onClick={props.onHide}>Close</Button>
//             </Modal.Footer> */}
//     </Modal>
//   );
// }

// function ModalA() {
//   const [modalShow, setModalShow] = useState(false);
//   return (
//     <>
//       <a variant="primary" onClick={() => setModalShow(true)}>
//         <b>Find Ticket</b>
//       </a>
//       <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
//     </>
//   );
// }

// export default ModalA;
