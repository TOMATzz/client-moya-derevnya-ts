//специальный тип который предоставляет redax
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch: () => AppDispatch = useDispatch