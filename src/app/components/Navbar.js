import { useState, useEffect } from 'react';
import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic';



const Navbar = () => {
    
    const [toggle, setToggle] = useState(false)
    const MyComponent = dynamic(() => import('./Navbar.js'), {
      noSSR: true,
    });

    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 500px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(max-width: 500px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

      if(matches){
        return (
    <div>
      <nav className='navbar'>
        <div className='brand-title'><Link href="/page" style={{textDecoration:"none", color:"black"}}>Erika Salvador</Link></div>
        <a class="toggle-button" onClick={() => setToggle(!toggle)}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </a>

        <div className='navbar-links' style={{display: toggle ? 'flex' : 'none'}}>
          <ul>
                <li><Link href='/about'>About</Link></li>
                <li><a href='/project'>Projects</a></li>
                <li><a href='/Erika Salvador Resume.pdf'>Resume</a></li>
            </ul>
        </div>
           
      </nav>
    </div>
  )
      }else{
        return (
            <div>
              <nav className='navbar'>
                <div className='brand-title'><Link href="/" style={{textDecoration:"none", color:"black"}}>Erika Salvador</Link></div>
                <a class="toggle-button" onClick={() => setToggle(!toggle)}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>
        
                <div className='navbar-links' style={{display:'flex'}}>
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
  
}

export default Navbar