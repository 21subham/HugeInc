import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hugecube = () => {
  const cubeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for the animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        })
        //spin on y
        .to(cubeRef.current, {
          rotateY: 360,
          scale: 1,
          ease: "none",
          duration: 1,
        })
        // spin
        .to(cubeRef.current, {
          rotateZ: 360,
          ease: "none",
          duration: 1,
        })
        // Disappear (fade out)
        .to(cubeRef.current, {
          opacity: 0,
          scale: 100,
          ease: "sine.inOut",
          duration: 0.8,
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
          id="front"
          ref={cubeRef}
          className="w-full h-full absolute"
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
        </div>
      </div>

      {/* Scrollable Content */}
      <section className="h-screen bg-black text-4xl flex items-center justify-center"></section>
    </>
  );
};

export default Hugecube;
