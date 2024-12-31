import React from 'react'
import './Navbar.css'
import menu from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import noti from '../../assets/notification.png'
import profile from '../../assets/jack.png'
import { Link } from 'react-router-dom'



const Navbar = ({setSidebar}) => {
  return (

    <div className='nav'>
      <div className="nav-left">
       <img className="menu-img" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu} alt="" />
         <Link to="/" ><img className="logo-img" src={logo} alt="" /></Link>
      </div>

      <div className="nav-mid">
        <div className="search-box">
        <input type="text" placeholder='Search' />
        <img src={search} alt="" />
        </div>
      </div>

      <div className="nav-right">
        <img className='op' src={upload} alt="" />
        <img className='op' src={noti} alt="" />
        <img className="prof-img" src={profile} alt="" />
      </div>
    </div>
  )
} 

export default Navbar
