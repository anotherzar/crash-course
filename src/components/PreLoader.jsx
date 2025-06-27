import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextBlock from "./textBlock";
import DotCenter from "./DotCenter";
import Counter_Number from "./Counter_Num";

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
      className="w-screen h-screen fixed inset-0 overflow-hidden z-50 bg-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <section className="flex items-center space-x-2">
          <TextBlock direction="up">Code By</TextBlock>
          <TextBlock direction="down">Zar</TextBlock>
        </section>
        
        <div className="absolute bottom-[15%] left-1/2-translate-x-1/2 w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[400px] px-4">
          <Counter_Number from={0} to={100} duration={1.5} />
        </div>
      </div>
    </motion.div>
  );
};

export default PreLoader;
