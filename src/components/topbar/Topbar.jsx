import React from "react";
import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Socaialiser</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className={'searchIcon'}/>
          <input
            placeholder="Search for friend, post or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconsItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconsItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconsItem">
            <CircleNotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
