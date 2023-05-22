import { Header } from "@/src/UI/Header/Header"
import styles from "../../../styles/home.module.css"
import { SubHeader } from "@/src/UI/Header/SubHeader"
import featureData from "../../../FactoryData/services.json";
import { FlashCards } from "../Cards/FlashCards";

export const Testimonials = () => {
    return (
        <div className={`${styles.featureWrapper} snap-start h-screen p-8 lg:p-16 mt-10`}>
            <Header
                highlightedHeader
                heading=""
                highlightedText="Testimonials"
                remainingText=""
            />
            <SubHeader 
                content="Get ultra-competitive spreads and commissions across all asset classes. Receive even better rates as your volume increases."
            />
            <div className="card-list">
                {featureData.map((data: any, idx:any) => (
                    <FlashCards 
                        key={idx}
                        date={data.date}
                        title={data.title}
                        src={data.src}
                        alt={data.alt}
                        authorPrefix={data.authorPrefix}
                        authorFullName={data.authorFullName}
                        tags={data.tags}
                    />
                ))}
            </div>

        </div>
    )
}