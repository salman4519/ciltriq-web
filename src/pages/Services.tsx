import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Search, GitBranch, Zap, Code, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Operational Diagnostics",
    description: "A comprehensive audit of your current operations to identify inefficiencies, bottlenecks, and opportunities.",
    outcomes: [
      "Complete process mapping and documentation",
      "Identification of revenue leaks and waste",
      "Prioritized roadmap for improvements",
      "ROI projections for each recommendation",
    ],
  },
  {
    icon: GitBranch,
    title: "Process Redesign",
    description: "We redesign your workflows from first principles, eliminating unnecessary steps and creating clear accountability.",
    outcomes: [
      "Streamlined operations with defined ownership",
      "Reduced handoffs and communication overhead",
      "Standardized procedures and playbooks",
      "Built-in quality control checkpoints",
    ],
  },
  {
    icon: Zap,
    title: "Automation & Integration",
    description: "We connect your tools and automate repetitive tasks, freeing your team to focus on high-value work.",
    outcomes: [
      "Unified data across all systems",
      "Automated workflows and notifications",
      "Reduced manual data entry and errors",
      "Real-time sync between platforms",
    ],
  },
  {
    icon: Code,
    title: "Custom Business Software",
    description: "When off-the-shelf solutions don't fit, we build custom tools tailored to your exact requirements.",
    outcomes: [
      "Purpose-built for your specific workflows",
      "Intuitive interfaces your team will actually use",
      "Scalable architecture for future growth",
      "Full ownership and documentation",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance Dashboards",
    description: "Real-time visibility into the metrics that matter, enabling faster and better decisions.",
    outcomes: [
      "Executive dashboards for strategic oversight",
      "Operational dashboards for daily management",
      "Automated reporting and alerts",
      "Historical analysis and trend identification",
    ],
  },
];

const Services = () => {
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
            <span className="label-text">Services</span>
            <h1 className="heading-xl mt-4 max-w-4xl">
              End-to-end systems engineering for your business.
            </h1>
            <p className="body-lg mt-6 max-w-2xl">
              From diagnosis to implementation, we provide everything you need to 
              transform how your business operates.
            </p>
          </motion.div>
        </section>

        {/* Services */}
        <section className="py-20 border-t border-border">
          <div className="container-wide">
            <div className="space-y-0 divide-y divide-border">
              {services.map((service, index) => {
                const ServiceItem = () => {
                  const ref = useRef(null);
                  const isInView = useInView(ref, { once: true, margin: "-50px" });

                  return (
                    <motion.div
                      ref={ref}
                      className="py-16 md:py-20"
                      initial={{ opacity: 0, y: 40 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center border border-border">
                              <service.icon className="h-5 w-5" strokeWidth={1.5} />
                            </div>
                            <span className="text-sm text-muted-foreground font-medium">
                              0{index + 1}
                            </span>
                          </div>
                          <h2 className="heading-md">{service.title}</h2>
                          <p className="body-lg mt-4">{service.description}</p>
                        </div>
                        <div className="lg:pt-20">
                          <span className="label-text">What You Get</span>
                          <ul className="mt-6 space-y-4">
                            {service.outcomes.map((outcome) => (
                              <li key={outcome} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                                <span className="body-md text-foreground">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  );
                };

                return <ServiceItem key={service.title} />;
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-foreground text-background">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="heading-lg text-background">
                Not sure where to start?
              </h2>
              <p className="body-lg mt-6 max-w-xl mx-auto text-gray-400">
                Begin with an operational audit. We'll identify the highest-impact 
                opportunities and create a clear roadmap for transformation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-14 px-10 mt-10 text-base font-medium bg-background text-foreground transition-all hover:bg-gray-200 group"
              >
                Schedule Your Audit
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

export default Services;
