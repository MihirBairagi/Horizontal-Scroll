import React, { useEffect, useRef } from 'react';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Lenis from '@studio-freight/lenis';
import imageOne from './assets/img/image-1.png'
import imageTwo from './assets/img/image-2.png'
import team1 from './assets/img/tean-1.png'
import team2 from './assets/img/tean-2.png'
import team3 from './assets/img/tean-3.png'
import team4 from './assets/img/tean-4.png'
import team5 from './assets/img/tean-5.png'


function App() {

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.5 * t), // Adjust easing for responsiveness
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update(); // Update GSAP ScrollTrigger
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP animations

    const numberOfItems = sectionRef.current.querySelectorAll('li').length;
    const remValue = (numberOfItems * 19) + 15;
    const vwValue = window.innerWidth / parseFloat(getComputedStyle(document.documentElement).fontSize); 
    const result = remValue - vwValue;
    

    const pin = gsap.fromTo(sectionRef.current,{
      translateX: 0
    },{
      translateX: `${-result}rem`,
      ease: 'none',
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "300% 10%",
        pin: true,
        scrub: 1,
        smoothScrub: 0.1,
        
        markers: true,
      },
    })

    return () => {
      pin.kill()
    }

  }, []);
  return (
   <>
   <section className='section-1 section' >
      <div className="container">
        <div className="section-box-1 flex justify-between py-[8rem]">
          <div className="text-box w-[45%]">
              <h1 className='text-[5rem] leading-[1.1] mb-[2rem]' >This is a Section with Images</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quo possimus natus ipsum impedit sapiente aspernatur quos perspiciatis ipsa ab repellendus quidem magnam, enim in.</p>
          </div>
          <div className="img-box flex justify-between w-[50%]">
            <div className="img-box w-[48%]">
              <img className='object-cover h-[100%]' src={imageOne} alt="" />
            </div>
            <div className="img-box w-[48%]">
              <img className='object-cover h-[100%]' src={imageTwo} alt="" />
            </div>
          </div>
        </div>
      </div>
   </section>
   <section className='section-2 section' ref={triggerRef}>
        <div className="section-box-2 py-[8rem]">
          <h2 className='ml-[8rem]' >Our Services</h2>
          <ul className='team-listing flex' ref={sectionRef} >
            <li>
              <img src={team1} alt="" />
            </li>
            <li>
              <img src={team2} alt="" />
            </li>
            <li>
              <img src={team3} alt="" />
            </li>
            <li>
              <img src={team4} alt="" />
            </li>
            <li>
              <img src={team5} alt="" />
            </li>
            <li>
              <img src={team1} alt="" />
            </li>
            <li>
              <img src={team2} alt="" />
            </li>
            <li>
              <img src={team3} alt="" />
            </li>
            <li>
              <img src={team4} alt="" />
            </li>
            <li>
              <img src={team5} alt="" />
            </li>
          </ul>
        </div>
   </section>

   <section className='section-3 section'>
      <div className="container">
        <div className="section-box-3">
          <h2 className='text-center' >This is the<br/> Second Section Wow!</h2>
        </div>
      </div>
   </section>
   </>
  );
}

export default App;
