import styles from "./MainPage.module.scss";
import {fetchPictures, mainEndPoint, nextTab, prevTab} from "../../store/reducers/ActionCreators";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import cx from "classnames";

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const { pictures } = useAppSelector(state => state.pictureReducer);
    const { currentTab } = useAppSelector(state => state.tabsReducer)

    useEffect(() => {
        dispatch(fetchPictures());
    }, []);

    const nextTabHandle = () => dispatch(nextTab());
    const prevTabHandle = () => dispatch(prevTab());

    return (
        <div className={styles.wrapper}>
            <img src={mainEndPoint + pictures[currentTab]?.url} className={styles.picture} alt={pictures[currentTab]?.alt} loading="lazy"/>
            <div className={cx(styles.controlButton, styles.controlButton_left)} onClick={nextTabHandle}><span>{"<"}</span></div>
            <div className={cx(styles.controlButton, styles.controlButton_right)} onClick={prevTabHandle}><span>{">"}</span></div>
        </div>
    );
};