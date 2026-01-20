import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "40%", label: "Average reduction in operational overhead" },
  { value: "3x", label: "Faster decision-making with real-time data" },
  { value: "85%", label: "Decrease in manual task time" },
  { value: "100+", label: "Business systems engineered" },
];

export const ProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 bg-foreground text-background">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="label-text text-gray-500">Results</span>
          <h2 className="heading-lg mt-6 text-background">
            Measured outcomes. Not promises.
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16 bg-gray-700">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="bg-foreground p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-4xl md:text-5xl font-semibold tracking-tight">
                {metric.value}
              </span>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Client logos placeholder */}
        <motion.div
          className="mt-20 pt-16 border-t border-gray-700"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="label-text text-gray-400 text-center">
            Trusted by forward-thinking companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 mt-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-24 h-8 bg-gray-700/50 flex items-center justify-center"
              >
                <span className="text-xs text-gray-500 font-medium">LOGO</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
