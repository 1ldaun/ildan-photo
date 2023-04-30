import styles from "./SideBar.module.scss"
import logoUrl from "../../shared/img/logo.png"
import TabsControlPanel from "../Tabs/TabsControlPanel";
import {Link} from "react-router-dom";

interface SideBarProps {
    changePicture: (x: () => void) => void;
}

export const SideBar = ({changePicture}: SideBarProps) => {
    return (
        <div className={styles.wrapper}>
            <Link to="/" className={styles.logo}><img className={styles.logo__img} src={logoUrl} alt="logo"/></Link>
            <ul className={styles.navigation}>
                <li><Link to="/about">Обо мне</Link></li>
            </ul>
            <div className={styles.slideTabs}>
                <TabsControlPanel changePicture={changePicture} />
            </div>
        </div>
    );
};