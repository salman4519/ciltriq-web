import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, GitBranch, Zap, Code, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Operational Diagnostics",
    description: "We map your entire operation to find the leaks, bottlenecks, and dependencies that are costing you.",
  },
  {
    icon: GitBranch,
    title: "Process Redesign",
    description: "We architect workflows that eliminate waste and create clear accountability at every step.",
  },
  {
    icon: Zap,
    title: "Automation & Integration",
    description: "We connect your tools and automate repetitive tasks so your team focuses on what matters.",
  },
  {
    icon: Code,
    title: "Custom Business Software",
    description: "When off-the-shelf tools fall short, we build exactly what your operation needs.",
  },
  {
    icon: BarChart3,
    title: "Performance Dashboards",
    description: "Real-time visibility into every metric that matters. No more flying blind.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 bg-secondary/50">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="label-text">What We Do</span>
          <h2 className="heading-lg mt-4">
            We engineer the systems that make your business run.
          </h2>
        </motion.div>

        {/* Services list */}
        <div className="mt-16 space-y-0 divide-y divide-border">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group py-10 md:py-12"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                <div className="flex items-center gap-4 md:w-1/3">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-border">
                    <service.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium">{service.title}</h3>
                </div>
                <p className="body-md md:w-2/3 md:pt-3">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
