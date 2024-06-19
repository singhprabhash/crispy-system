import styles from "../../../styles/home.module.css";
import { HighlightedHeader } from "./HighlightedHeader";

type HeaderProps = {
    heading?: string
    highlightedHeader?: Boolean,
    highlightedText?: string,
    remainingText?: string
}

export const Header = (props: HeaderProps) => {
    return (
        <div className="header">
            {props.highlightedHeader && <HighlightedHeader {...props}/>}
        </div>
    )
}