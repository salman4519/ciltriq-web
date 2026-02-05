import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Target, Rocket, Filter, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { useEffect } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const EinsteinIQCaseStudy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const study = {
        title: "EinsteinIQ Cosmetics",
        subtitle: "Automating Social Commerce Lead Qualification",
        date: "02 Feb 2025",
        readTime: "4 min read",
        image: "/einsteiniq.png",
        tags: ["Automation", "Lead Qualification", "Riza Integration"],
        website: "https://einsteiniqcosmetics.com/",
        stats: [
            {
                icon: Filter,
                value: "90%+",
                label: "Reduction in Junk Leads",
            },
            {
                icon: Target,
                value: "40%+",
                label: "Engagement Rate",
            },
            {
                icon: Rocket,
                value: "24/7",
                label: "Instant Lead Response",
            },
        ],
        introduction: "EinsteinIQ Cosmetics relies heavily on Instagram and WhatsApp as their primary sales channels. While these platforms generated high traffic, they also brought a flood of unqualified leads and spam. To streamline their process, EinsteinIQ integrated Ciltriq's Riza to filter out junk leads and significantly improve lead qualification, ensuring their sales team focused only on high-value interactions.",
        challenges: [
            "High Noise Ratio: A significant percentage of incoming messages were spam or low-intent inquiries.",
            "Resource Drain: Sales agents wasted hours manually filtering through effective non-leads.",
            "Delayed Responses: Authentic buyers often waited too long for a response due to the backlog.",
            "Inconsistent Qualification: Manual qualification was subjective and varied between agents."
        ],
        solution: {
            text: "Ciltriq deployed Riza, an intelligent automated sales agent, to act as the first line of defense and engagement. Riza was integrated directly into their Instagram and WhatsApp DMs.",
            points: [
                "Automated Filtering: Riza instantly identifies and filters out junk leads and spam based on interaction patterns.",
                "Smart Qualification: Engages prospects with qualifying questions to gauge intent before handoff.",
                "24/7 Instant Response: Immediate engagement for every user, ensuring no lead goes cold.",
                "Seamless Handover: Only warm, qualified leads are routed to human sales agents."
            ]
        },
        targets: [
            "90%+ Reduction in Junk Leads: Target to clean the sales funnel so agents see only relevant queries.",
            "40%+ Engagement Rate: Aiming for immediate responses to boost user interaction and trust.",
            "24/7 Availability: Enable sales around the clock, not just during office hours.",
            "Higher Conversion: Qualified leads expected to convert at a higher rate due to timely engagement."
        ],
        quote: {
            text: "Riza has been a game-changer for our social sales. We no longer waste time on junk leads, and our response times are instant. Our team is happier and more productive.",
            author: "Sales Director, EinsteinIQ Cosmetics"
        },
        benefits: [
            "Enhanced Team Efficiency: Stop wasting time on spam.",
            "Increased Revenue: Capture every potential sale instantly.",
            "Better Customer Experience: Immediate answers for customers.",
            "Scalable Growth: Handle 1000s of DMs without adding staff."
        ],
        conclusion: "EinsteinIQ's integration of Riza demonstrates how automation can turn noisy social channels into streamlined revenue generators. By automating the qualification process, they have achieved a leaner, more effective sales operation."
    };

    return (
        <div className="min-h-screen bg-background relative selection:bg-primary/10">
            <AnimatedGrid />
            <Header />

            <main className="relative z-10 pt-24 pb-20">
                <div className="container-wide max-w-5xl mx-auto px-6">
                    <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Back to Case Studies
                    </Link>

                    {/* Header Section */}
                    <div className="mb-12 text-center">
                        <div className="flex justify-center gap-2 mb-6">
                            <Badge variant="destructive" className="text-sm px-3 py-1 animate-pulse">
                                Work in Progress
                            </Badge>
                            {study.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <h1 className="heading-xl mb-4">{study.title}</h1>
                        <p className="text-xl text-muted-foreground mb-4">{study.subtitle}</p>
                        <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
                            <span>{study.date}</span>
                            <span>•</span>
                            <span>{study.readTime}</span>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="rounded-3xl overflow-hidden border border-border shadow-2xl bg-muted/50 mb-16">
                        <div className="relative aspect-video w-full">
                            <img
                                src={study.image}
                                alt={study.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            {/* Introduction */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {study.introduction}
                                </p>
                            </div>

                            {/* Challenges */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-foreground">The Challenge</h3>
                                <ul className="space-y-3">
                                    {study.challenges.map((item, idx) => (
                                        <li key={idx} className="flex gap-3 text-muted-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span className="leading-relaxed">
                                                <strong className="text-foreground">{item.split(':')[0]}:</strong>
                                                {item.split(':')[1]}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Solution */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-foreground">The Solution: Smart Qualification</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    {study.solution.text}
                                </p>
                                <ul className="space-y-3">
                                    {study.solution.points.map((item, idx) => (
                                        <li key={idx} className="flex gap-3 text-muted-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Integration Badges */}
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 w-fit px-3 py-1.5 rounded-full border border-border/50">
                                    <FaInstagram className="text-base text-pink-500" />
                                    <span className="font-medium">Instagram Automation</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 w-fit px-3 py-1.5 rounded-full border border-border/50">
                                    <FaWhatsapp className="text-base text-green-500" />
                                    <span className="font-medium">WhatsApp Automation</span>
                                </div>
                            </div>

                            <div className="mt-4">
                                <a
                                    href={study.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary hover:underline text-sm font-medium"
                                >
                                    Visit Website <ArrowRightIcon className="ml-1 w-3 h-3" />
                                </a>
                            </div>

                            {/* Targets */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-foreground">The Targets</h3>
                                <div className="grid gap-4">
                                    {study.targets.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/10 border border-border/50">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                                                <Target className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <strong className="text-foreground block mb-1">{item.split(':')[0]}</strong>
                                                <p className="text-sm text-muted-foreground">{item.split(':')[1]}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="bg-secondary/20 border-l-4 border-primary p-6 rounded-r-xl my-8">
                                <p className="text-xl italic text-foreground mb-4">"{study.quote.text}"</p>
                                <cite className="text-sm font-medium text-muted-foreground not-italic">— {study.quote.author}</cite>
                            </div>

                            {/* Benefits */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-foreground">Key Benefits</h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {study.benefits.map((item, idx) => (
                                        <li key={idx} className="flex gap-3 text-muted-foreground p-3 rounded-lg bg-card border border-border/50">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Conclusion */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-foreground">Conclusion</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {study.conclusion}
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Sticky Stats */}
                            <div className="sticky top-32 space-y-6">
                                <div className="p-6 rounded-2xl border border-border bg-card shadow-sm">
                                    <h4 className="font-semibold mb-6 flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4 text-primary" />
                                        Impact At a Glance
                                    </h4>
                                    <div className="space-y-6">
                                        {study.stats.map((stat, i) => (
                                            <div key={i}>
                                                <div className="flex items-center gap-2 mb-1 text-sm text-muted-foreground">
                                                    <stat.icon className="w-4 h-4" />
                                                    {stat.label}
                                                </div>
                                                <div className="text-2xl font-bold text-foreground break-words">{stat.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                                    <h4 className="font-semibold mb-2">Ready to automate?</h4>
                                    <p className="text-sm text-muted-foreground mb-4">Book a consultation to see how we can transform your workflow.</p>
                                    <Link to="/contact" className="inline-flex justify-center items-center w-full px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
                                        Get in Touch
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

/* Helper component for the website link icon */
function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}

export default EinsteinIQCaseStudy;
