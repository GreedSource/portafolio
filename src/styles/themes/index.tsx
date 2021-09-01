import { Theme } from "@material-ui/core";
import lightTheme from "./_lightTheme";
import darkTheme from "./_darkTheme";

const themeMap: { [key: string]: Theme } = {
  lightTheme,
  darkTheme,
};

export const getThemeByName = (theme: string) => {
  return themeMap[theme];
};
