import React from 'react';
import './Videoitem';

const VideoItem = ({ video }) => {
     return (
        <div className="item">
        <img src={video.snippet.thumbnails.medium.url} alt="" />
        <div className="content">
            <div className="header">
            {video.snippet.title}
            </div>
        </div>
        </div>
     );
};

export default VideoItem;