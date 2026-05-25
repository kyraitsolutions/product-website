import Banner from "./components/Banner"
import WorkCard from "./components/WorkCard"
import CtaBanner from "./components/CtaBanner"
import WhyBuild from "./components/WhyBuild"
import { websiteChatbotData } from "./data/websiteChatbotData"

const WebsiteChatbotPage = () => {
    return (
        <div>
            <Banner heroData={websiteChatbotData.heroData} />
            <WhyBuild whyBuildData={websiteChatbotData.whyBuildData} />
            <WorkCard data={websiteChatbotData.howItWorksSteps} />
            <CtaBanner />
        </div>
    )
}

export default WebsiteChatbotPage