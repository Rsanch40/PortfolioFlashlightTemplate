
import React, { useState } from 'react';
import './Home.css';
import codeBackground from '../assets/codeBackground.png';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="home"
      className="home"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `url(${codeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="reveal-overlay"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></div>
      <h1>Hi, my name is _____</h1>
      <p className="subtitle">*Career*</p>
    </section>
  );
}

export default Home;
