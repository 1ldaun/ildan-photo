import styles from "./SideBar.module.scss"
import {Link} from "react-scroll";

export const SideBar = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.logo}>Ildan-photo</h1>
            <ul>
                <li><Link to={""}></Link>Обо мне</li>
                <li><Link to={""}></Link>Контакты</li>
                <li><Link to={""}></Link>Серии</li>
            </ul>
            <div className={styles.slideTabs}>

            </div>
        </div>
    );
};