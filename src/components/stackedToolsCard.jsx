import { useState } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import { listTools } from "../data";

const CARD_OFFSET = -25;
const SCALE_FACTOR = 0.1;
const ACTIVE_SCALE = 1;

const CardStackHorizontal = () => {
  const [cards, setCards] = useState(listTools);

  const moveToEnd = (from) => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <div className="flex px-4 md:px-0 pt-6 pb-10 overflow-x-hidden">
      <ul className="relative w-full max-w-5xl h-[200px] translate-x-[9%] md:translate-x-[25%]">
        {cards.map((tool, index) => {
          const offset = index - 0;
          const canDrag = index === 0;

          return (
            <motion.li
              key={tool.id}
              className="absolute w-[300px] h-[150px] rounded-xl list-none bg-zinc-800 border border-zinc-600 p-4 flex gap-4 items-center shadow-md"
              animate={{
                x: offset * CARD_OFFSET,
                scale: offset === 0 ? ACTIVE_SCALE : 1 - Math.abs(offset) * SCALE_FACTOR,
                zIndex: cards.length - index,
                opacity: Math.abs(offset) > 2 ? 0 : 1
              }}
              drag={canDrag ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={() => moveToEnd(index)}
              transition={{ type: "spring", stiffness: 300, damping: 30, velocity: 3 }}
              style={{
                left: "5%",
                top: 0,
                transform: "translateX(0%)",
              }}
            >
              <img src={tool.logo} alt={tool.app_name} className="w-14 h-14 object-contain" />
              <div>
                <h4 className="text-white font-semibold text-lg">{tool.app_name}</h4>
                <p className="text-gray-400 text-sm">{tool.detail}</p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardStackHorizontal;
