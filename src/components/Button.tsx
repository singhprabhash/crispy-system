import { AiOutlineMail } from "react-icons/ai"
import styles from "../../styles/button.module.css";

type Props = {
  content: string;
  icon: Boolean;
};

export const Button = ({ content, icon }: Props) => {
  return (
    <div className={`bg-app-black-600 text-app-white-800 w-[140px] rounded-md flex justify-evenly items-center p-3 cursor-pointer ${styles.btn}`}>
      <span>{content}</span>
      {icon && <span><AiOutlineMail /> </span>}
    </div>
  );
};
