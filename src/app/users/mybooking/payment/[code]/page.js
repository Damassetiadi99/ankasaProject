'use client'
import React from 'react';
import NavbarComponent from '@/component/header';
import Footer from '@/component/footer/footer';
import CardPayment from '@/component/Ticket/payment';
export default function payment () {

    return (
        <div className='container-fluid'>
            <NavbarComponent />
            <div className='d-flex justify-content-center align-items-center p-5' style={{backgroundColor: '#2395FF'}}>
                <CardPayment/>
            </div>
            <Footer/>
        </div>
    )
    
}