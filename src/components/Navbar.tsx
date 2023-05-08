import navbarData from "../../FactoryData/navData.json";
import styles from "../../styles/nav.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}></div>
            <ul className={styles.nav}>
                {navbarData.map(({ id, path, title }) => (
                    <li key={id}>
                        <a href={path} className={styles.link}>{title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}