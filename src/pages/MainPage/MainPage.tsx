import styles from "./MainPage.module.scss";
import { fetchPictures } from "../../store/reducers/ActionCreators";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useTabsLogic } from "../../hooks/useTabsLogic";
import TabView from "../../widgets/TabView/TabView";

const MainPage = () => {
	const dispatch = useAppDispatch();
	const { resetTimer } = useTabsLogic();
	const { pictures } = useAppSelector((state) => state.pictureReducer);

	useEffect(() => {
		dispatch(fetchPictures());
		resetTimer();
	}, []);

	return (
		<div className={styles.wrapper}>
			<TabView pictures={pictures} />
		</div>
	);
};

export default MainPage;
