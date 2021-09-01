import { StateProps } from "./_state";
import { StateAction, ChangeThemeAction } from "./_actions";

export const themeReducer = (
  state: StateProps,
  action: StateAction
): StateProps => {
  if (action instanceof ChangeThemeAction) {
    const { theme } = action;
    return {
      ...state,
      theme,
    };
  }
  return state;
};
