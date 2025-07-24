import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Header = () => {
  const cubeRef = useRef(null);

  // Handle hover in (rotate cube on X-axis and show top face)
  const handleMouseEnter = () => {
    gsap.to(cubeRef.current, {
      rotateX: 90,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  // Handle hover out (revert rotation)
  const handleMouseLeave = () => {
    gsap.to(cubeRef.current, {
      rotateX: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-8 z-50">
      {/* Left: Huge | Menu */}
      <div className="flex shadow-md">
        <div className="bg-fuchsia-600 text-black px-4 py-4 font-semibold transition-transform duration-200 hover:scale-110">
          Huge
        </div>
        <div className="bg-white text-black px-4 py-4 font-semibold transition-transform duration-200 hover:scale-110">
          Menu
        </div>
      </div>

      {/* Right: Let's Talk 3D Cube Button */}
      <button
        className="relative w-[200px] h-[60px] font-semibold text-lg shadow-md"
        id="Letsttalk"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
      >
        <div
          ref={cubeRef}
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Face */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-white text-black"
            style={{
              transform: "translateZ(2rem)",
            }}
          >
            Let's talk <span className="ml-1">↗</span>
          </div>

          {/* Top Face (revealed on flip) */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-green-500 text-white"
            style={{
              transform: "rotateX(-90deg) translateZ(2rem)",
            }}
          >
            Let's talk <span className="ml-1">↗</span>
          </div>
        </div>
      </button>
    </header>
  );
};

export default Header;
