import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

import Link from "next/link";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";


import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button, Error } from "../Componentsindex";
import images from "../../img";



const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if(btnText == "Discover"){
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if(btnText == "Help Center"){
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else{
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotication = () => {
    if(!notification){
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if(!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSidebar = () => {
    if(!openSideMenu){
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };



  //SMART CONTRACT SECTION


  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} alt="NFT MARKET PLACE" width={100} height={100}/>
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon}/>
            </div>
          </div>
        </div>

        {/* //END OF LEFT SECTIOn */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/* DISCOVER MENU */}
            <p onClick={(e)=> openMenu(e)}>Discover</p>
            {discover &&(
              <div className={Style.navbar_container_right_discover_box}>
              <Discover />
            </div>
            )}
          </div>

          {/* HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help &&(
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications className={Style.notify} onClick={() => openNotication()}/>
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
              <Button btnText="Create" />
          </div>

          {/*USER PROFILE */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image src={images.user1} alt="Profile" width={40} height={40} onClick={() => openProfile()} 
              className={Style.navbar_container_right_profile}/>

              {profile && <Profile />} 
            </div>
          </div>

          {/* MENU BUTTON */}
          <div className={Style.container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon} onClick={() => openSidebar()}/>
          </div>
        </div>
      </div>

      {/* SIDEBAR COMPONENT */}
      {openSideMenu && (
        <div className={Style.SideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu}  />
        </div>
      )}

     
    </div>
  );
};

export default NavBar; 