import Trustcenter from './components/Trustcenter'
import { trustCenterData } from './data/TrustcenterData'
const TrustCenterPage = () => {
    return (
        <div>
            {trustCenterData.trustCenter.sections.map(section => (
                <section
                    key={section.id}
                    id={section.id}
                    className="border-b"
                >
                    <Trustcenter section={section} />
                </section>
            ))}

        </div>
    )
}

export default TrustCenterPage