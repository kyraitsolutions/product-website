import { motion } from "framer-motion";
import type { WhyBuildData } from "../data/websiteChatbotData";

const WhyBuild = ({ whyBuildData }: { whyBuildData: WhyBuildData }) => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        {whyBuildData?.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">{whyBuildData?.description}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {whyBuildData?.features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="text-center px-4"
                            >
                                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Icon />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-3">
                                    {feature?.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature?.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyBuild;
