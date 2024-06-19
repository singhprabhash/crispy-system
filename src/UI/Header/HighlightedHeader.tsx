import styles from "../../../styles/home.module.css";

type Props = {
    heading?: string
    highlightedHeader?: Boolean,
    highlightedText?: string,
    remainingText?: string
}

export const HighlightedHeader = ({
    heading="", remainingText="", highlightedText=""
}: Props) => {

    return (
        <h1 className="text-4xl font-bold">
            {heading && heading}
            <span
                className={styles.highlighted}
            >
                {highlightedText && highlightedText}
            </span>
            {remainingText && remainingText}
        </h1>
    )
}