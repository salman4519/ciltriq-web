import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronRight, Clock, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const caseStudies = [
    {
        id: "tydy",
        title: "Tydy",
        shortDescription: "End-to-end sales lifecycle automation handling 50-100 orders daily.",
        image: "/tydy.png",
        stats: [
            {
                icon: Clock,
                value: "70%",
                label: "Reduction in Ops Time",
            },
            {
                icon: TrendingUp,
                value: "30-40%",
                label: "Increase in Conversion Rate",
            },
            {
                icon: Users,
                value: "< 3s",
                label: "First Response Time",
            },
        ],
        tags: ["Automation", "CRM Integration", "Zoho Books"],
        link: "/case-studies/tydy",
    },
    {
        id: "einsteiniq",
        title: "EinsteinIQ Cosmetics",
        shortDescription: "Automating lead qualification on Instagram & WhatsApp to boost engagement by > 30-40%. (WIP)",
        image: "/einsteiniq.png",
        stats: [
            {
                icon: TrendingUp,
                value: "> 30-40%",
                label: "Engagement Rate",
            },
            {
                icon: Users,
                value: "Automated",
                label: "Lead Qualification",
            },
        ],
        tags: ["Automation", "Riza Integration", "Lead Gen"],
        link: "/case-studies/einsteiniq",
    },
];

export const CaseStudySection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-32 bg-background">
            <div className="container-wide">
                {/* Section header */}
                <motion.div
                    className="max-w-2xl mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="label-text">Selected Work</span>
                    <h2 className="heading-lg mt-4">
                        Real results for real businesses.
                    </h2>
                </motion.div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link to={study.link} className="group cursor-pointer relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg hover:border-primary/20 block h-full">
                                <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white font-medium flex items-center gap-2">
                                            View Case Study <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {study.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs font-normal">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                                        {study.title}
                                        <ChevronRight className="w-5 h-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-2">
                                        {study.shortDescription}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
