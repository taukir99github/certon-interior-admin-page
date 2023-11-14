import React from 'react'
import "./Header.css"
import Banner from "../../Assests/Banner.jpg"

const Header = () => {
  return (
    <>
      <div className="header-sec">
        <img src={Banner} alt="" />
       
      </div>

      <div className="text-area">
        <div>
        <div>We love meeting new people</div><div>and helping them.</div>
      </div>
      </div>

    </> 
  )
}

export default Header
