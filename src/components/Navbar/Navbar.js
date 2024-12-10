import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logoL.png'
import { Link } from 'react-scroll'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
<nav className="navbar">
    <img src={logo} alt="logo" className='logo' />
    <div className="desktopMenu">
    <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className='dsktopMenuListItem'>Home</Link>
    <Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
    <Link activeClass='active' to ='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link> 
    <Link activeClass='active' to ='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</Link> 


 
    </div>
    <button className="desktopMenuBtn" onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});    }}>
        <img className='desktopMenuImg' src={contactImg} alt="contactImg" />
        Contact Me
    </button>

    <img src={menu} alt="logo" className='mobmenu' onClick={()=>setShowMenu(!showMenu)} />
    <div className="navMenu" style={{display:showMenu ? 'flex':'none'}}>
    <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' >Home</Link>
    <Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'>About</Link>
    <Link activeClass='active' to ='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'>Portfolio</Link> 
    <Link activeClass='active' to ='clients' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' >Clients</Link> 
    <Link activeClass='active' to ='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'>Contact</Link> 



 
    </div>

</nav>
  )
}

export default Navbar 