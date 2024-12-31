import React, { useEffect, useState } from 'react'
import "./PlayVideo.css"

import mp4 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import profile from "../../assets/user_profile.jpg"
import { API_KEY } from '../../data'
import { converter } from '../../data'
import moment from "moment"


const PlayVideo = ({videoId}) => {


  const [apiData, setApiData] = useState(null);
  const [channelId, setChannelId] = useState(null);
  const [comment, setComment] = useState([])


  const fetchVideo = async () => {
    try {
      const videoApi = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
      const res = await fetch(videoApi);
      const data = await res.json();
      setApiData(data.items[0]);
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };
  

  const fetchOther = async () => {
    try {
      const channelApi = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
      const res = await fetch(channelApi);
      const data = await res.json();
      setChannelId(data.items[0]);
    } catch (error) {
      console.error("Error fetching channel data:", error);
    }
  };

// comments

const fetchComment = async () => {
  try {
    const commentApi = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    const res = await fetch(commentApi);
    const data = await res.json();
    setComment(data.items); 
  } catch (error) {
    console.error("Error fetching comment data:", error);
  }
};
  
  useEffect(() => {
    fetchVideo();
  }, []);
 
  useEffect(() => {
    fetchOther();
  }, [apiData]);

  useEffect(() => {
    fetchComment();
  }, [videoId]);

  return (

    <div className='play-video'>

      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3 className='h3'>{apiData?apiData.snippet.title:"Title Here"}</h3>

      <div className="info">
        <p>{apiData?converter(apiData.statistics.viewCount):"16K"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
           
        </div>
      </div>
      <hr />
      <div className="author">
        <img src={channelId?channelId.snippet.thumbnails.default.url:""} alt="" />
        <div>
            <p>{apiData?apiData.snippet.channelTitle:""}</p>
            <span>{channelId?converter(channelId.statistics.subscriberCount):"1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
        <section>
        <span><img src={like} alt="" />{apiData?converter(apiData.statistics.likeCount):160}</span>
            <span><img src={dislike} alt="" /></span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
        </section>
      </div>

      <div className="description">
        <hr />
        <h4>{apiData?converter(apiData.statistics.commentCount):102} Comments</h4>




  <div>
    {comment.map((item, idx) => (
      
      <div key={idx} className="comment">
        <img src={profile} alt="" />
        <div>
          <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span> &bull; {moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
          <p>{item.snippet.topLevelComment.snippet.textDisplay.slice(0,250)}</p>
          <div className="comment-action">
            <img src={like} alt="like" />
            <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
            <img src={dislike} alt="dislike" />
          </div>
        </div>
      </div>
    ))}
  </div>
   
      </div>
    </div>
  )
}

export default PlayVideo
