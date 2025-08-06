"use client";

import Image from "next/image"; // Using next/image for better performance

export default function HackathonLandingPage() {
  return (
    <>
      {/* The CSS from the original file is included here for a self-contained component.
        In a larger application, this would typically go into a global CSS file.
      */}
      <style jsx global>{`
        /* Import professional fonts */
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap");

        * {
          font-family: "Inter", sans-serif;
        }

        body,
        html {
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #0d0d0d;
        }

        .tech-bg {
          background: radial-gradient(
            ellipse at 70% 30%,
            #4a4a52 0%,
            #2a2a30 25%,
            #1a1a1f 50%,
            #0a0a0f 100%
          );
          position: relative;
          min-height: 100vh;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to top,
            rgba(13, 13, 13, 0.7) 0%,
            rgba(13, 13, 13, 0.3) 50%,
            transparent 100%
          );
          z-index: 3;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: radial-gradient(
            circle,
            rgba(200, 200, 255, 0.8),
            rgba(100, 100, 150, 0.2)
          );
          box-shadow: 0 0 10px rgba(180, 180, 255, 0.3);
          border-radius: 50%;
          animation: floatUp linear infinite;
        }

        .particle:nth-child(1) {
          left: 10%;
          animation-duration: 15s;
        }
        .particle:nth-child(2) {
          left: 25%;
          animation-duration: 18s;
          animation-delay: 2s;
        }
        .particle:nth-child(3) {
          left: 50%;
          animation-duration: 12s;
          animation-delay: 1s;
        }
        .particle:nth-child(4) {
          left: 75%;
          animation-duration: 14s;
          animation-delay: 3s;
        }
        .particle:nth-child(5) {
          left: 90%;
          animation-duration: 16s;
          animation-delay: 4s;
        }

        @keyframes floatUp {
          0% {
            top: 100vh;
            opacity: 0;
            transform: scale(0.5);
          }
          10% {
            opacity: 0.8;
            transform: scale(1);
          }
          90% {
            opacity: 0.8;
            transform: scale(1);
          }
          100% {
            top: -20px;
            opacity: 0;
            transform: scale(0.4);
          }
        }

        /* Professional title styling */
        .title-glow {
          font-family: "Montserrat", sans-serif;
          font-weight: 800;
          background: linear-gradient(135deg, #a8b8ff, #ffffff, #c8d4ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shine 4s linear infinite;
          background-size: 200% 200%;
          letter-spacing: -0.02em;
          transition: all 0.3s ease;
        }

        .title-glow:hover {
          transform: scale(1.02);
          filter: brightness(1.2);
        }

        .subtitle {
          font-family: "Space Grotesk", sans-serif;
          font-weight: 400;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
        }

        .subtitle:hover {
          color: #fff;
          transform: translateY(-2px);
        }

        @keyframes shine {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 200%;
          }
        }

        /* Logo styling */
        .logo-main {
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
        }

        .logo-side {
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .logo-side:hover {
          transform: translateY(-8px) scale(1.05);
          filter: brightness(1.1);
        }

        .fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="tech-bg">
        {/* Particle Layer (z-index: 2) */}
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        {/* Dark Overlay (z-index: 3) */}
        <div className="overlay"></div>

        {/* Main Content (z-index: 10) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
          {/* Title */}
          <div className="text-center mb-8 sm:mb-10 fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold title-glow mb-3 sm:mb-4">
              hackX
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 subtitle">
              National Hackathon Series
            </h2>
          </div>

          {/* Logos */}
          <div className="logo-container flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            {/* Partner Left */}
            <div
              className="order-2 lg:order-1 fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href="https://hackx.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="logo-side rounded-xl w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 flex items-center justify-center p-4">
                  <Image
                    src="/images/hackXlogo.webp"
                    alt="HackerX Website"
                    width={160} // Adjusted for better resolution in the container
                    height={160}
                    className="opacity-85 object-contain hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </a>
            </div>

            {/* Ministry Center */}
            <div
              className="order-1 lg:order-2 fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="logo-main w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                <Image
                  src="/images/ministry Logo.png"
                  alt="Ministry Logo"
                  width={224} // Adjusted for better resolution in the container
                  height={224}
                  className="opacity-90 object-contain"
                />
              </div>
            </div>

            {/* Partner Right */}
            <div className="order-3 fade-in" style={{ animationDelay: "0.3s" }}>
              <a
                href="https://www.hackxjr.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="logo-side rounded-xl w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 flex items-center justify-center p-4">
                  <Image
                    src="/images/JR LOGO 02.png"
                    alt="Juniors in Tech Website"
                    width={160} // Adjusted for better resolution in the container
                    height={160}
                    className="opacity-85 object-contain hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
