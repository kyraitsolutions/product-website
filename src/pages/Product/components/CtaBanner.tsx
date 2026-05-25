import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaBanner = () => {
    return (
        <section className="py-20 bg-background">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto px-4"
            >
                <div className="rounded-2xl bg-primary text-primary-foreground p-12 text-center shadow-xl">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Ready to launch your AI Website Chatbot?
                    </h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Capture leads, qualify prospects, and convert more visitors — all on autopilot.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="font-semibold">
                            Start for FREE <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="font-semibold bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                        >
                            Book a Demo
                        </Button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CtaBanner;
