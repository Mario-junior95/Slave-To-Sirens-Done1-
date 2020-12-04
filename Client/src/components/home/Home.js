import React from "react";
import "./Home.css";
import "./home.scss";
import Nav from "../Navigations/nav";
import SideNav from "../SideNav/SideNav";
import image from "../../images/Home_bg.jpg";

function Home() {
  return (
    <div className="Home_bg">
      <div className="Navigation">
        <Nav />
      </div>
      <div className="SideNav">
        <SideNav pageWrapId={"page-wrap"} outerContainerId={"App"} />
      </div>
      <div class="c-glitch" style={{backgroundImage: `url(${image})`}}>
      <div class="c-glitch__img" style={{backgroundImage: `url(${image})`}}></div>
      <div class="c-glitch__img" style={{backgroundImage: `url(${image})`}}></div>
     <div class="c-glitch__img" style={{backgroundImage: `url(${image})`}}></div>
     <div class="c-glitch__img" style={{backgroundImage: `url(${image})`}}></div>
     <div class="c-glitch__img" style={{backgroundImage: `url(${image})`}}></div>
     </div>

 
      <div className = "copyright" id= "home_Copyright">
      <p>CopyRight Ⓒ 2020 <a target="_blank"   rel="noreferrer" href= "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=codestalers@gmail.com">Code Stellars.</a>All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Home;
