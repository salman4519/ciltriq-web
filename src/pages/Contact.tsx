import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Check } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    challenge: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedGrid />
      <Header />
      <main className="relative z-10 pt-32">
        <section className="container-wide py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left column - Value prop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="label-text">Contact</span>
              <h1 className="heading-xl mt-4">
                Let's fix what's broken.
              </h1>
              <p className="body-lg mt-6">
                Tell us about your operational challenges. We'll review your situation 
                and respond within one business day with initial thoughts and next steps.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center border border-border flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-medium">No sales pitch</p>
                    <p className="body-sm mt-1">We'll give you honest, actionable feedback</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center border border-border flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-medium">No commitment</p>
                    <p className="body-sm mt-1">Initial conversations are always free</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center border border-border flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-medium">Direct access</p>
                    <p className="body-sm mt-1">You'll speak with our engineering team, not sales</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-secondary/50 p-8 md:p-12"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 flex items-center justify-center bg-foreground text-background mb-6">
                    <Check className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="heading-sm">Message received.</h3>
                  <p className="body-md mt-4 max-w-sm">
                    We'll review your submission and get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 px-4 bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-12 px-4 bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-12 px-4 bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium mb-2">
                      What operational challenge are you facing?
                    </label>
                    <textarea
                      id="challenge"
                      required
                      rows={5}
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center h-14 px-8 text-base font-medium bg-foreground text-background transition-all hover:bg-gray-800 group"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
