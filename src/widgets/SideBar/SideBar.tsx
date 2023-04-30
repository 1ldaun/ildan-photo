import styles from "./SideBar.module.scss"
import {Link} from "react-scroll";
import logoUrl from "../../shared/img/logo.png"

export const SideBar = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.logo} src={logoUrl} alt="logo"/>
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