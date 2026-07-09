import { cn } from "@/lib/utils";
import {
    MessageSquare,
    Bot,
    FileText,
    Link2,
    User,
    Sparkles,
    Radio,
    Workflow,
    LayoutGrid,
    ChevronDown,
    Brain,
    Webhook,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";


const productItems = [
    // { icon: User, title: "Lead Centre", desc: "Manage, track & organize", path: "/product/lead-centre" },
    { icon: Brain, title: "AI WhatsApp Chatbot", desc: "GPT-powered chatbot", path: "/product/ai-whatsapp-bot" },
    { icon: Bot, title: "WhatsApp Chatbots", desc: "Automate WhatsApp conversations", path: "/product/whatsapp-chatbot" },
    { icon: Brain, title: "AI Sales Agent", desc: "Revenue, sales, call handling", path: "/ai-sales-agent" },
    { icon: MessageSquare, title: "WhatsApp Marketing", desc: "Broadcast, Automate & Grow", path: "/product/whatsapp-marketing" },
    { icon: MessageSquare, title: "Website Chatbot", desc: "Flow-based chatbot for websites", path: "/product/website-chatbot" },
    { icon: Sparkles, title: "AI Website Chatbot", desc: "GPT-powered AI replies", path: "/product/ai-chatbot" },
    // { icon: Megaphone, title: "AI Ads Manager", desc: "5X your leads" },
    { icon: Radio, title: "Email Marketing", desc: "Campaigns, automations & newsletters", path: "/product/email-marketing" },

    // { icon: CreditCard, title: "WhatsApp Payments", desc: "Collect payments in chat" },
    { icon: FileText, title: "WhatsApp Forms", desc: "Collect data via WhatsApp", path: "/product/whatsapp-forms" },
    { icon: Link2, title: "WhatsApp Link & QR", desc: "Generate links & QR codes", path: "/product/whatsapp-link-qr" },

    // { icon: BadgeCheck, title: "WhatsApp Blue Tick", desc: "Get verified badge" },
    // { icon: ShoppingBag, title: "Showroom Kit", desc: "Showcase products" },
    // { icon: User, title: "AiKarsy", desc: "AI personal assistant" },
];

const featureItems = [
    { icon: LayoutGrid, title: "Features Overview", desc: "All features at a glance" },
    { icon: Radio, title: "WhatsApp Broadcasting", desc: "Send bulk messages" },
    { icon: Sparkles, title: "AI WhatsApp Chatbot", desc: "Smart AI conversations" },
    { icon: Workflow, title: "Chatbot Flow Builder", desc: "Visual flow builder" },
    { icon: FileText, title: "Forms", desc: "Data collection forms" },
    { icon: Webhook, title: "Webhook", desc: "Capture leads from websites" },
];
const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    return (
        <nav className="relative w-full border-gray-200 bg-white sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center gap-1">
                                {/* <div>
                                    <span className=" text-primary/90! text-5xl font-bold">K</span>
                                </div> */}
                                <div className="flex flex-col">
                                    <span className="text-2xl text-primary font-bold">Kyra</span>
                                    {/* <span className="text-gray-800 text-xs whitespace-nowrap uppercase font-semibold">IT Solution</span> */}

                                </div>

                            </Link>
                        </div>
                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-6">

                            {/* <Link to="/about" className="text-gray-750 hover:text-primary font-medium! transition-colors">
                                About
                            </Link> */}
                            {/* <Link to="/product" className="text-gray-700 hover:text-primary text-sm font-medium transition-colors">
                                Product
                            </Link> */}

                            {/* <Link to="#review" className="text-gray-700 hover:text-primary text-sm font-medium transition-colors">
                                Review
                            </Link> */}

                            <NavDropdown label="Product" items={productItems} />
                            <NavDropdown label="Features" items={featureItems} />
                            <Link to="/pricing" className="text-gray-750  hover:text-primary  font-medium! transition-colors">
                                Pricing
                            </Link>

                        </div>
                    </div>
                    {/* CTA Buttons */}
                    <div className="flex items-center gap-3">
                        <Button
                            onClick={() => {
                                window.location.href =
                                    "https://crm-backend-7lf9.onrender.com/api/auth/google";
                                // "http://localhost:3000/api/auth/google";
                            }}
                            className="text-gray-700 whitespace-nowrap hover:text-gray-900 text-sm font-medium px-4 py-2 rounded-lg  text-white hover:bg-gray-50 transition-colors"
                        >
                            Login →
                        </Button>
                        <button
                            onClick={() => {
                                window.location.href =
                                    "https://crm-backend-7lf9.onrender.com/api/auth/google";
                            }}
                            className="bg-primary hidden md:block  whitespace-nowrap hover:bg-primary/80 text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors"
                        >
                            Start for FREE →
                        </button>
                        <button
                            onClick={() => setIsMobileNavOpen((prev) => !prev)}
                            className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMobileNavOpen && <MobileNav isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen} />}
        </nav>
    )
}

export default Header


function NavDropdown({
    label,
    items,
}: {
    label: string;
    items: { icon: any; title: string; desc: string, path?: string }[];
}) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative hidden md:block"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button className="flex items-center gap-1  hover:text-foreground transition-colors">
                {label}
                <ChevronDown className={cn("h-3 w-3 transition-transform", open && "rotate-180")} />
            </button>
            {open && (
                <div className="absolute top-full left-0 mt-1 bg-popover  rounded-md shadow-md p-4 grid grid-cols-1 gap-1 w-75 animate-slide-in z-50">
                    {items.map((item) => (
                        <Link to={item.path || ""}
                            key={item.title}
                            className="flex items-start gap-3 p-2 rounded-xl hover:bg-secondary transition-colors text-left group"
                        >
                            <div className="group-hover:bg-primary/10 transition-colors shrink-0">
                                <item.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-medium text-xm">{item.title}</p>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}




const MobileNav = ({ isMobileNavOpen, setIsMobileNavOpen }: { isMobileNavOpen: boolean; setIsMobileNavOpen: (open: boolean) => void }) => {
    const navigate = useNavigate();
    const [openId, setOpenId] = useState<number | null>(null);
    const navItems = [
        {
            label: "Product",
            items: [
                { title: "Lead Centre", desc: "Manage, track & organize", path: "/product/lead-centre" },
                { title: "Website Chatbot", desc: "Flow-based chatbot for websites", path: "/product/website-chatbot" },
                { title: "AI Website Chatbot", desc: "GPT-powered AI replies", path: "/product/ai-chatbot" },
                { title: "WhatsApp Chatbots", desc: "Automate WhatsApp conversations", path: "/product/whatsapp-chatbot" },
                { title: "AI WhatsApp Chatbot", desc: "GPT-powered chatbot", path: "/product/ai-whatsapp-bot" },
                { title: "WhatsApp Marketing", desc: "Broadcast, Automate & Grow", path: "/product/whatsapp-marketing" },
                { title: "Email Marketing", desc: "Campaigns, automations & newsletters", path: "/product/email-marketing" },
                { title: "WhatsApp Forms", desc: "Collect data via WhatsApp", path: "/product/whatsapp-forms" },
                { title: "WhatsApp Link & QR", desc: "Generate links & QR codes", path: "/product/whatsapp-link-qr" },
            ],
        },
        {
            label: "Features",
            items: [
                { title: "Features Overview", desc: "All features at a glance" },
                { title: "WhatsApp Broadcasting", desc: "Send bulk messages" },
                { title: "AI WhatsApp Chatbot", desc: "Smart AI conversations" },
                { title: "Chatbot Flow Builder", desc: "Visual flow builder" },
                { title: "Forms", desc: "Data collection forms" },
                { title: "Webhook", desc: "Capture leads from websites" },
            ],
        },
        {
            label: "Company",
            items: [
                { title: "About", desc: "Learn more about our company", path: "/about" },
                { title: "Team", desc: "Meet the people behind the scenes", path: "/team" },
                { title: "Careers", desc: "Join our amazing team", path: "/careers" },
                { title: "Contact", desc: "Get in touch with us", path: "/contact" },
            ],
        },
        {
            label: " Resources",
            items: [
                { title: "Documentation", desc: "Comprehensive guides and documentation", path: "/documentation" },
                { title: "API Reference", desc: "Detailed API reference for developers", path: "/api-reference" },
                { title: "Community", desc: "Join our vibrant community", path: "/community" },
                { title: "Support", desc: "Get assistance and support", path: "/support" },
            ],
        },
        {
            label: "Trust & Security",
            items: [
                { title: "Trust Center", desc: "Learn about our security practices", path: "/trust-and-security" },
                { title: "Cookies", desc: "Understand our cookie policy", path: "/cookies" },
                { title: "Privacy Policy", desc: "Read our privacy policy", path: "/privacy-policy" },
                { title: "Terms of Service", desc: "Review our terms of service", path: "/terms" },
            ],
        },
    ];
    if (!isMobileNavOpen) return null;
    return (
        <div className="md:hidden overflow-y-auto hide-scrollbar bg-white h-screen fixed top-14 left-0 w-full z-50 px-5 pt-5 pb-18 border-t border-slate-100 shadow-[0_12px_24px_-12px_rgba(15,23,42,0.08)] divide-y divide-slate-100">
            {
                navItems.map((navItem, index) => (
                    <div key={index} className="py-4 first:pt-0">
                        <h4 onClick={() => setOpenId(openId === index ? null : index)} className="text-sm font-semibold uppercase tracking-widest text-slate-800 mb-3 cursor-pointer select-none flex items-center justify-between hover:text-indigo-600 transition-colors duration-150">
                            {navItem.label}
                        </h4>
                        {/* {openId === index && ( */}
                        <ul className="space-y-1">
                            {navItem.items.map((item: any, itemIndex: number) => (
                                <li key={itemIndex}>
                                    <button
                                        onClick={() => { setIsMobileNavOpen(false); navigate(item.path); }}
                                        className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 active:bg-indigo-100 active:scale-[0.98] transition-all duration-150">
                                        {item.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        {/* )} */}
                    </div>
                ))
            }
        </div>

    )
}