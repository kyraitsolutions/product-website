import { ArrowRight, Check, Copy, MessageCircle, QrCode } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function WhatsappQR() {
    const [country, setCountry] = useState("India");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [generatedLink, setGeneratedLink] = useState("");

    const generateLink = () => {
        if (!phone) return;

        const cleanPhone = phone.replace(/\D/g, "");

        const link = `https://wa.me/${cleanPhone}${message ? `?text=${encodeURIComponent(message)}` : ""
            }`;

        setGeneratedLink(link);
    };

    const copyLink = async () => {
        if (!generatedLink) return;
        await navigator.clipboard.writeText(generatedLink);
    };

    return (
        <main className="py-20 bg-background text-sm">
            {/* Hero */}
            <div className="max-w-[1480px] mx-auto px-4 md:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
                        <MessageCircle size={17} />
                        Kyra IT Solutions
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                        WhatsApp Link Generator
                    </h1>

                    <p className="mt-4 text-muted-foreground">
                        Create a WhatsApp link for your business in seconds.
                    </p>
                </div>
            </div>

            {/* Generator */}
            <section className="max-w-[1480px] mx-auto px-4 md:px-8 mt-20">
                <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
                    {/* Form */}
                    <div>
                        <div className="">
                            <h2 className="text-2xl font-semibold">
                                Create Your WhatsApp Link
                            </h2>

                            <p className="mt-2 text-muted-foreground">
                                Enter your WhatsApp number and an optional message.
                            </p>

                            {/* Phone */}
                            <div className="mt-8">
                                <label className="mb-2 block font-medium">
                                    WhatsApp Phone Number
                                </label>

                                <p className="mb-3 text-muted-foreground">
                                    Select your country and enter your phone number.
                                </p>

                                <div className="flex gap-3">
                                    <select
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        className="w-32 rounded-xl border bg-background px-4 py-3 outline-none focus:border-primary"
                                    >
                                        <option>India</option>
                                        <option>USA</option>
                                        <option>UK</option>
                                        <option>UAE</option>
                                    </select>

                                    <div className="flex flex-1 items-center rounded-xl border bg-background focus-within:border-primary">
                                        <span className="border-r px-4 text-muted-foreground">
                                            +91
                                        </span>

                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="Your phone number"
                                            className="w-full bg-transparent px-4 py-3 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="mt-8">
                                <label className="mb-2 block font-medium">
                                    Custom Message
                                </label>

                                <p className="mb-3 text-muted-foreground">
                                    Add the message you want customers to send.
                                </p>

                                <textarea
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Hi, I would like to know more about your services."
                                    className="w-full resize-none rounded-xl border bg-background px-4 py-3 outline-none focus:border-primary"
                                />
                            </div>

                            <button
                                onClick={generateLink}
                                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
                            >
                                Generate Link
                                <ArrowRight size={18} />
                            </button>

                            {/* Generated Link */}
                            {generatedLink && (
                                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="font-semibold">
                                            Your WhatsApp Link
                                        </span>

                                        <button
                                            onClick={copyLink}
                                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground"
                                        >
                                            <Copy size={15} />
                                            Copy
                                        </button>
                                    </div>

                                    <p className="break-all text-muted-foreground">
                                        {generatedLink}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="">
                        <div className="sticky top-24">
                            <h3 className="mb-4 font-semibold">WhatsApp Preview</h3>

                            <div className="border p-3 rounded-xl overflow-hidden ">
                                {/* Header */}
                                <div className="flex items-center gap-3 bg-primary px-5 py-4 text-primary-foreground">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                                        <MessageCircle size={20} />
                                    </div>

                                    <div>
                                        <p className="font-semibold">Kyra IT Solutions</p>
                                        <p className="opacity-80">Online</p>
                                    </div>
                                </div>

                                {/* Chat */}
                                <div className="flex h-[390px] flex-col justify-end bg-muted/40 p-4">
                                    {message ? (
                                        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-3 text-primary-foreground">
                                            {message}
                                        </div>
                                    ) : (
                                        <div className="mx-auto text-center text-muted-foreground">
                                            Your message preview
                                        </div>
                                    )}
                                </div>

                                {/* Input */}
                                <div className="flex items-center gap-2 border-t bg-white p-3">
                                    <div className="flex-1 rounded-full bg-muted px-4 py-2 text-muted-foreground">
                                        Type a message
                                    </div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="bg-muted/30 py-10">
                <div className="max-w-[1480px] mx-auto px-4 md:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-4xl font-bold md:text-5xl">
                            Everything You Need
                        </h2>

                        <p className="mt-4 text-muted-foreground">
                            Create, share and use your WhatsApp business link anywhere.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                icon: MessageCircle,
                                title: "WhatsApp Link",
                                description:
                                    "Create a direct WhatsApp link for your business.",
                            },
                            {
                                icon: QrCode,
                                title: "QR Code Ready",
                                description:
                                    "Turn your WhatsApp link into a QR code.",
                            },
                            {
                                icon: Check,
                                title: "Easy to Share",
                                description:
                                    "Add your link to websites, ads and social media.",
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-xl border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                                >
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Icon size={22} />
                                    </div>

                                    <h3 className="text- font-semibold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-[1480px] mx-auto px-4 md:px-8 py-20">
                <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
                    <h2 className="text-4xl font-bold md:text-5xl">
                        Want More Than a WhatsApp Link?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl opacity-90">
                        Automate WhatsApp conversations, capture leads and manage your
                        customers with Kyra AI CRM.
                    </p>

                    <div className="mt-10">

                        <Link to="https://crm.kyraitsolutions.com/login" target="_blank" className="rounded-xl bg-white px-7 py-3 font-semibold text-primary transition hover:scale-105">
                            Explore Kyra AI CRM
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}