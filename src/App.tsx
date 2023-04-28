import React, {useEffect} from "react";
import { MainPage } from "./pages/MainPage/MainPage";
import { SideBar } from "./widgets/SideBar/SideBar";
import styles from "./App.module.scss";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchPictures} from "./store/reducers/ActionCreators";

const App = () => {
    const dispatch = useAppDispatch();
    const { pictures } = useAppSelector(state => state.pictureReducer);

    useEffect(() => {
        dispatch(fetchPictures());
    }, [])

  return (
    <div className={styles.wrapper}>
      <SideBar />
      <MainPage />
        {pictures?.map((picture) => <img src={picture.url} alt={picture.alt}/>)}
    </div>
  );
};

export default App;
