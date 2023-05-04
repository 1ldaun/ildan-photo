import { nextTab, prevTab } from "../store/reducers/ActionCreators";
import { useAppDispatch } from "./redux";

export const useTabsLogic = () => {
	const dispatch = useAppDispatch();
	let autoChangeTimer: NodeJS.Timer;

	const resetTimer = () => {
		if (autoChangeTimer) clearInterval(autoChangeTimer);
		autoChangeTimer = setInterval(() => dispatch(nextTab()), 10000);
	};

	const nextTabHandle = () => {
		dispatch(nextTab());
		resetTimer();
	};
	const prevTabHandle = () => {
		dispatch(prevTab());
		resetTimer();
	};

	return { resetTimer, nextTabHandle, prevTabHandle };
};
