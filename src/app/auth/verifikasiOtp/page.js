import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../images/logoAngkasa.png'
import gambar from '../../../images/angkasa.png'
const MyComponent = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 d-none d-md-block">
          <Image src={logo} className='w-100 vh-100 object-fit-cover'  alt="Logo" />
        </div>
        <div className="col-md-6">
           
              <div className='d-flex justify-content-center align-items-center p-5'> 
                <Image src={gambar} alt='' sizes='20px'/>
                <p className='fw-bold m-0'> Angkasa</p>
              </div>
        <div className="d-flex flex-column justify-content-center p-5 align-items-center" style={{ backgroundColor: "white" }}>
              <form>
                <h2 className="text-primary text-center fw-bold">Verifikasi Otp </h2>
                <input type="email" name="email" placeholder="Email" className="form-control mb-3" />
                <input type="Otp" name="email" placeholder="Otp" className="form-control mb-3" />

                <button className="btn btn-primary w-100 fw-bold my-2" type="submit" style={{ backgroundColor: "#2395FF",boxShadow: "0px 4px 8px #2395FF" }}>
                 Verif
                </button>
                <div>
                  <p>You’ll get message soon on your email</p>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
