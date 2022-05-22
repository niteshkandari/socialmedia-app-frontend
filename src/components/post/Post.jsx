import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummydata";  
import "./Post.css";

const Post = ({postData}) => {
  const [like,setLike] = useState(postData.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
      setLike(isLiked ? like-1 : like+1);
      setIsLiked(prev => !prev);
  }
    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u => u.id === postData.userId)[0].profilePicture}
                    alt="" className="postProfileImg" />
                    <span className="postUsername">
                        {Users.filter(u => u.id === postData.userId)[0].username}
                    </span>
                    <span className="postDate">{postData.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{postData.desc}</span>
                <img src={postData.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.png" alt="" onClick={likeHandler} />
                    <img className="likeIcon" src="assets/heart.png" alt="" onClick={likeHandler} />
                    <span className="postLikeCounter">{like} people liked it</span> 
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{postData.comments}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post;