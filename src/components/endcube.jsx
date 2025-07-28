import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFacePointer from "../hooks/useFacePointer";

gsap.registerPlugin(ScrollTrigger);

const EndCube = () => {
  const cubeRef = useRef(null);
  //cube rotation speed

  useFacePointer(cubeRef);

  return (
    <>
      {/* Global Cube */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-48 h-48"
        style={{ perspective: "1000px", pointerEvents: "none" }}
      >
        <div
          ref={cubeRef}
          className="w-full h-full relative"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Face */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-pink-500 text-6xl text-black"
            style={{ transform: "rotateY(0deg) translateZ(6rem)" }}
          >
            Huge
          </div>

          {/* Right Face */}
          <div
            className="absolute w-full h-full bg-red-500 flex items-center justify-center"
            style={{ transform: "rotateY(90deg) translateZ(6rem)" }}
          >
            Right
          </div>

          {/* Back Face */}
          <div
            className="absolute w-full h-full bg-blue-500 flex items-center justify-center"
            style={{ transform: "rotateY(180deg) translateZ(6rem)" }}
          >
            Back
          </div>

          {/* Left Face */}
          <div
            className="absolute w-full h-full bg-green-500 flex items-center justify-center"
            style={{ transform: "rotateY(-90deg) translateZ(6rem)" }}
          >
            Left
          </div>

          {/* Top Face */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-pink-500 text-4xl"
            style={{
              transform: "rotateY(180deg) rotateX(90deg) translateZ(6rem)",
            }}
          ></div>

          {/* Bottom Face */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-pink-500 text-4xl"
            style={{ transform: "rotateX(-90deg) translateZ(6rem)" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default EndCube;
