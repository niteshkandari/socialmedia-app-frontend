import React from 'react'
import Shared from "../shared/Shared";
import Post from "../post/Post";
import { Posts } from "../../dummydata";  
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
      <Shared/> 
      {Posts.map((post) => {
        return <Post key={post.id} postData={post}/>
      })}
      </div>
    </div>
  )
}

export default Feed;