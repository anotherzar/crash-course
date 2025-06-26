import { motion } from "framer-motion";

const DotCenter = ({ delay = 0 }) => (
  <motion.div
    initial={{ scale: 0.3, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      duration: 1.2,
      delay,
      ease: [0.95, 0, 0.01, 0.99],
    }}
    className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center"
  >
    {/* Optional logo */}
  </motion.div>
);

export default DotCenter;
