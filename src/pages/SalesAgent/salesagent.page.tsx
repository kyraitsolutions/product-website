import {
    Bot,
    PhoneCall,
    BrainCircuit,
    ShieldCheck,
    Workflow,
    ArrowRight,
    Mail,
    Sparkles,
} from "lucide-react";

export default function SalesAgent() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50" />

                <div className="relative mx-auto max-w-[1480px] px-6 py-24 lg:flex lg:items-center lg:justify-between">

                    {/* Left */}

                    <div className="max-w-3xl">

                        <span className="inline-flex place-items-center items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                            🚀 Coming Soon
                        </span>

                        <h1 className="mt-6 text-3xl md:text-5xl max-md:text-center font-bold leading-tight text-gray-900">
                            AI Sales Agent that
                            <span className="text-primary">
                                {" "}Answers Calls,
                                Qualifies Leads &
                                Closes Deals
                            </span>
                        </h1>

                        <p className="mt-6 text-md leading-8 text-gray-600">
                            Kyra AI Sales Agent answers customer calls in real-time,
                            understands conversations using LLMs, handles objections,
                            qualifies leads, books appointments and integrates directly
                            with your CRM.
                        </p>

                        {/* Newsletter */}

                        <div className="mt-10 flex md:max-w-lg rounded-xl border bg-white">

                            <input
                                placeholder="Enter your work email"
                                className="flex-1 rounded-l-xl px-3 md:px-6 py-3 outline-none"
                            />

                            <button className="rounded-xl bg-primary whitespace-nowrap px-3 md:px-8 font-semibold text-white hover:opacity-90">
                                Notify Me
                            </button>

                        </div>

                        <p className="mt-3 text-sm text-gray-500">
                            Join our early access program.
                        </p>

                    </div>

                    {/* Right */}

                    <div className="mt-20 lg:mt-0">

                        <div className="rounded-xl border bg-white p-8 shadow-xl">

                            <Bot className="h-14 w-14 md:h-20 md:w-20 text-primary" />

                            <div className="mt-8 space-y-5">

                                <Feature
                                    icon={<PhoneCall size={20} />}
                                    title="Real-Time Voice Calls"
                                />

                                <Feature
                                    icon={<BrainCircuit size={20} />}
                                    title="LLM Powered Conversations"
                                />

                                <Feature
                                    icon={<Workflow size={20} />}
                                    title="CRM Integration"
                                />

                                <Feature
                                    icon={<ShieldCheck size={20} />}
                                    title="Enterprise Security"
                                />

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* Features */}

            <section className="mx-auto max-w-[1480px] px-6 py-24">

                <div className="text-center">

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Why Businesses Love Kyra AI
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Built to automate sales conversations from the first hello.
                    </p>

                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    <Card
                        icon={<PhoneCall />}
                        title="24×7 Voice Agent"
                        desc="Never miss an inbound customer call."
                    />

                    <Card
                        icon={<BrainCircuit />}
                        title="AI Conversations"
                        desc="Natural conversations powered by LLMs."
                    />

                    <Card
                        icon={<Workflow />}
                        title="Lead Qualification"
                        desc="Automatically qualify and score leads."
                    />

                    <Card
                        icon={<ShieldCheck />}
                        title="CRM Sync"
                        desc="Push conversations directly into your CRM."
                    />

                    <Card
                        icon={<Sparkles />}
                        title="Objection Handling"
                        desc="AI responds intelligently to customer objections."
                    />

                    <Card
                        icon={<Bot />}
                        title="Human Handoff"
                        desc="Transfer calls whenever needed."
                    />

                </div>

            </section>

            {/* How it Works */}

            <section className="bg-gray-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <h2 className="text-center text-4xl font-bold">
                        How It Works
                    </h2>

                    <div className="mt-16 grid gap-10 md:grid-cols-4">

                        {[
                            "Customer Calls",
                            "AI Answers",
                            "Qualifies Lead",
                            "CRM Updated",
                        ].map((step, index) => (
                            <div
                                key={step}
                                className="rounded-xl bg-white p-6 text-center shadow"
                            >
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                                    {index + 1}
                                </div>

                                <h3 className="mt-6 font-semibold">{step}</h3>
                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="py-28 px-5">

                <div className="mx-auto max-w-4xl rounded-3xl bg-slate-800 px-5 md:px-10 py-10 text-center text-white">

                    <Mail className="mx-auto h-10 w-10" />

                    <h2 className="mt-6 text-4xl font-bold">
                        Join the Waitlist
                    </h2>

                    <p className="mt-4 text-lg opacity-90">
                        Be among the first businesses to experience AI-powered voice sales.
                    </p>

                    <div className="mt-10 flex mx-auto md:max-w-xl rounded-xl bg-white">

                        <input
                            className="flex-1 rounded-xl px-3 md:px-5 py-3 text-black outline-none"
                            placeholder="Your work email"
                        />

                        <button className="flex items-center gap-2  whitespace-nowrap rounded-xl bg-primary px-5 md:px-8 py-1 font-semibold text-white">
                            <span className="hidden md:block">Notify Me</span>
                            <ArrowRight size={18} />
                        </button>

                    </div>

                </div>

            </section>
        </div>
    );
}

function Feature({
    icon,
    title,
}: {
    icon: React.ReactNode;
    title: string;
}) {
    return (
        <div className="flex items-center gap-4 rounded-xl border p-4">
            <div className="rounded-lg bg-primary/10 p-3 text-primary">
                {icon}
            </div>

            <span className="font-medium">{title}</span>
        </div>
    );
}

function Card({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <div className="rounded-xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

            <div className="inline-flex rounded-xl bg-primary/10 p-4 text-primary">
                {icon}
            </div>

            <h3 className="mt-6 text-xl font-semibold">
                {title}
            </h3>

            <p className="mt-3 text-gray-600">
                {desc}
            </p>

        </div>
    );
}