import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 3,
        duration: 0.5,
        ease: [0.95, 0, 0.01, 0.99],
      }}
      className="w-screen h-screen fixed inset-0 overflow-hidden z-50 bg-black"
    >
      <section className="flex justify-center items-center w-full h-full space-x-6">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.95, 0, 0.01, 0.99],
          }}
          className="overflow-hidden"
        >
          <h1 className="text-white text-4xl font-bold">Code By</h1>
        </motion.div>

        <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.95, 0, 0.01, 0.99],
          }}
          id="imageCon"
          className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center"
        >
          {/*<img src="..." alt="" /> */}
        </motion.div>

        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.95, 0, 0.01, 0.99],
          }}
          className="overflow-hidden"
        >
          <h1 className="text-white text-4xl font-bold">Zar</h1>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default PreLoader;
