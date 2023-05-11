import styles from "./MainPage.module.scss";
import { fetchPictures } from "../../store/reducers/ActionCreators";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useTabsLogic } from "../../hooks/useTabsLogic";
import TabView from "../../widgets/TabView/TabView";
import { Route, Routes } from "react-router-dom";
import TableView from "../../widgets/TableView/TableView";

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
			<Routes>
				<Route path="/tabs" element={<TabView pictures={pictures} />} />
				<Route
					path="/table"
					element={<TableView pictures={pictures} />}
				/>
			</Routes>
		</div>
	);
};

export default MainPage;
