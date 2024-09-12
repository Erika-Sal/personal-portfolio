'use client'
import React from 'react'

function Top() {
    
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 
  return (
    <div><button onClick={scrollToTop}>Back To Top</button></div>
  )
}

export default Top