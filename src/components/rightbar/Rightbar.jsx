import React from 'react';
import { Users } from "../../dummydata";
import Online from "../online/Online";  
import "./Rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birdthdayText">
            <b>Pola Foster</b> and 3 other friends have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => {
            return <Online key={u.id} user={u}/>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar