import { ReactNode } from "react";
import styles from "./styles.module.css";
import { IconType } from "react-icons";
import { createElement } from 'react';

type Props = {
    content: string,
    icon: IconType
}

export const HorizontalCard = ({ content, icon }: Props) => {
    return(
        <div className={`${styles.card} justify-center items-center`}>
            <div className={styles.cardIcon}>
                {createElement(icon, { className: `${styles.icon} text-5xl` })}
            </div>
            <div className={styles.cardContent}>
                <p>Free analysis tools</p>
            </div>
        </div>
    );
}