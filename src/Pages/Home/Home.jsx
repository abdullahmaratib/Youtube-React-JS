import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Navbar/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'


const Home = ({sidebar})=>{

const [category, setCategory] = useState(0)

  return (
    
    <>
    
     <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
     <div className={`container1 ${sidebar?"":"container2"}`}>
             <Feed category={category} />
     </div>

    </>
  )
}

export default Home
