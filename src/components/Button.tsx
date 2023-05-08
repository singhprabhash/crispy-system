import { FiMail } from "react-icons/fi"

type Props = {
  content: string;
  icon: Boolean;
};

export const Button = ({ content, icon }: Props) => {
  return (
    <div className="bg-app-black-600 text-app-white-800 w-[120px] rounded-sm flex justify-between align-middle p-3 cursor-pointer">
      <span>{content}</span>
      {icon && <span><FiMail /> </span>}
    </div>
  );
};
