import {AppDispatch} from "../store";
import {globalIndicator} from "../slices/global-indicator";

export interface Indicator {
    showIndicator(): void;
    hideIndicator(): void;
}

export interface IndicatorFactory {
    create(dispatch: AppDispatch): Indicator;
}

export const globalIndicatorFactory: IndicatorFactory = {
    create(dispatch: AppDispatch) {
        const showIndicator = () => {
            dispatch(globalIndicator.actions.show(""));
        }
        const hideIndicator = () => {
            dispatch(globalIndicator.actions.hide(""));
        }
        return {showIndicator, hideIndicator};
    },
}