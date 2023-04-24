import styles from "./SideBar.module.scss"
import {Link} from "react-scroll";

export const SideBar = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.logo}>Ildan-photo</h1>
            <ul className={styles.navigation}>
                <li><Link to={""}></Link>Обо мне</li>
                <li><Link to={""}></Link>Контакты</li>
                <li><Link to={""}></Link>Серии <span className={styles.navigation__toggle}>▼</span></li>
            </ul>
            <div className={styles.slideTabs}>

            </div>
        </div>
    );
};