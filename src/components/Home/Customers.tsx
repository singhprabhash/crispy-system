import styles from "../../../styles/home.module.css";
import { motion } from "framer-motion"

type Props = {
    bgColor: string,
    title: string,
    forText: string,
    tags?: Array<string>
}

export const Customers = ({ bgColor, title, forText, tags }: Props) => {
    return(
        <motion.div 
            whileHover={{ scale: 1.1 }}
            className={`${styles.customerCard} cursor-pointer justify-self-center bg-[#b7f598] px-5 xs:w-full w-9/12`}
        >
            <h2 className="text-2xl font-normal">{ forText }</h2>
            <p className="text-2xl font-bold mt-5 px-8">{ title }</p>
        </motion.div>
    )
}