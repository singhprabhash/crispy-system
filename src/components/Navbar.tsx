import serviceNavData from "../../FactoryData/serviceNavData.json";
import styles from "../../styles/nav.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineExpandMore } from "react-icons/md";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { childrenProps } from "../../types";
import Image from "next/image";

export default function Navbar() {
    const [show, setShow] = useState(false);

    const showSubMenu = () => setShow(true);
    const hideSubMenu = () => setShow(false);


    useEffect(() => { }, [show]);

    return (
        <nav
            className={`${styles.navbar} h-[70px] w-full p-3 px-10 fixed top-0 bg-app-white z-50 shadow-sm`}
        >

            <div className={styles.logo}>
                <Image src="/logo.svg" width={50} height={50} alt="logo"/>
            </div>

            <ul className={`${styles.nav} ultra-xs:hidden xs:hidden md:flex`}>
                {serviceNavData.map(({ id, path, title, children }) => (
                    <li
                        key={id}
                        className="text-sm font-medium flex items-center relative"
                        onMouseEnter={showSubMenu}
                    >
                        <a
                            href={path}
                            className={`${styles.link} ${children ? "mr-2" : ""
                                }`}
                        >
                            {title}
                        </a>
                        {children && <MdOutlineExpandMore className={`font-bold ${show ? 'rotate-180 transition-all' : ''}`} />}

                        {/* {children && show && (
                            children.map((menuItem : childrenProps) => (
                                <Dropdown
                                    key={id}
                                    menuItems={menuItem}
                                    hideSubMenu={hideSubMenu}
                                />
                            ))
                        )} */}
                    </li>
                ))}
            </ul>

            <RxHamburgerMenu className="sm:hidden text-3xl cursor-pointer" />
            <div className={`backdrop ${show ? "show" : ""}`}></div>
        </nav>
    );
}
