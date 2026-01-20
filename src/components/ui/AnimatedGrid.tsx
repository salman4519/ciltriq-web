import { motion } from "framer-motion";

export const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 animate-grid-flow" />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Horizontal flowing lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {[20, 35, 50, 65, 80].map((y, i) => (
          <motion.line
            key={i}
            x1="0%"
            y1={`${y}%`}
            x2="100%"
            y2={`${y}%`}
            stroke="hsl(0, 0%, 20%)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2, delay: i * 0.2, ease: "easeOut" }}
          />
        ))}
      </svg>

      {/* Vertical accent lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {[10, 25, 75, 90].map((x, i) => (
          <motion.line
            key={i}
            x1={`${x}%`}
            y1="0%"
            x2={`${x}%`}
            y2="100%"
            stroke="hsl(0, 0%, 15%)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, delay: 0.5 + i * 0.15, ease: "easeOut" }}
          />
        ))}
      </svg>

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l border-t border-gray-700"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-gray-700"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
    </div>
  );
};
