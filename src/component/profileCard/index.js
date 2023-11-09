'use client'
import React from "react";
// import Button from "../../base/button";
import { useRouter } from "next/navigation";
import Styles from "./profile.module.css";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import Input from "@/component/input/index";
import Imag from "../../../public/img/index";

const ProfileCard = ({
  name,
  city,
  address,
  profImg,
  noCard,
  typeCard,
  saldoCard,
  onChange,
}) => {
  // const navigate = useNavigate();
  const router = useRouter()
  
  // const handleLogout = () => {
  //   if (localStorage.getItem("access_token")) {
  //     setTimeout(() => {
  //       router.push("/");
  //     }, 2000);
  //     return localStorage.clear();
  //   }
  // };
  return (
    <div className={Styles.profileCard}>
      <div className={Styles.wraperProfile}>
        <img src={profImg ? profImg : "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"} alt="" />
      </div>
      <div>
        <Input
          label="Select photo"
          name="files"
          id="files"
          className="inputFoto"
          classNameLabel="labelFoto"
          type="file"
          onChange={onChange}
        />
      </div>
      <div className={Styles.name}>{name ? name : ""}</div>
      <div className={Styles.address}>
        {city ? city : "Karawang"}, {address ? address : "Jawa Barat"}
      </div>
      <div className={Styles.titleCard}>
        <div>Cards</div>
        <div>+ Add</div>
      </div>
      <div className={Styles.contentCard}>
        <div>{noCard ? noCard : ""}</div>
        <div className={Styles.cardType}>
          <div>{typeCard ? typeCard : ""} Card</div>
          <div>$ {saldoCard ? saldoCard : ""}</div>
        </div>
      </div>
      <div className={Styles.menu}>
        {/* profile */}
        <Link href="/users/profile">
          <div className="d-flex justify-content-between">
            <button className="btn">
              <Image src={Imag.u9} alt="" />
            </button>
            <button className="btn">
              <Image src={Imag.b1} alt="" />
            </button>
          </div>
        </Link>
        {/* my reviuw */}
        <div className="d-flex justify-content-between">
          <button className="btn">
            <Image src={Imag.u7} alt="" />
          </button>
          <button className="btn">
            <Image src={Imag.b3} alt="" />
          </button>
        </div>
        {/* setting */}
        <div className="d-flex justify-content-between">
          <button className="btn">
            <Image src={Imag.u8} alt="" />
          </button>
          <button className="btn">
            <Image src={Imag.b3} alt="" />
          </button>
        </div>
        {/* logout */}
        <div className="d-flex justify-content-between" onClick={() => { localStorage.clear(); router.push('/'); }}>
          <button className="btn">
            <Image src={Imag.u6} alt="" />
          </button>
          <button className="btn">
            <Image src={Imag.b2} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
