'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ForgotPaswword() {
  return (
    <div className="container-fluid" >
      <div className="row" style={{ height: '100vh' }}>
        <div className="col-md-6 bg-primary d-flex align-items-center justify-content-center" >
          {/* Gambar atau konten di sisi kiri */}
          <img src="/gambar-login.png" alt="Gambar Login" className='col-md-6'/>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center">
          {/* Form login di sisi kanan */}
          <div className="pt-5 pb-5 mb-5 mb-5 col-md-5 ml-auto">
            <img src="/icon auth.png" alt="Gambar Login" />
          </div>
            <h2 className="col-md-5 ml-auto mb-5 fw-bold">Forgot Paswword</h2>
            <form>
              {/* Form Login */}
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control-plaintext border-bottom"
                  placeholder="Email"
                />
              </div>
              <button
                type="submit"
                className="col-md-12 btn btn-primary btn-block shadow"
              >
                Send
              </button>
            </form>
          <p className="mt-4 mb-4">you'll get message soon on your email</p>
        </div>
      </div>
    </div>
  );
}
