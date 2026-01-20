import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Audit & Discovery",
    description: "We analyze your current operations, map every process, and identify the root causes of inefficiency.",
  },
  {
    number: "02",
    title: "System Design",
    description: "We architect a comprehensive solution with clear specifications, timelines, and measurable outcomes.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "We build and deploy your new systems with minimal disruption to your day-to-day operations.",
  },
  {
    number: "04",
    title: "Optimization & Support",
    description: "We monitor performance, refine processes, and ensure your systems continue to deliver results.",
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="label-text">How We Work</span>
          <h2 className="heading-lg mt-4">
            A systematic approach to operational excellence.
          </h2>
        </motion.div>

        {/* Process steps */}
        <div className="mt-20 relative">
          {/* Connecting line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                {/* Number indicator */}
                <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center gap-4 md:gap-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-foreground text-background font-medium text-sm">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20"
                  }`}
                >
                  <h3 className="heading-sm">{step.title}</h3>
                  <p className="body-md mt-3">{step.description}</p>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
