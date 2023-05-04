import styles from "./MainPage.module.scss";
import {
	fetchPictures,
	mainEndPoint,
} from "../../store/reducers/ActionCreators";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import cx from "classnames";
import { useTabsLogic } from "../../hooks/useTabsLogic";

const MainPage = () => {
	const dispatch = useAppDispatch();
	const { resetTimer, nextTabHandle, prevTabHandle } = useTabsLogic();
	const { pictures } = useAppSelector((state) => state.pictureReducer);
	const { currentTab, tabIsLoading } = useAppSelector(
		(state) => state.tabsReducer,
	);

	useEffect(() => {
		dispatch(fetchPictures());
		resetTimer();
	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles.pictureWrapper}>
				<img
					src={mainEndPoint + pictures[currentTab]?.url}
					className={cx(
						styles.picture,
						tabIsLoading && styles.picture_animation,
					)}
					alt={pictures[currentTab]?.alt}
					loading="lazy"
				/>
				<div
					className={cx(
						styles.controlButton,
						styles.controlButton_left,
					)}
					onClick={nextTabHandle}
				>
					<span>{"<"}</span>
				</div>
				<div
					className={cx(
						styles.controlButton,
						styles.controlButton_right,
					)}
					onClick={prevTabHandle}
				>
					<span>{">"}</span>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
