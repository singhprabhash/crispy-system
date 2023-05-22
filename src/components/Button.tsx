import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import styles from "../../styles/button.module.css";
import { motion } from "framer-motion";

type Props = {
  content: string;
  icon: Boolean;
  arrowIcon: Boolean;
  animateOnLoad?: Boolean;
};

export const Button = ({ content, icon, arrowIcon, animateOnLoad }: Props) => {
  const button = (
      <>
        <span className="text-xl">{content}</span>
        {icon && (
          <span className="text-xl">
            <AiOutlineMail />
          </span>
        )}
        {arrowIcon && (
          <span className="text-2xl">
            <HiOutlineArrowSmRight />
          </span>
        )}
      </>
    );

  const classes = `bg-app-black-600 text-app-white-800 w-[200px] rounded-md flex justify-evenly items-center p-3 cursor-pointer ${styles.btn} mt-10`;

  return (
    <>
      {animateOnLoad && (
        <motion.div
          initial={{
            x: -500,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          className={classes}
        >
          {button}
        </motion.div>
      )}
      {!animateOnLoad && <div className={`${classes} !my-12`}>{button}</div>}
    </>
  );
};
