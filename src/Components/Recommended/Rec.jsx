import React, { useEffect, useState } from 'react'
import "./Rec.css"

import img1 from "../../assets/thumbnail1.png"
import img2 from "../../assets/thumbnail2.png"
import img3 from "../../assets/thumbnail3.png"
import img4 from "../../assets/thumbnail4.png"
import img5 from "../../assets/thumbnail5.png"
import img6 from "../../assets/thumbnail6.png"
import img7 from "../../assets/thumbnail7.png"
import img8 from "../../assets/thumbnail8.png"
import { API_KEY } from '../../data'
import { converter } from '../../data'
import { Link } from 'react-router-dom'

const Rec = ({categoryId}) => {

const [recData, setRecData] = useState([])


const fetchHero = async () => {

   try {
      const recApi = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=46&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
     const res = await fetch(recApi);
     const data = await res.json();
     setRecData(data.items); 
   } catch (error) {
     console.error("Error fetching comment data:", error);
   }
 };

 useEffect(() => {
   fetchHero();
   
 }, [])
 

   


  return (

    <div className='recommended'>
{recData.map((item, idx)=>{

   return(

      <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={idx} className="yt-slide">

      <img src={item.snippet.thumbnails.medium.url} alt="" />
         <div className="yt-info">
          <h4>{item.snippet.title}</h4>
          <span><p>{item.snippet.channelTitle}</p></span>
          <p className='p'>{converter(item.statistics.viewCount)} Views</p>
       </div>
    </Link>
   )
})}
    

    </div>
  )
}

export default Rec
