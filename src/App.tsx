import React, {useState} from "react";
import { MainPage } from "./pages/MainPage/MainPage";
import { SideBar } from "./widgets/SideBar/SideBar";
import styles from "./App.module.scss";

const App = () => {
    const [animationFlag, setAnimationFlag] = useState(false);

    const changePicture = (callback: () => void) => {
        setTimeout(() => setAnimationFlag(true), 5);
        setTimeout(callback, 205);
        setTimeout(() => setAnimationFlag(false), 205);
    }

    return (
    <div className={styles.wrapper}>
      <SideBar changePicture={changePicture} />
      <MainPage animationFlag={animationFlag} changePicture={changePicture}/>
    </div>
  );
};

export default App;
