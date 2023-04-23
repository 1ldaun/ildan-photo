import styles from "./MainPage.module.scss";
import {SideBar} from "../../widgets/SideBar/SideBar";

export const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <SideBar/>
        </div>
    );
};