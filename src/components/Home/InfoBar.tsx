import styles from "../../../styles/home.module.css";
import { infoCard } from "@/FactoryData/infoCardData";
import { HorizontalCard } from "../Cards/HorizontalCard";

export const InfoBar = () => {
    return (
        <div className={`${styles.infoSection} w-11/12 p-6 rounded-sm grid ultra-xs:w-full ultra-xs:!left-0 ultra-xs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-between`}>
            {infoCard.map(({ content, id, icon }) => (
                <HorizontalCard content={content} key={id} icon={icon} />
            ))}
        </div>
    )
}