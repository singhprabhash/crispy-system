import navbarData from "../../FactoryData/navData.json";
import styles from "../../styles/nav.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    
    
    return (
        <nav className={`${styles.navbar} h-auto w-full p-3 px-10 fixed top-0 bg-app-white z-50 shadow-md`}>
            {/* <div className=""></div> */}
            <div className={styles.logo}>Logo</div>
            <ul className={`${styles.nav} ultra-xs:hidden xs:hidden sm:flex`}>
                {navbarData.map(({ id, path, title }) => (
                    <li key={id} className="text-lg font-normal flex items-center relative">
                        <a href={path} className={styles.link}>{title}</a>
                    </li>
                ))}
            </ul>
            <RxHamburgerMenu className="sm:hidden text-3xl cursor-pointer"/>
        </nav>
    )
}