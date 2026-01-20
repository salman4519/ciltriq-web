import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="heading-lg">
            Ready to diagnose what's holding your business back?
          </h2>
          <p className="body-lg mt-6 max-w-xl mx-auto">
            Book a systems audit. We'll map your operations, identify the leaks, 
            and show you exactly what needs to change.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-14 px-10 text-base font-medium bg-foreground text-background transition-all hover:opacity-80 group"
            >
              Book Your Audit
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="text-sm text-muted-foreground">No commitment required</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
