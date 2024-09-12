'use client'
import React from 'react'
import Navbar from "../components/Navbar"
import EmblaCarousel from '../components/EmblaCarousel'
import '../styles/about.module.css'
import '../styles/carousel.css'
function page() {
  
const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = ["/Erika1.jpg",  "/Erika3.jpg", "/Erika4.jpg", "/Erika5.jpg", "/Erika7.jpeg"]

  return (
    <>
       <Navbar/>
       <div className='sec1'>
        <h1 style={{color:"black"}}>Say What? ... She Does More Than Code?</h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
       </div>
    </>
  )
}

export default page