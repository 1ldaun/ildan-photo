import React from 'react';
import {MainPage} from "./pages/MainPage/MainPage";
import {SideBar} from "./widgets/SideBar/SideBar";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
     <SideBar/>
     <MainPage/>
    </div>
  );
}

export default App;
