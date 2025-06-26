import { motion } from "framer-motion";

const TextBlock = ({ children, direction = "up", delay = 0 }) => {
  const variants = {
    up: { y: 80, opacity: 0 },
    down: { y: -80, opacity: 0 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        delay,
        ease: [0.95, 0, 0.01, 0.99],
      }}
      className="overflow-hidden"
    >
      <h1 className="text-white text-4xl font-bold">{children}</h1>
    </motion.div>
  );
};

export default TextBlock;
