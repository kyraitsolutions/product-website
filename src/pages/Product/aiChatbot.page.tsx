import WhyBuild from "./components/WhyBuild"
import WorkCard from "./components/WorkCard"
import CtaBanner from "./components/CtaBanner"
import Banner from "./components/Banner"
import { aiChatbotData } from "./data/websiteChatbotData"

const AiChatbotPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Banner heroData={aiChatbotData.heroData} />
            <WhyBuild whyBuildData={aiChatbotData.whyBuildData} />
            {/* <AddOnFeature /> */}
            {/* <FeatureSplit /> */}
            <WorkCard data={aiChatbotData.howItWorksSteps} />
            <CtaBanner />
        </div>
    )
}

export default AiChatbotPage