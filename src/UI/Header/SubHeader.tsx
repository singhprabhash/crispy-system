import styles from "./headingStyles.module.css"

type Props = {
    content: string
}

export const SubHeader = ({ content }: Props) => {
    return (
        <p className={`text-sm font-extrabold text-app-black-200 my-5 ${styles.subHeader}`}>
            {content}
        </p>
    )
}