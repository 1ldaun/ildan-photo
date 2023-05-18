import React from "react";
import styles from "./SideBar.module.scss";
import logoUrl from "../../shared/img/logo.png";
import TabsControlPanel from "../TabsControlPanel/TabsControlPanel";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

export const SideBar = () => {
	const { mode } = useAppSelector((state) => state.appReducer);

	return (
		<div className={styles.wrapper}>
			<Link
				to={mode === "tabs" ? "/gallery/tabs" : "/gallery/table"}
				className={styles.logo}
			>
				<img className={styles.logo__img} src={logoUrl} alt="logo" />
			</Link>
			<ul className={styles.navigation}>
				<li>
					<Link to="/about">Обо мне</Link>
				</li>
			</ul>
			<div className={styles.slideTabs}>
				<TabsControlPanel />
			</div>
		</div>
	);
};
