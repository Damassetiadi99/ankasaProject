'use client'
import React from 'react';
import NavbarComponent from '@/component/header';
import Footer from '@/component/footer/footer';
import ProfileCard from '@/component/profileCard';
import CardBookingTiketStatus from '@/component/Ticket/bookingTicket/page';
import { useState , useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function Mybooking () {
    const [profileData, setProfileData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()

useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch("https://easy-lime-seal-toga.cyclic.app//users/detail", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Request failed");
          }
          return response.json();
        })
        .then((data) => {
          setProfileData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
          setIsLoading(false);
        });
    } else {
      // Handle jika token tidak tersedia
      console.error("Token not found in localStorage");
      router.push("/landing");
      setIsLoading(false);
    }
  }, []);


    return (
        <div className='container-fluid'>
            <NavbarComponent />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className='d-flex p-3 gap-5' style={{backgroundColor: '#F5F6FA'}}>
                    <ProfileCard
                        name={profileData?.data?.name}
                        city={profileData?.data?.city}
                        address={profileData?.address}
                        profImg={profileData?.photo}
                        noCard="4441 1235 5512 5551"
                        typeCard="Z"
                        saldoCard="1,440,2"
                        // onChange={handleUploadChange}
                    />
                    <CardBookingTiketStatus />
                </div>
            )}
            <Footer />
        </div>
    )
};