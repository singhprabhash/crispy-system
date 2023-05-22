import styles from "./headingStyles.module.css"

type Props = {
    content: string
}

export const SubHeader = ({ content }: Props) => {
    return (
        <p className={`text-2xl font-medium text-muted w-fit ${styles.subHeader}`}>
            {content}
        </p>
    )
}