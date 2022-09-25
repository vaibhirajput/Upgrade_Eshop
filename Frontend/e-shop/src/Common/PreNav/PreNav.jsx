import React from 'react'
import "../PreNav/PreNav.css"
import { Link } from 'react-router-dom'




function PreNav() {
  return (
    <>
     <div id="homeNav">
        <Link to="/product/all">  ALL   </Link>
        <Link to="/product/apparel">  APPAREL   </Link>
        <Link to="/product/electronics">  ELECTRONICS    </Link>
        <Link to="/product/personalcare">  PERSONAL CARE    </Link>
      </div>
    
    
    </>
  )
}

export default PreNav