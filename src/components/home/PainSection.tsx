import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, User, Clock, Eye } from "lucide-react";

const painPoints = [
  {
    icon: Layers,
    title: "Disconnected Tools",
    description: "Your CRM, billing, and operations live in separate silos that don't talk to each other.",
  },
  {
    icon: User,
    title: "Founder Dependency",
    description: "Every critical decision flows through you. The business can't run without your presence.",
  },
  {
    icon: Clock,
    title: "Manual Follow-ups",
    description: "Your team spends hours on tasks that should happen automatically. Revenue slips through cracks.",
  },
  {
    icon: Eye,
    title: "Poor Visibility",
    description: "You can't see what's happening in real-time. Problems surface only when they become fires.",
  },
];

export const PainSection = () => {
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
          <span className="label-text">The Problem</span>
          <h2 className="heading-lg mt-4">
            Your operations are bleeding time, money, and opportunity.
          </h2>
        </motion.div>

        {/* Pain points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-16 bg-border">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              className="bg-background p-10 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <point.icon className="h-6 w-6 text-gray-400" strokeWidth={1.5} />
              <h3 className="heading-sm mt-6">{point.title}</h3>
              <p className="body-md mt-3">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
