import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ImageIcon } from "lucide-react";
import type { HowItWorksSteps } from "../data/websiteChatbotData";
const WorkCard = ({ data }: { data: HowItWorksSteps }) => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                        {/* {data?.title} */}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {/* {data?.description} */}
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {data?.map((step: HowItWorksSteps, idx: number) => {
                        const isReversed = idx % 2 === 1;
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${isReversed ? "lg:[&>*:first-child]:order-2" : ""
                                    }`}
                            >
                                {/* Image placeholder */}
                                <div className="rounded-xl bg-muted/40 border-2 border-dashed border-border aspect-video flex flex-col items-center justify-center text-muted-foreground">
                                    <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                                    <p className="text-sm font-medium">Add Step {idx + 1} Dashboard Screenshot</p>
                                    <p className="text-xs">/src/assets/how-it-works-{idx + 1}.png</p>
                                </div>

                                {/* Text */}
                                <div>
                                    <div className="text-7xl font-black text-muted/40 leading-none mb-2">
                                        {step?.number}
                                    </div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground">
                                            {step?.title}
                                        </h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed mb-5">
                                        {step?.description}
                                    </p>
                                    {step?.cta && (
                                        <Button variant="outline" className="font-semibold">
                                            {step?.cta} <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WorkCard;
