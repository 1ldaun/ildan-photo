import React, { FC } from "react";
import styles from "./TabView.module.scss";
import { mainEndPoint } from "../../store/reducers/ActionCreators";
import cx from "classnames";
import { IPicture } from "../../models/IPicture";
import { useTabsLogic } from "../../hooks/useTabsLogic";
import { useAppSelector } from "../../hooks/redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

interface TabViewProps {
	pictures: IPicture[];
}

const TabView: FC<TabViewProps> = ({ pictures }: TabViewProps) => {
	const { nextTabHandle, prevTabHandle } = useTabsLogic();
	const { currentTab, tabIsLoading } = useAppSelector(
		(state) => state.tabsReducer,
	);

	return (
		<div className={styles.pictureWrapper}>
			<LazyLoadImage
				src={mainEndPoint + pictures[currentTab]?.url}
				className={cx(
					styles.picture,
					tabIsLoading && styles.picture_animation,
					"img-lazy",
				)}
				alt={pictures[currentTab]?.alt}
				loading="lazy"
				effect="blur"
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
