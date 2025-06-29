import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import AboutCodeBlock from "./AboutCodeBlock";

const ROTATION_RANGE = 32.5;
const MAX_ROTATION = 15;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const TiltCard = () => {
  const ref = useRef(null);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  const rotateX = useMotionValue(0); // final rotateX (scroll + mouse)
  const rotateY = useMotionValue(0); // rotateY from mouse only

  const scrollInfluence = useRef(0); // store scroll effect
  const mouseInfluence = useRef(0);  // store mouse effect

  const xSpring = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const centerX = rect.left + width / 2;
      const centerY = rect.top + height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      let rX = (-mouseY / height) * ROTATION_RANGE;
      let rY = (mouseX / width) * ROTATION_RANGE;

      rX = clamp(rX, -MAX_ROTATION, MAX_ROTATION);
      rY = clamp(rY, -MAX_ROTATION, MAX_ROTATION);

      mouseInfluence.current = rX;
      rotateX.set(mouseInfluence.current + scrollInfluence.current);
      rotateY.set(rY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rotateX, rotateY]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      const rX = clamp(diff * -2.5, -MAX_ROTATION, MAX_ROTATION);
      scrollInfluence.current = rX;

      rotateX.set(mouseInfluence.current + scrollInfluence.current);

      lastScrollY.current = currentY;

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        scrollInfluence.current = 0;
        rotateX.set(mouseInfluence.current); // reset to mouse-only
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [rotateX]);

  return (
    <motion.div
      ref={ref}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-80 w-98 sm:h-80 sm:w-90 lg:h-80 lg:w-130 rounded-xl bg-gray-costume-2 border"
    >
      <div
        style={{
          transform: "translateZ(20px)",
          transformStyle: "preserve-3d",
        }}
        className="grid rounded-xl p-4"
      >
        <AboutCodeBlock />
      </div>
    </motion.div>
  );
};

const TiltCardWrapper = () => {
  return (
    <div className="grid w-full place-content-center">
      <TiltCard />
    </div>
  );
};

export default TiltCardWrapper;
