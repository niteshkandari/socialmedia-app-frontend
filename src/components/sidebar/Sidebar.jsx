import React from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CloseFriend from "../closefriend/CloseFriend";
import { Users } from "../../dummydata";  
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="siberbarListItem">
            <RssFeedIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">
            feed
            </span>
          </li>

          <li className="siberbarListItem">
            <ChatIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">
            Chat
            </span>
          </li>

          <li className="siberbarListItem">
            <VideoLibraryIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">
            videos
            </span>
          </li>

          <li className="siberbarListItem">
            <GroupsIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">
            groups
            </span>
          </li>

          <li className="siberbarListItem">
            <BookmarksIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">
            Bookmark
            </span>
          </li>

          <li className="siberbarListItem">
            <HelpOutlineIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">
            Question
            </span>
          </li>

          <li className="siberbarListItem">
            <WorkIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">
            Jobs
            </span>
          </li>
          
          <li className="siberbarListItem">
            <EventIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">
            Events
            </span>
          </li>

          <li className="siberbarListItem">
            <LibraryBooksIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">
            Courses
            </span>
          </li>

        </ul>
        <button className="sidebarButton">
          Show More
        </button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
           {Users.map(u => <CloseFriend key={u.id} user={u}/>)}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar