import { Briefcase, ArrowRight, Heart, GraduationCap, Users, Sparkles } from "lucide-react";

export default function Careers() {
    const benefits = [
        {
            icon: Heart,
            title: "Work-Life Balance",
            description:
                "Flexible work culture that helps you stay productive while maintaining a healthy lifestyle.",
        },
        {
            icon: GraduationCap,
            title: "Continuous Learning",
            description:
                "Access to courses, certifications, mentorship, and opportunities to grow your career.",
        },
        {
            icon: Users,
            title: "Amazing Team",
            description:
                "Collaborate with passionate designers, developers, and innovators building impactful products.",
        },
        {
            icon: Sparkles,
            title: "Innovative Projects",
            description:
                "Build modern SaaS products powered by AI, automation, and cloud technologies.",
        },
    ];

    const openings = [
        {
            title: "Frontend Developer",
            type: "Full Time",
            location: "Remote / Hybrid",
            experience: "2-4 Years",
        },
        {
            title: "Backend Developer",
            type: "Full Time",
            location: "Remote / Hybrid",
            experience: "3+ Years",
        },
        {
            title: "UI/UX Designer",
            type: "Full Time",
            location: "Remote",
            experience: "2+ Years",
        },
        {
            title: "DevOps Engineer",
            type: "Full Time",
            location: "Hybrid",
            experience: "3+ Years",
        },
    ];

    return (
        <main className="bg-background">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

                <div className="max-w-[1480px] relative mx-auto px-8 py-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                            <Briefcase className="mr-2 h-4 w-4" />
                            Join Our Team
                        </div>

                        <h1 className="text-2xl font-bold  text-foreground md:text-5xl">
                            Build the Future
                            <span className="block text-primary">
                                With Us
                            </span>
                        </h1>

                        <p className="mt-6 text-lg  text-muted-foreground">
                            We're building products that help businesses automate operations,
                            improve guest experiences, and grow faster. Join a team where your
                            ideas make a real impact.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <a
                                href="#openings"
                                className="rounded-xl bg-primary px-5 py-2 font-medium text-primary-foreground transition hover:opacity-90"
                            >
                                View Open Positions
                            </a>

                            <a
                                href="#culture"
                                className="rounded-xl border border-primary px-5 py-2 font-medium text-primary transition hover:bg-primary/10"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Join */}
            <section
                id="culture"
                className="max-w-[1480px] mx-auto px-8 py-20"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold">
                        Why You'll Love Working Here
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        We believe great products come from empowered people. That's why we
                        invest in our team's growth, well-being, and success.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-xl"
                            >
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                                    <Icon className="h-7 w-7 text-primary" />
                                </div>

                                <h3 className="text-xl font-semibold">{item.title}</h3>

                                <p className="mt-3 text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Open Positions */}
            <section
                id="openings"
                className="bg-muted/40 py-20"
            >
                <div className="max-w-[1400px] mx-auto px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">
                            Current Openings
                        </h2>

                        <p className="mt-4 text-muted-foreground">
                            Find the role that matches your passion.
                        </p>
                    </div>

                    <div className="w-full mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {openings.map((job) => (
                            <div
                                key={job.title}
                                className="rounded-xl border bg-background p-6 transition hover:border-primary hover:shadow-lg"
                            >
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            {job.title}
                                        </h3>

                                        <div className="mt-3 flex flex-wrap gap-3 text-sm">
                                            <span className="rounded-full text-sm bg-primary/10 px-3 py-1 text-primary">
                                                {job.type}
                                            </span>

                                            <span className="rounded-full text-sm bg-muted px-3 py-1">
                                                {job.location}
                                            </span>

                                            <span className="rounded-full text-sm bg-muted px-3 py-1">
                                                {job.experience}
                                            </span>
                                        </div>
                                    </div>

                                    <button className="inline-flex  gap-2 rounded-xl bg-primary px-5 py-2 font-medium text-primary-foreground transition hover:opacity-90">
                                        Apply Now
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-[1480px] mx-auto px-8 py-24">
                <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
                    <h2 className="text-3xl font-bold">
                        Don't See the Right Role?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
                        We're always looking for talented people. Send us your resume and
                        we'll reach out when a suitable opportunity becomes available.
                    </p>

                    <button className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-primary transition hover:scale-105">
                        Send Your Resume
                    </button>
                </div>
            </section>
        </main>
    );
}
