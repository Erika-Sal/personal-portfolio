
import React from 'react'
import Navbar from "../components/Navbar"
import EmblaCarousel from '../components/EmblaCarousel'
import '../styles/about.module.css'
import '../styles/carousel.css'
function page() {
  
const OPTIONS = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = ["/hackathon.JPG",  "/ktp1.jpg", "/Erika4.jpg", "/friends.jpg", "/Erika7.jpeg", "ktp3.JPG", "koin1.jpg", "ktp4.JPG"]

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