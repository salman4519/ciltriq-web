import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const values = [
  {
    title: "Systems Over Software",
    description: "Software is just a tool. We focus on the underlying systems, processes, and logic that determine how your business operates.",
  },
  {
    title: "Engineering Mindset",
    description: "We approach every problem with rigor. Measure, analyze, design, build, test, iterate. No guesswork. No assumptions.",
  },
  {
    title: "Outcome-Driven",
    description: "We don't deliver features. We deliver business outcomes. Every decision is evaluated against the results it produces.",
  },
  {
    title: "Sustainable Scale",
    description: "We build for the long term. Systems that don't just work today, but continue to perform as your business grows.",
  },
];

const About = () => {
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen">
      <AnimatedGrid />
      <Header />
      <main className="relative z-10 pt-32">
        {/* Hero */}
        <section className="container-wide py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="label-text">About</span>
            <h1 className="heading-xl mt-4 max-w-4xl">
              We exist to make businesses run better.
            </h1>
          </motion.div>
        </section>

        {/* Mission */}
        <section ref={missionRef} className="py-20 border-t border-border">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                <span className="label-text">The Mission</span>
                <h2 className="heading-md mt-4">
                  Eliminate the chaos that stops businesses from growing.
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-6"
              >
                <p className="body-lg">
                  Most businesses don't have a technology problem. They have an operations problem. 
                  Disconnected tools, manual processes, and tribal knowledge create friction that 
                  compounds over time.
                </p>
                <p className="body-md">
                  Ciltriq was founded to solve this. We bring engineering discipline to business 
                  operations—diagnosing root causes, designing sustainable systems, and building 
                  the infrastructure that allows companies to scale without chaos.
                </p>
                <p className="body-md">
                  We're not consultants who deliver reports. We're engineers who deliver results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="py-20 bg-secondary/50">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="label-text">Principles</span>
              <h2 className="heading-md mt-4 max-w-2xl">
                How we think about the work.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-16 bg-border">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-background p-10 md:p-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="heading-sm">{value.title}</h3>
                  <p className="body-md mt-4">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="heading-lg">Ready to work together?</h2>
              <p className="body-lg mt-6 max-w-xl mx-auto">
                Let's discuss how we can help you build systems that scale.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-14 px-10 mt-10 text-base font-medium bg-foreground text-background transition-all hover:opacity-80 group"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
