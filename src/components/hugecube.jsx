import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useFacePointer from "../hooks/useFacePointer";

gsap.registerPlugin(ScrollTrigger);

const Hugecube = () => {
  const cubeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            endTrigger: "#future",
            end: "bottom bottom",
            scrub: true,
          },
        })
        //spin right
        .to(cubeRef.current, {
          rotateY: 360,
          scale: 1,
          ease: "none",
          duration: 0.8,
        })
        //spin left and down
        .to(cubeRef.current, {
          rotateX: 90,
          rotateY: 540,
          ease: "power2.out",
          duration: 0.5,
        })
        .to(cubeRef.current, {
          scale: 1,
          opacity: 0,
          ease: "sine.inOut",
          duration: 0.1,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Global Cube */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-48 h-48"
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
            className="absolute w-full h-full flex items-center justify-center bg-pink-500 text-6xl"
            style={{ transform: "rotateY(0deg) translateZ(6rem)" }}
          >
            Huge
          </div>

          {/* Right Face */}
          <div
            className="absolute w-full h-full bg-red-500"
            style={{ transform: "rotateY(90deg) translateZ(6rem)" }}
          >
            <img
              src="/Facebook.jpg"
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
              src="/github.jpg"
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
              src="/reddit.jpg"
              alt="Left"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Face */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-pink-500 text-4xl"
            style={{
              transform: " rotateY(180deg)  rotateX(90deg) translateZ(6rem)",
            }}
          ></div>

          {/* Bottom Face */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-pink-500 text-4xl"
            style={{ transform: " rotateX(-90deg) translateZ(6rem)" }}
          ></div>
        </div>
      </div>

      {/* Scrollable Content */}
      <section className="h-screen bg-black text-4xl flex items-center justify-center text-white">
        Scroll down
      </section>
    </>
  );
};

export default Hugecube;
