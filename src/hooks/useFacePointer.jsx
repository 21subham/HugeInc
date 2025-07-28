import { useEffect } from "react";
import gsap from "gsap";

const useFacePointer = (ref) => {
  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;

    //rotation speed for the cube
    const sensitivity = 4;

    // Handle mouse movement
    const handleMouseMove = (event) => {
      // Get element's bounding rectangle
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate mouse position relative to element center
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;

      // Calculate rotation angles (in degrees)
      const rotateY = (mouseX / 200) * sensitivity; // Rotate around Y-axis
      const rotateX = -(mouseY / 200) * sensitivity; // Rotate around X-axis

      // Animate element rotation with GSAP
      gsap.to(element, {
        rotationY: rotateY,
        rotationX: rotateX,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ref]);
};

export default useFacePointer;
