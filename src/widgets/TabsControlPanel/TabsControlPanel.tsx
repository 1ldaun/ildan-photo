import React from "react";
import styles from "./TabsControlPanel.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ReactComponent as ArrowLeftSvg } from "../../shared/img/arrow-left.svg";
import { ReactComponent as ArrowRightSvg } from "../../shared/img/arrow-right.svg";
import { ReactComponent as ChangeViewSvg } from "../../shared/img/change-view.svg";
import { ReactComponent as ChangeViewTableSvg } from "../../shared/img/change-view-2.svg";
import cx from "classnames";
import { useTabsLogic } from "../../hooks/useTabsLogic";
import { switchAppMode } from "../../store/reducers/ActionCreators";
import { Link } from "react-router-dom";

const TabsControlPanel = () => {
	const dispatch = useAppDispatch();
	const { nextTabHandle, prevTabHandle } = useTabsLogic();
	const { currentTab, tabsCount } = useAppSelector(
		(state) => state.tabsReducer,
	);
	const { mode } = useAppSelector((state) => state.appReducer);

	const switchModeHandle = () => dispatch(switchAppMode());

	return (
		<div className={styles.wrapper}>
			<Link
				to={mode === "tabs" ? "/gallery/table" : "/gallery/tabs"}
				onClick={switchModeHandle}
				className={cx(styles.control, styles.control_changeView)}
			>
				{mode === "tabs" ? <ChangeViewSvg /> : <ChangeViewTableSvg />}
			</Link>
			{mode === "tabs" && (
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
