import React from 'react'
import {Link} from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar bg-dark text-center container ' >
        <h4><Link className='Link nav-item ' to="/" >Home</Link></h4>
        <h4><Link className='Link nav-item' to="/notes">Notes</Link></h4>
        <h4><Link className='Link nav-item' to="/createnotes" >CreateNotes</Link></h4>
    </nav>
  )
}

export default Navbar

