import React from 'react'
import { NavLink } from 'react-router-dom'
import LeftImage from "../assets/images/background-left-image.svg"
import RightImage from "../assets/images/background-right-image.svg"

const ShowcaseSection = () => {
  return (
    <section className='showcase'>
        <div className='container-fluid'>
            <img src={LeftImage} alt='left image'/>
            <div className='offer'>
                <h1>SALE UP</h1>
                <h2>TO 50% OFF</h2>
                <p>Online shopping free home delivery over $100</p>
                <NavLink className='btn-theme btn-card-theme'>                    
                    <span className='corner-left'></span>
                    <span className='corner-right'></span>
                    SHOP NOW
                </NavLink>
            </div>
            <img src={RightImage} alt='right image'/>
        </div>
    </section>
  )
}

export default ShowcaseSection