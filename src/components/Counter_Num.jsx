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

    return () => controls.stop();
  }, [count, to, duration]);

  return (
    <div className="w-[80vw] max-w-md px-4 space-y-2">
      {/* Number */}
      <motion.span
        className="block text-center text-white text-xl md:text-2xl font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: [0.95, 0, 0.01, 0.99],
        }}
      >
        {display}%
      </motion.span>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          style={{ width: progressWidth }}
          className="h-full bg-white rounded-full"
        />
      </div>
    </div>
  );
};

export default Counter_Number;
