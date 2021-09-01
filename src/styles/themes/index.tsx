import { Theme } from "@material-ui/core";
import { lightTheme, darkTheme } from "./_createTheme";

const themeMap: { [key: string]: Theme } = {
  lightTheme,
  darkTheme,
};

export const getThemeByName = (theme: string) => {
  return themeMap[theme];
};
