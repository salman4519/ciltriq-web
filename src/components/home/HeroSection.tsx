import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";

export const HeroSection = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/waves.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container-wide relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-text">Business Systems Engineering</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="heading-xl mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Eliminate revenue leaks.
            <br />
            <span className="text-muted-foreground">End operational chaos.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="body-lg mt-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We engineer business systems that run without you. Diagnose inefficiencies,
            automate operations, and build infrastructure that scales.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="https://wa.me/9562019132?text=Hello! I'm interested in your services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 text-base font-medium bg-foreground text-background transition-all hover:opacity-80 group"
            >
              Talk to Our Team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center h-14 px-8 text-base font-medium border border-border bg-background text-foreground transition-all hover:bg-secondary"
            >
              See How It Works
            </Link>
          </motion.div>
        </div>

        {/* Visual element - Lottie Animation */}
        <motion.div
          className="hidden lg:block w-full max-w-[500px] mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {animationData && <Lottie animationData={animationData} loop={true} className="w-full h-auto" />}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.div
          className="w-px h-16 bg-muted-foreground/30"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
};
