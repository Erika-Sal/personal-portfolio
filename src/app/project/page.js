'use client';
import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/project.css'
function page() {
  return (
    <div>
        <Navbar/>
      <div className='sec1'> 
        <h1 style={{fontSize:"7vmin"}}>Say What? ... She Has Some Previous Projects?</h1>
        <img src='/computer.png' style={{marginTop:"10vmin"}}/>
        <p style={{fontSize:"4vmin", marginBottom:"1vmin"}}>Click the Project Name to See Github Repo</p>
        <img src="/ChevronUp.png"/>
      </div>

      <div className='sec22'>
        <img src="/python.png" />
        <div className='sec2Text'>
            <a href='https://github.com/Erika-Sal/photo-editor'><h1 style={{marginBottom:"-1vmin"}}>Python Automation Photo Editor</h1></a>
            <p style={{paddingRight:"4vmin", paddingLeft:"4vmin"}}>Used the Pillow Library (Python Imaging Library) to create an automatic photo editor </p>
        
        </div>
      </div>

      <div className='sec33'>
        <div className='sec3Text'>
            <a href='https://github.com/Erika-Sal/finalGameOfLife'><h1 style={{marginBottom:"-1vmin"}}>Game of Life Clone</h1></a>
            <p>Used Java to create a clone of the Game of Life board game</p>
        </div>
        <img style={{border:"#69965D 8px solid"}} src="/gol.png"/>
      </div>

      <div className='sec5'>
      <img src='/qbert.png' style={{border:"#69965D 8px solid"}}/>
        <div className='sec4Text'>
            <a href='https://github.com/Erika-Sal/Qbert-haha'><h1 style={{marginBottom:"-1vmin"}}>Q*bert Clone</h1></a>
            <p>Used Java to create a clone of the Q*bert arcade game</p>
        </div>
      </div>
    </div>
  )
}

export default page
