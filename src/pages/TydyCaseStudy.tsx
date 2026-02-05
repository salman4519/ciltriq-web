import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Clock, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AnimatedGrid } from "@/components/ui/AnimatedGrid";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const TydyCaseStudy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const study = {
        title: "Tydy",
        subtitle: "Automating the Sales Lifecycle",
        date: "15 Oct 2024",
        readTime: "3 min read",
        image: "/tydy.png",
        tags: ["Automation", "CRM Integration", "Zoho Books"],
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
        introduction: "Tydy, a fast-growing brand, faced a significant bottleneck in their order management process. With daily volumes reaching 50-100 orders, the manual validation and entry of data were consuming valuable resources and slowing down fulfillment. They partnered with Ciltriq to automate their entire sales lifecycle, aiming for speed, accuracy, and scalability.",
        challenges: [
            "High Daily Touchpoints: Managing 50-100 customer interactions daily was operationally intensive.",
            "Manual Data Entry: Logging customer location and address details into the CRM was prone to human error.",
            "Invoice Delays: Generating invoices manually in Zoho Books and emailing them created a backlog.",
            "Response Lag: Delays in initial customer contact led to potential drop-offs."
        ],
        solution: {
            text: "Ciltriq implemented a comprehensive automated sales agent that integrated seamlessly with Tydy's existing stack. This solution took over the entire post-order workflow.",
            points: [
                "Automated Customer Guidance: The system automatically engages with customers to confirm details instantly.",
                "CRM Integration: Seamlessly logs location, address, and order specifics directly into the CRM without manual intervention.",
                "Zero-Touch Invoicing: Automatically generates invoices via Zoho Books and emails them to customers immediately upon validation.",
                "24/7 Availability: Ensures no lead or order is left waiting, regardless of the time of day."
            ]
        },
        results: [
            "70% Reduction in Operational Time: The team can now focus on growth/strategy instead of data entry.",
            "30-40% Increase in Conversion Rate: Faster response times directly correlated with higher conversion.",
            "Streamlined Fulfillment: Zero manual errors in the address and invoice generation process.",
            "Instant Scalability: The systems handles 10x spikes in volume with no additional headcount."
        ],
        quote: {
            text: "Ciltriq's automation has completely transformed our operations. We can now focus on growth while the system handles the heavy lifting of order management.",
            author: "Operations Head, Tydy"
        },
        benefits: [
            "Operational Efficiency: Drastic reduction in manual overhead.",
            "Rapid Scalability: Handle peak loads effortlessly.",
            "Enhanced Customer Experience: Instant responses and immediate invoicing.",
            "Data Accuracy: Elimination of manual entry errors."
        ],
        conclusion: "Tydy's adoption of Ciltriq's automation demonstrates the transformative power of integrating smart agents into daily workflows. By removing manual bottlenecks, they have unlocked a new tier of efficiency and growth."
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
                                <h3 className="text-2xl font-semibold mb-4 text-foreground">The Solution: {study.title} Automation</h3>
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

                            {/* Integration Badge */}
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 w-fit px-3 py-1.5 rounded-full border border-border/50">
                                    <FaWhatsapp className="text-base text-green-500" />
                                    <span className="font-medium">Integrated with WhatsApp Automation</span>
                                </div>
                            </div>

                            {/* Results */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-foreground">The Results</h3>
                                <div className="grid gap-4">
                                    {study.results.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/10 border border-border/50">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                                                <TrendingUp className="w-5 h-5" />
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
                                                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
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

export default TydyCaseStudy;
