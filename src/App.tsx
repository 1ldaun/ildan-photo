import React, {useState} from "react";
import { MainPage } from "./pages/MainPage/MainPage";
import { SideBar } from "./widgets/SideBar/SideBar";
import styles from "./App.module.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage/AboutPage";

const App = () => {
    const [animationFlag, setAnimationFlag] = useState(false);

    const changePicture = (callback: () => void) => {
        setTimeout(() => setAnimationFlag(true), 5);
        setTimeout(callback, 215);
        setTimeout(() => setAnimationFlag(false), 215);
    }

    return (
    <BrowserRouter>
        <div className={styles.wrapper}>
          <SideBar changePicture={changePicture} />
                <Routes>
                    <Route path="/" element={<MainPage animationFlag={animationFlag} changePicture={changePicture}/>} />
                    <Route path="/about" element={<AboutPage/>} />
                </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;
