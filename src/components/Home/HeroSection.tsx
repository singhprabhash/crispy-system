import styles from "../../../styles/home.module.css";
import { TypedAnimator } from "../../UI/TypedAnimator";
import Navbar from "../Navbar";
import { typedContent } from "../../../FactoryData/TypedContent";
import { Button } from "../Button";
import { InfoBar } from "./InfoBar";


export default function HeroSection() {
    return (
        <>
            <div className={`${styles.heroSection} h-[500px] w-full`}>
                <Navbar />
                <TypedAnimator wordArray={typedContent}/>
                <div className={`absolute ${styles.btnWrapper}`}>
                    <Button content="Contact" icon={true}/>
                </div>
                <InfoBar />
            </div>
        </>
    )
}