import serviceNavData from "../../FactoryData/serviceNavData.json";
import styles from "../../styles/nav.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import { navListTypes } from "@/types";
import MenuItems from "./MenuItems";
import { useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}


export default function Navbar() {

    const [showSideNav, setShowSideNav] = useState(false);

    const enableSideNav = () => {
        console.log("click")
        setShowSideNav(!showSideNav);
    }

    return (
        <>
            <nav
                className={`${styles.navbar} h-[70px] w-full p-3 px-10 fixed top-0 bg-app-white z-50 shadow-sm`}
            >

                <div className={styles.logo}>
                    <Image src="/logo.svg" width={50} height={50} alt="logo" />
                </div>

                <ul className={`${styles.nav} ultra-xs:hidden xs:hidden sm:hidden md:hidden lg:flex flex-1`}>
                    {serviceNavData.map((menu: navListTypes) => (
                        <MenuItems
                            key={menu.id}
                            menuItem={menu}
                        />
                    ))}
                </ul>
                <div className="cursor-pointer" onClick={enableSideNav}>
                    <RxHamburgerMenu className="lg:hidden text-3xl" />
                </div>
            </nav>
            <AnimatePresence>
                {showSideNav && <motion.aside>
                    <motion.ul
                        initial={{ width: 0 }}
                        animate={{
                            width: '66%'
                        }}
                        exit={{
                            width: 0,
                            transition: { duration: 0.3 }
                        }}
                        className={`${styles.nav} ${styles.mobileNav} lg:flex flex-1 shadow-lg w-2/3`}>
                        {serviceNavData.map((menu: navListTypes) => (
                            <MenuItems
                                open={showSideNav}
                                key={menu.id}
                                menuItem={menu}
                            />
                        ))}
                    </motion.ul>
                </motion.aside>}
            </AnimatePresence>
            {showSideNav && <div className="backdrop" onClick={() => setShowSideNav(false)}></div>}
        </>
    );
}
