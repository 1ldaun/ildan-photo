import styles from "./MainPage.module.scss";
import {fetchPictures, mainEndPoint, nextTab, prevTab} from "../../store/reducers/ActionCreators";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import cx from "classnames";

interface MainPageProps {
    animationFlag: boolean;
    changePicture: (x: () => void) => void;
}

export const MainPage = ({animationFlag, changePicture}: MainPageProps) => {
    const dispatch = useAppDispatch();
    const { pictures } = useAppSelector(state => state.pictureReducer);
    const { currentTab } = useAppSelector(state => state.tabsReducer)
    let autoChangeTimer: NodeJS.Timer;

    const resetTimer = () => {
        if (autoChangeTimer)
            clearInterval(autoChangeTimer);
        autoChangeTimer = setInterval(() => changePicture(() => dispatch(nextTab())), 10000);
    }

    const nextTabHandle = () => {
        changePicture(() => dispatch(nextTab()));
    }
    const prevTabHandle = () => {
        changePicture(() => dispatch(prevTab()));
    };

    useEffect(() => {
        dispatch(fetchPictures());
        resetTimer();
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.pictureWrapper}>
                <img src={mainEndPoint + pictures[currentTab]?.url} className={cx(styles.picture, animationFlag && styles.picture_animation)} alt={pictures[currentTab]?.alt} loading="lazy"/>
                <div className={cx(styles.controlButton, styles.controlButton_left)} onClick={nextTabHandle}><span>{"<"}</span></div>
                <div className={cx(styles.controlButton, styles.controlButton_right)} onClick={prevTabHandle}><span>{">"}</span></div>
            </div>
        </div>
    );
};