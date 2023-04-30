import styles from "./AboutPage.module.scss";
import React from "react";
import aboutImg from "../../shared/img/about_v1.jpg"

export const AboutPage = () => {

    return (
        <div className={styles.wrapper}>
            <p className={styles.content}>Всем привет! Меня зовут Ильдан, и я не фотограф. Мне просто нравится фотографировать, работать с хорошей техникой.
                На этом сайте вы можете найти ту часть моих снимков, которые имеют достаточную ценность для самого меня.
                Надеюсь, вам, как и мне, будет приятно возвращаться на этот сайт и наблюдать за тем, как меняется все вокруг нас. ❤</p>
            <img src={aboutImg} alt="about" className={styles.aboutImg}/>
        </div>
    );
};