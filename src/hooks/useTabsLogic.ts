import {clearTabs, nextTab, prevTab, setTabLoaded} from "../store/reducers/ActionCreators";
import { useAppDispatch } from "./redux";

export const useTabsLogic = () => {
	const dispatch = useAppDispatch();

	const nextTabHandle = () => {
		dispatch(nextTab());
	};
	const prevTabHandle = () => {
		dispatch(prevTab());
	};
	const setTabLoadedHandle = () => {
		dispatch(setTabLoaded());
	};
	const clearTabsHandle = () => {
		dispatch(clearTabs());
	};

	return { nextTabHandle, prevTabHandle, setTabLoadedHandle, clearTabsHandle };
};
