import React from 'react';
import HeaderButton from '../layouts/HeaderButton'

const Header = () => {

    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }
    document.documentElement.classList.add('dark-mode')

    const toggleDarkMode = (e) =>  {
        document.documentElement.classList.toggle('dark-mode')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        }


    return (
        <div>
            <div className="Header">
                <h1>Alex Solovkin</h1>
                <label className="switch">
                <input id="mode-switch" onClick={e => toggleDarkMode(e)} type="checkbox"/>
                <span className="slider round"></span>
            </label>
            <p data-aos="fade-up" data-aos-duration="3000" className="line-1 ">
            <p>-Experienced Project Manager leader with a passion for programming. </p>
            <p>-I'm well-versed in market trends, risk analysis, and customer engagement techniques. </p>
            <p>-Recently completed a comprehensive Full Stack development course in which I gained experience with Development including React and NodeJS. </p>
            <p>-Looking for an opportunity to pursue my developer career.</p>
            </p>
          
            <HeaderButton/>
            </div>
            <img id="not-dark" className="gtp inverse-dark animatePic" onClick={scrollTo} alt="Contact Me" title="Contact Me"  src="img/profile.png"></img>
        </div>
    )
    
}

export default Header;