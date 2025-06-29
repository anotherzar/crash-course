import Spline from '@splinetool/react-spline';
import { useRef, useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const lerp = (start, end, t) => start + (end - start) * t;

const MAX_ROTATION_Y = Math.PI / 8;
const MAX_ROTATION_X = Math.PI / 20; // default 10
const MAX_CAMERA_SCROLL_OFFSET = 100; // buat kontrol max scroll - + (default 20)

const INITIAL_CAMERA_Y = 110; // <- default position Y axis camera di  (default 60)

const HeroSpline = () => {
  const splineRef = useRef(null);
  const objectRef = useRef(null);
  const cameraRef = useRef(null);

  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  const scrollYValue = useMotionValue(0);
  const smoothScroll = useSpring(scrollYValue, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      const rawRotY = (mouseX - 0.5) * Math.PI;
      const rawRotX = (mouseY - 0.5) * Math.PI;

      targetRotation.current.y = clamp(rawRotY, -MAX_ROTATION_Y, MAX_ROTATION_Y);
      targetRotation.current.x = clamp(rawRotX, -MAX_ROTATION_X, MAX_ROTATION_X);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const mapped = clamp(scroll * 0.1, -MAX_CAMERA_SCROLL_OFFSET, MAX_CAMERA_SCROLL_OFFSET);
      scrollYValue.set(mapped);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollYValue]);

  useEffect(() => {
    const animate = () => {
      if (objectRef.current) {
        currentRotation.current.x = lerp(currentRotation.current.x, targetRotation.current.x, 0.1);
        currentRotation.current.y = lerp(currentRotation.current.y, targetRotation.current.y, 0.1);

        objectRef.current.rotation.x = currentRotation.current.x;
        objectRef.current.rotation.y = currentRotation.current.y;
      }

      if (cameraRef.current) {
        const scrollOffset = smoothScroll.get();
        cameraRef.current.position.y = INITIAL_CAMERA_Y - scrollOffset;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [smoothScroll]);

  const handleLoad = (spline) => {
    const object = spline.findObjectByName('Char_zar');
    const camera = spline.findObjectByName('Camera');

    if (object) objectRef.current = object;
    if (camera) {
      cameraRef.current = camera;

      // Posisi camera di spline nya
      camera.position.x = 0.6;
      camera.position.y = INITIAL_CAMERA_Y;
      camera.position.z = 179.3;
    }
  };

  return (
    <div className="relative w-full aspect-square overflow-hidden">
      <Spline
        scene="https://prod.spline.design/DGAS6kurtfDr4GUY/scene.splinecode"
        ref={splineRef}
        onLoad={handleLoad}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default HeroSpline;
