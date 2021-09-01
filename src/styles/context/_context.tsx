import React, { FunctionComponent, useContext } from "react";
import { StateAction } from "./_actions";
import { initialState, StateProps } from "./_state";

export const Context = React.createContext<{
  state: StateProps;
  dispatch: React.Dispatch<StateAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

interface ThemeContextProps {
  state: StateProps;
  dispatch: React.Dispatch<StateAction>;
}

export const ThemeContext: FunctionComponent<ThemeContextProps> = (props) => {
  return <Context.Provider value={props}>{props.children}</Context.Provider>;
};

export const useThemeListener = (): ThemeContextProps => {
  return useContext(Context);
};
