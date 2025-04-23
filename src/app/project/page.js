'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import '../styles/project.css'

function Page() {
  // State for active project
  const [activeProject, setActiveProject] = useState(null)

  // Project data
  const projects = [
    {
      id: 1,
      title: "RoundUp",
      tagline: "Best Design at UT's Women in Computer Science Hackathon 2025",
      description: "A peer-powered task exchange and student connection platform",
      image: "/RoundUp.png",
      link: "https://github.com/Erika-Sal/RoundUp",
      tech: ["TypeScript", "Google Firebase", "Figma"]
    },
    {
      id: 2,
      title: "Python Automation Photo Editor",
      tagline: "Image Processing Automation Tool",
      description: "Used the Pillow Library (Python Imaging Library) to create an automatic photo editor that can batch process images with various filters and adjustments.",
      image: "/python.png",
      link: "https://github.com/Erika-Sal/photo-editor",
      tech: ["Python", "Pillow Library"]
    },
    {
      id: 3,
      title: "Game of Life Clone",
      tagline: "Simulation of Game of Life Board Game",
      description: "Used Java to create a clone of the Game of Life board game with custom rules and configurations.",
      image: "/gol.png",
      link: "https://github.com/Erika-Sal/finalGameOfLife",
      tech: ["Java", "Object-Oriented Design", "Digital Art"]
    },
    {
      id: 4,
      title: "Q*bert Clone",
      tagline: "Recreation of the Classic Arcade Game",
      description: "Used Java to create a clone of the Q*bert arcade game with authentic gameplay mechanics and graphics.",
      image: "/qbert.png",
      link: "https://github.com/Erika-Sal/Qbert-haha",
      tech: ["Java", "Object-Oriented Design"]
    }
  ]

  // Handle project click to show/hide details
  const toggleProjectDetails = (projectId) => {
    // Prevent content shift by getting the current scroll position
    const currentScrollPos = window.scrollY;
    
    // If we're closing a project
    if (activeProject === projectId) {
      setActiveProject(null);
    } else {
      // If we're opening a project
      setActiveProject(projectId);
      
      // Give DOM time to update, then scroll
      setTimeout(() => {
        // Calculate navbar height dynamically
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        
        const detailsElement = document.getElementById(`details-${projectId}`);
        if (detailsElement) {
          // Get the element's position relative to the document
          const rect = detailsElement.getBoundingClientRect();
          
          // Calculate the scroll position to place the element below navbar
          const scrollPos = currentScrollPos + rect.top - navbarHeight - 20;
          
          // Scroll to position
          window.scrollTo({
            top: scrollPos,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }

  // Scroll effect for project cards
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    }, { threshold: 0.1 })

    const hiddenElements = document.querySelectorAll('.project-card')
    hiddenElements.forEach((el) => observer.observe(el))

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div>
      <Navbar/>
      <div className='sec1'> 
        <h1 style={{fontSize:"7vmin"}}>Say What? ... She Has Some Previous Projects?</h1>
        <img src='/computer.png' style={{marginTop:"10vmin"}}/>
        <p style={{fontSize:"4vmin", marginBottom:"1vmin"}}>Click a Project to See More Details</p>
        <img src="/ChevronUp.png"/>
      </div>

      <div className='projects-container'>
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            id={`project-${project.id}`}
            className={`project-card ${index % 2 === 0 ? 'even' : 'odd'}`}
          >
            <div className='project-content'>
              <div className='project-info'>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h1>{project.title}</h1>
                </a>
                <p className='project-tagline'>{project.tagline}</p>
                
                <button 
                  className='details-button'
                  onClick={() => toggleProjectDetails(project.id)}
                >
                  {activeProject === project.id ? 'Hide Details' : 'Show Details'}
                </button>
                
                {activeProject === project.id && (
                  <div className='project-details' id={`details-${project.id}`}>
                    <p>{project.description}</p>
                    <div className='tech-stack'>
                      <h3>Technologies Used:</h3>
                      <ul>
                        {project.tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='github-link'
                    >
                      View on GitHub
                    </a>
                  </div>
                )}
              </div>
              <div className='project-image'>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{border: activeProject === project.id ? "#69965D 6px solid" : "#69965D 4px solid"}}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='back-to-top'>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back To Top
        </button>
      </div>
    </div>
  )
}

export default Page