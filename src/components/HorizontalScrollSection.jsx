import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection = () => {
  useEffect(() => {
    gsap.to('.horizontal-scroll', {
      x: () => -(document.querySelector('.horizontal-scroll').scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: '.horizontal-scroll-container',
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${document.querySelector('.horizontal-scroll').scrollWidth}`
      }
    });
  }, []);

  return (
    <section className="horizontal-scroll-container" style={{ height: '100vh' }}>
      <div className="horizontal-scroll" style={{
        display: 'flex',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        height: '100%'
      }}>
        <div className="scroll-item" style={{
          display: 'inline-block',
          width: '300px',
          height: '200px',
          marginRight: '16px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>Item 1</div>
        <div className="scroll-item" style={{
          display: 'inline-block',
          width: '300px',
          height: '200px',
          marginRight: '16px',
          backgroundColor: '#e0e0e0',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>Item 2</div>
        <div className="scroll-item" style={{
          display: 'inline-block',
          width: '300px',
          height: '200px',
          marginRight: '16px',
          backgroundColor: '#d0d0d0',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>Item 3</div>
        <div className="scroll-item" style={{
          display: 'inline-block',
          width: '300px',
          height: '200px',
          marginRight: '16px',
          backgroundColor: '#c0c0c0',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>Item 4</div>
        <div className="scroll-item" style={{
          display: 'inline-block',
          width: '300px',
          height: '200px',
          marginRight: '16px',
          backgroundColor: '#b0b0b0',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>Item 5</div>
        <div className="scroll-item" style={{
          display: 'inline-block',
          width: '300px',
          height: '200px',
          marginRight: '16px',
          backgroundColor: '#b0b0b0',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>Item 6</div>
        {/* Add more items as needed */}
      </div>
    </section>
  );
};

export default HorizontalScrollSection;
