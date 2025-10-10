import React, { useEffect } from "react";
import { Link } from "react-router-dom";



const Intro = () => {
  useEffect(() => {
    // Create floating particles
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.width = Math.random() * 4 + 2 + "px";
      particle.style.height = particle.style.width;
      particle.style.animationDelay = Math.random() * 20 + "s";
      particle.style.animationDuration = Math.random() * 10 + 15 + "s";
      particlesContainer.appendChild(particle);
    }

    // Parallax card movement
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".card");
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      cards.forEach((card, index) => {
        const speed = (index + 1) * 20;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        card.style.transform = `translate(${xMove}px, ${yMove}px)`;
      });
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: linear-gradient(to bottom, #000 0%, #fff 100%);
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          overflow-x: hidden;
        }

        .particles {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: 0;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: float 20s infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px) scale(1.5); opacity: 0; }
        }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          backdrop-filter: blur(20px) saturate(180%);
          background: rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 60px 80px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          animation: fadeInUp 1s ease 0.3s both;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero h1 {
          font-size: clamp(64px, 10vw, 120px);
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(90deg, #fff, #ccc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -3px;
          margin-bottom: 20px;
        }

        .tagline {
          font-size: clamp(24px, 4vw, 40px);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 50px;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .cta-buttons {
          display: flex;
          gap: 25px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 18px 42px;
          font-size: 18px;
          font-weight: 600;
          border: none;
          border-radius: 60px;
          cursor: pointer;
          transition: all 0.4s ease;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          letter-spacing: 1px;
        }

        .btn-primary {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-primary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
        }

        .btn-secondary {
          background: rgba(0, 0, 0, 0.2);
          color: #000;
          border: 1px solid rgba(0, 0, 0, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
          color: #000;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .feature-cards {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          top: 0;
          left: 0;
        }

        .card {
          position: absolute;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          animation: floatCard 20s infinite ease-in-out;
          pointer-events: auto;
          transition: all 0.4s ease;
        }

        .card:hover {
          transform: scale(1.05) translateY(-10px);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .card-1 { top: 15%; left: 10%; width: 200px; }
        .card-2 { top: 60%; right: 10%; width: 180px; }
        .card-3 { bottom: 20%; left: 15%; width: 160px; }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes ripple { to { transform: scale(2); opacity: 0; } }

        @media (max-width: 768px) {
          .hero-content { padding: 40px 30px; }
          .cta-buttons { flex-direction: column; gap: 15px; }
          .btn { width: 100%; max-width: 300px; }
          .card { display: none; }
        }
      `}</style>

      {/* Markup */}
      <div className="particles" id="particles"></div>

      <section className="hero">
        <div className="feature-cards">
          <div className="card card-1">
            <div className="card-icon">🚀</div>
            <h3>Fast Learning</h3>
            <p>Accelerate your coding journey with interactive tutorials</p>
          </div>
          <div className="card card-2">
            <div className="card-icon">💡</div>
            <h3>Smart AI</h3>
            <p>AI-powered code assistance at your fingertips</p>
          </div>
          <div className="card card-3">
            <div className="card-icon">🎯</div>
            <h3>Real Projects</h3>
            <p>Build portfolio-worthy applications</p>
          </div>
        </div>

        <div className="hero-content">
          <h1>LetsKode</h1>
          <p className="tagline">Create Share Discuss</p>
          <div className="cta-buttons">
            <Link to="/Register" className="btn btn-primary">
             Get Started
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;

