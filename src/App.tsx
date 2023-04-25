import React, { useEffect } from "react";
import { MainPage } from "./pages/MainPage/MainPage";
import { SideBar } from "./widgets/SideBar/SideBar";
import styles from "./App.module.scss";
import { picturesDispatcher } from "./store/thunks/pictures-dispatcher";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(picturesDispatcher.picturesGetData({}));
  }, []);
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <MainPage />
    </div>
  );
};

export default App;
