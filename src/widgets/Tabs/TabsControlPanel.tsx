import React from 'react';
import styles from "./TabsControlPanel.module.scss"
import {useAppSelector} from "../../hooks/redux";
import {ReactComponent as ArrowLeftSvg} from "../../shared/img/arrow-left.svg";
import {ReactComponent as ArrowRightSvg} from "../../shared/img/arrow-right.svg";
import {ReactComponent as ChangeViewSvg} from "../../shared/img/change-view.svg";
import cx from "classnames";
import {useTabsLogic} from "../../hooks/useTabsLogic";

const TabsControlPanel = () => {
    const { nextTabHandle, prevTabHandle } = useTabsLogic();
    const { currentTab, tabsCount } = useAppSelector(state => state.tabsReducer);

    return (
        <div className={styles.wrapper}>
            <div className={cx(styles.control, styles.control_changeView)}>
                <ChangeViewSvg/>
            </div>
            <div className={styles.counter}>{currentTab + 1} из {tabsCount}</div>
            <div className={cx(styles.control, styles.control_left)} onClick={prevTabHandle}>
                <ArrowLeftSvg/>
            </div>
            <div className={cx(styles.control, styles.control_right)} onClick={nextTabHandle}>
                <ArrowRightSvg/>
            </div>
        </div>
    );
};

export default TabsControlPanel;