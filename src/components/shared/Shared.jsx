import React from 'react';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import "./Shared.css";

const Shared = () => {
  return (
    <div className="share">
        <div className="sharedWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                <input placeholder="Whats in your mind John..." className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">
                            Photo or Video
                        </span>
                    </div>
                    
                    <div className="shareOption">
                        <LabelIcon htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">
                            Tag
                        </span>
                    </div>

                    <div className="shareOption">
                        <LocationOnIcon htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">
                            Locations
                        </span>
                    </div>

                    <div className="shareOption">
                        <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">
                           Feelings
                        </span>
                    </div>

                </div>
                <div className="shareButton">Share</div>
            </div>
        </div>
    </div>
  )
}

export default Shared;