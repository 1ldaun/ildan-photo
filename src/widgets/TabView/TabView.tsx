import React, { FC } from "react";
import styles from "./TabView.module.scss";
import { mainEndPoint } from "../../store/reducers/ActionCreators";
import cx from "classnames";
import { IPicture } from "../../models/IPicture";
import { useTabsLogic } from "../../hooks/useTabsLogic";
import { useAppSelector } from "../../hooks/redux";

import "react-lazy-load-image-component/src/effects/blur.css";

interface TabViewProps {
	pictures: IPicture[];
}

const TabView: FC<TabViewProps> = ({ pictures }: TabViewProps) => {
	const { nextTabHandle, prevTabHandle, setTabLoadedHandle } = useTabsLogic();
	const { currentTab, tabIsLoading } = useAppSelector(
		(state) => state.tabsReducer,
	);

	return (
		<div className={styles.pictureWrapper}>
			<img
				src={mainEndPoint + pictures[currentTab]?.url}
				onLoad={setTabLoadedHandle}
				className={cx(
					styles.picture,
					tabIsLoading && styles.picture_animation,
				)}
				alt={pictures[currentTab]?.alt}
			/>
			<div
				className={cx(styles.controlButton, styles.controlButton_left)}
				onClick={nextTabHandle}
			>
				<span>{"<"}</span>
			</div>
			<div
				className={cx(styles.controlButton, styles.controlButton_right)}
				onClick={prevTabHandle}
			>
				<span>{">"}</span>
			</div>
		</div>
	);
};

export default TabView;
