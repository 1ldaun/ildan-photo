import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import { SideBar } from "./widgets/SideBar/SideBar";
import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import SocialBlock from "./widgets/SocialBlock/SocialBlock";

const App = () => {
	return (
		<BrowserRouter>
			<div className={styles.wrapper}>
				<SideBar />
				<SocialBlock />
				<Routes>
					<Route path="/gallery/*" element={<MainPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route
						path="*"
						element={<Navigate to="/gallery/tabs" replace />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
