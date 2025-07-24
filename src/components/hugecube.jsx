import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hugecube = () => {
  const cubeRef = useRef(null);

  useEffect(() => {
    gsap.to(cubeRef.current, {
      rotateY: 360, // Rotates sideways
      ease: "none",
      scrollTrigger: {
        trigger: cubeRef.current,
        start: "top center",
        end: "bottom+=500 center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="h-[200vh] bg-black flex items-center justify-center">
      <div className="w-48 h-48 relative" style={{ perspective: "1000px" }}>
        <div
          ref={cubeRef}
          className="w-full h-full absolute"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 1s",
          }}
        >
          {/* Front Face */}
          <div
            className="absolute w-full h-full bg-white"
            style={{ transform: "rotateY(0deg) translateZ(6rem)" }}
          >
            <img
              src="/img1.jpg"
              alt="Front"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Face */}
          <div
            className="absolute w-full h-full bg-red-500"
            style={{ transform: "rotateY(90deg) translateZ(6rem)" }}
          >
            <img
              src="/img2.jpg"
              alt="Right"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back Face */}
          <div
            className="absolute w-full h-full bg-blue-500"
            style={{ transform: "rotateY(180deg) translateZ(6rem)" }}
          >
            <img
              src="/img3.jpg"
              alt="Back"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Left Face */}
          <div
            className="absolute w-full h-full bg-green-500"
            style={{ transform: "rotateY(-90deg) translateZ(6rem)" }}
          >
            <img
              src="/img4.jpg"
              alt="Left"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hugecube;
