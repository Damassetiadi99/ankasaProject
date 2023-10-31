'use client';
import React, { useEffect, useState } from "react";
import Footer from "@/component/footer/footer";
import NavbarComponent from "@/component/header/index";
import ProfileCard from "@/component/profileCard/index";
import styles from "./Profile.module.css";
import { useRouter } from "next/navigation";

const Profile = (props) => {
  const [profileData, setProfileData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    // Mengambil token dari localStorage
    const token = localStorage.getItem("token");

    if (token) {
      // Jika token ada, kirim permintaan fetch dengan token
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

  console.log(profileData)

  return (
    <div className={styles.pageProfile}>
      <NavbarComponent />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form>
          <div className={styles.content}>
            <div className={styles.profileContent}>
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
            </div>
            <div className={styles.profileFrom}>
              <p>Profile</p>
              <div className={styles.orderTitle}>
                <div className={styles.titleProfile}>Profile</div>
              </div>
              <div className={styles.profileUdpate}>
                <div className={styles.contact}>
                  <div>Contact</div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      label="Email"
                      placeholder={profileData.email}
                      className={styles.inputProfile}
                    />
                    <label htmlFor="phone">Phone Number</label>

                    <input
                      type="text"
                      name="phone"
                      label="Phone Number"
                      placeholder={profileData.phone}
                      className={styles.inputProfile}
                    />
                    <span>Account Setting</span>
                  </div>
                </div>
                <div className={styles.biodata}>
                  <div>Biodata</div>
                  <div>
                    <label htmlFor="fullname">Full name</label>

                    <input
                      type="text"
                      name="fullname"
                      label="Fullname"
                      placeholder={profileData.fullname}
                      className={styles.inputProfile}
                    />
                    <label htmlFor="city">City</label>

                    <input
                      type="text"
                      name="city"
                      label="City"
                      placeholder={profileData.city}
                      className={styles.inputProfile}
                    />
                    <label htmlFor="address">Address</label>

                    <input
                      type="text"
                      name="address"
                      placeholder={profileData.address}
                      className={styles.inputProfile}
                    />
                    <label htmlFor="poscode">Post Code</label>

                    <input
                      type="text"
                      name="poscode"
                      label="Post Code"
                      placeholder={profileData.poscode}
                      className={styles.inputProfile}
                    />
                    <button
                      title="Save"
                      className={styles.saveProfile}
                      onClick={(e) => handleData(e)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
      <Footer />
    </div>
  );
};

export default Profile;
