"use client"; 
import { useState, useEffect } from 'react';
import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic';



const Navbar = () => {
    
    
        return (
    <div>
      <nav className='navbar'>
        <div className='brand-title'><Link href="/page" style={{textDecoration:"none", color:"black"}}>Erika Salvador</Link></div>

        <div className='navbar-links'>
          <ul>
                <li><Link href='/about'>About</Link></li>
                <li><a href='/project'>Projects</a></li>
                <li><a href='/Erika Salvador Resume.pdf'>Resume</a></li>
            </ul>
        </div>
           
      </nav>
    </div>
        )
  
}

export default Navbar