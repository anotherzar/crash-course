import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const Counter_Number = ({ from = 0, to = 100, duration = 1.5 }) => {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  const progressWidth = useTransform(count, latest => `${latest}%`);

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: [0.95, 0, 0.01, 0.99],
      onUpdate: latest => setDisplay(Math.floor(latest)),
    });

    return controls.stop;
  }, [count, to, duration]);

  return (
    <div className="mt-8 w-full px-1 max-w-lg">
      {/* Angka */}
      <motion.span
        className="block text-center text-white text-2xl font-mono mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: [0.95, 0, 0.01, 0.99],
        }}
      >
        {display}%
      </motion.span>

      {/* Progress Bar Container */}
      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
        {/* Progress Fill */}
        <motion.div
          style={{ width: progressWidth }}
          className="h-full bg-white rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${to}%` }}
          transition={{
            duration,
            ease: [0.95, 0, 0.01, 0.99],
          }}
        />
      </div>
    </div>
  );
};

export default Counter_Number;
