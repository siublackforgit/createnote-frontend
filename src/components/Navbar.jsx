import React from 'react'
import {Link} from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar bg-dark container ' >
        <h4><Link className='Link' to="/" >Home</Link></h4>
        <h4><Link className='Link' to="/notes">Notes</Link></h4>
        <h4><Link className='Link' to="/createnotes" >CreateNotes</Link></h4>
    </nav>
  )
}

export default Navbar

