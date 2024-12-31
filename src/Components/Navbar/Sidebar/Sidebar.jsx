import React from 'react'
import './Sidebar.css'

import home from '../../../assets/home.png'
import game from '../../../assets/game_icon.png'
import automobile from '../../../assets/automobiles.png'
import sport from '../../../assets/sports.png'
import entertainment from '../../../assets/entertainment.png'
import tech from '../../../assets/tech.png'
import music from '../../../assets/music.png'
import blog from '../../../assets/blogs.png'
import news from '../../../assets/news.png'
import simon from '../../../assets/simon.png'
import jack from '../../../assets/jack.png'
import tom from '../../../assets/tom.png'
import megan from '../../../assets/megan.png'
import cameron from '../../../assets/cameron.png'



const Sidebar = ({sidebar,category,setCategory}) => {
  return (
   
   <div className={`sidebar ${sidebar?"":"sidebar2"}`} >
    <div className="side-section">

         <div className={`container ${category===0?"active":""}`} onClick={()=>setCategory(0)} >
            <img src={home} alt="" />
            <p>Home</p>
        </div>

        <div className={`container ${category===20?"active":""}`} onClick={()=>setCategory(20)} >
            <img src={game} alt="" />
            <p>Gaming</p>
        </div>

        <div className={`container ${category===2?"active":""}`} onClick={()=>setCategory(2)} >
            <img src={automobile} alt="" />
            <p>Automobile</p>
        </div>

        <div className={`container ${category===17?"active":""}`} onClick={()=>setCategory(17)} >
            <img src={sport} alt="" />
            <p>Sports</p>
        </div>

        <div className={`container ${category===24?"active":""}`} onClick={()=>setCategory(24)} >
            <img src={entertainment} alt="" />
            <p>Entertainment</p>
        </div>

        <div className={`container ${category===28?"active":""}`} onClick={()=>setCategory(28)} >
            <img src={tech} alt="" />
            <p>Technology</p>
        </div>

        <div className={`container ${category===10?"active":""}`} onClick={()=>setCategory(10)} >
            <img src={music} alt="" />
            <p>Music</p>
        </div>

        <div className={`container ${category===22?"active":""}`} onClick={()=>setCategory(22)} >
            <img src={blog} alt="" />
            <p>Blogs</p>
        </div>

        <div className={`container ${category===25?"active":""}`} onClick={()=>setCategory(25)} >
            <img src={news} alt="" />
            <p>News</p>
        </div>
        <hr />
    </div>



   <div className="subscribe-list">
         <h3>Subscriptions</h3>

         <div className="channel">
            <img src={simon}alt="" />
            <p>Mr Beast</p>
         </div>  

         <div className="channel">
            <img src={jack}alt="" />
            <p>PewDiePie</p>
         </div>  

         <div className="channel">
            <img src={tom}alt="" />
            <p>Mark Tilbury</p>
         </div>  

         <div className="channel">
            <img src={megan}alt="" />
            <p>5-minutes Craft</p>
         </div>  

          
  </div>
   </div>

  )
}

export default Sidebar
