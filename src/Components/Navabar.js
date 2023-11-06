import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import icon from './images/icons8-menu-100.png'
const Navabar = () => {
  const [Nav, setNav] = useState(false)
  function handle(){
    setNav(!Nav)
  }
  let toggle = Nav?'Navbar1':null;
  let toggle1 = Nav?'nav1':null;
  return (
    <div className={`Navbar ${toggle}`}>
      <div className='Name'>
    <h3>Suyasha Singh</h3>
      </div>
      <nav className={`nav ${toggle1}`}>
     <Link className='a' to='/'>Home</Link>
     <Link className='a' to='/about'>About</Link>
     <Link className='a' to='/reasearch'>Reaserach</Link>
     <Link className='a' to='/contact'>Contact</Link>
      </nav>
      <div className='icon'>
      <img src={icon} width='50' height='50' onClick={handle} />
      </div>
    </div>
  )
}

export default Navabar