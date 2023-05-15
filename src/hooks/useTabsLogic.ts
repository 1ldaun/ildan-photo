import { nextTab, prevTab } from "../store/reducers/ActionCreators";
import { useAppDispatch } from "./redux";

export const useTabsLogic = () => {
	const dispatch = useAppDispatch();

	const nextTabHandle = () => {
		dispatch(nextTab());
	};
	const prevTabHandle = () => {
		dispatch(prevTab());
	};

	return { nextTabHandle, prevTabHandle };
};
