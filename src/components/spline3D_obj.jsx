import Spline from '@splinetool/react-spline';
import { useRef, useEffect } from 'react';

const HeroSpline = () => {
  const splineRef = useRef(null);
  const objectRef = useRef(null);

  useEffect(() => {
    // Logika buat tracking mouse
    const handleMouseMove = (e) => {
      if (!objectRef.current) return;

      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      objectRef.current.rotation.y = (mouseX - 0.5) * Math.PI;
      objectRef.current.rotation.x = (mouseY - 0.5) * Math.PI / 6;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLoad = (spline) => {
    const object = spline.findObjectByName('Cube');
    if (object) {
      objectRef.current = object;
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
