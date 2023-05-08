import styles from "../../styles/home.module.css";
import { TypedAnimator } from "../UI/TypedAnimator";
import Navbar from "./Navbar";
import { typedContent } from "../../FactoryData/TypedContent";
import { Button } from "./Button";


export default function HeroSection() {
    return (
        <div className={`${styles.heroSection} h-[60vh] w-full`}>
            <Navbar />
            <TypedAnimator wordArray={typedContent}/>
            <div className="relative top-60 left-16">
                <Button content="Contact" icon={true}/>
            </div>
        </div>
    )
}