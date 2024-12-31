import React, { useEffect, useState } from 'react'
import "./Feed.css"

import img1 from "../../assets/thumbnail1.png"
import img2 from "../../assets/thumbnail2.png"
import img3 from "../../assets/thumbnail3.png"
import img4 from "../../assets/thumbnail4.png"
import img5 from "../../assets/thumbnail5.png"
import img6 from "../../assets/thumbnail6.png"
import img7 from "../../assets/thumbnail7.png"
import img8 from "../../assets/thumbnail8.png"
import { Link } from 'react-router-dom'
import { API_KEY } from '../../data'
import { converter } from '../../data'
import moment from 'moment'




const Feed = ({category}) => {

const [data, setData] = useState([])

const fetchData = async () => {
const videoList =  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
       await fetch(videoList).then(response=>response.json()).then(data=>setData(data.items))

}

useEffect(() => {
      fetchData()
}, [category])


  return (

  <div className="feed">

   {data.map((item, idx)=>{
    return(

      <Link to = {`video/${item.snippet.categoryId}/${item.id}`} key={idx} className='card'>
      <img src={item.snippet.thumbnails.medium.url} alt="" />
      <h2>{item.snippet.title}</h2>
      <h3>{item.snippet.channelTitle}</h3>
      <p>{converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
    </Link>

    )

   })}

 

  </div>
  )
}

export default Feed
