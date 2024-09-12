'use client'
import Image from "next/image";
import Navbar from "../app/components/Navbar"
import Link from 'next/link'

export default function Home() {

  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 

  return (
    <>
    <Navbar/>
    <div className="sec1">
      <img src="/mainPic.jpg" className="mainPic"/>
      <h1>Erika Salvador</h1>
      <h2>Computer Science Major at the University of Texas at Austin</h2>
      <p>Scroll to learn more</p>
      <img src="/ChevronUp.png"/>
    </div>

    <div className="sec2">
      <h1>Say What? ... She Can Code?</h1>
      <div className="pics">
        <img src="/java.png"/>
        <img src="/js.png"/>
        <img src="/react.png"/>
      </div>
      <img src="/Component 4.png"/>
    </div>

    <div className="sec3">
      <h1>Say What? ... She Can Teach Computer Science?</h1>
      <img src="/icode.png"/> 
      <div>
        <h2>Orange Belt Instructor and Curriculum Developer for iCode Cypress</h2>  
      </div>
      <p>August 2022 - August 2024</p>
    </div>

    <div className="sec4">
    <h1>Say What? ... She's Open to Connect?</h1>
    <div className="pics2">
        <a href="https://github.com/Erika-Sal"><img src="/github.png" /></a>
        <a href="mailto:erikasalvador@utexas.edu"><img src="/email.png"/></a>
        <a href="https://www.linkedin.com/in/erika-salvador-578743244/"><img src="/linkedIn.png"/></a>
      </div>
      <h2>Connect With Me!</h2>
    </div>
    <div className="back">
        <img src="/Chev.png" />
    <button onClick={scrollToTop}>Back To Top</button>
    </div>
  
    </>
  );
}
