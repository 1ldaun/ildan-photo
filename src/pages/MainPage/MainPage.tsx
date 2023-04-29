import styles from "./MainPage.module.scss";
import {fetchPictures, mainEndPoint} from "../../store/reducers/ActionCreators";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const { pictures } = useAppSelector(state => state.pictureReducer);

    useEffect(() => {
        dispatch(fetchPictures());
    }, []);

    return (
        <div className={styles.wrapper}>
            {!!pictures && pictures.map((picture) => <img src={mainEndPoint + picture.url} alt={picture.alt}/>)}
        </div>
    );
};