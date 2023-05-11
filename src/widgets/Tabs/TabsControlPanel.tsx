import React from "react";
import styles from "./TabsControlPanel.module.scss";
import { useAppSelector } from "../../hooks/redux";
import { ReactComponent as ArrowLeftSvg } from "../../shared/img/arrow-left.svg";
import { ReactComponent as ArrowRightSvg } from "../../shared/img/arrow-right.svg";
import { ReactComponent as ChangeViewSvg } from "../../shared/img/change-view.svg";
import cx from "classnames";
import { useTabsLogic } from "../../hooks/useTabsLogic";
import { Link } from "react-router-dom";

const TabsControlPanel = () => {
	const { nextTabHandle, prevTabHandle } = useTabsLogic();
	const { currentTab, tabsCount } = useAppSelector(
		(state) => state.tabsReducer,
	);
	const isTabsViewActive = location.pathname.search("/tabs") !== -1;

	return (
		<div className={styles.wrapper}>
			<Link
				to={isTabsViewActive ? "/gallery/table" : "/gallery/tabs"}
				className={cx(styles.control, styles.control_changeView)}
			>
				<ChangeViewSvg />
			</Link>
			{isTabsViewActive && (
				<>
					<div className={styles.counter}>
						{currentTab + 1} из {tabsCount}
					</div>
					<div
						className={cx(styles.control, styles.control_left)}
						onClick={prevTabHandle}
					>
						<ArrowLeftSvg />
					</div>
					<div
						className={cx(styles.control, styles.control_right)}
						onClick={nextTabHandle}
					>
						<ArrowRightSvg />
					</div>
				</>
			)}
		</div>
	);
};

export default TabsControlPanel;
