import { createTheme } from "@material-ui/core";
import { lightThemeProps } from "./_lightTheme";
import { darkThemeProps } from "./_darkTheme";

const theme = {
  spacing: 10,
};

export const darkTheme = createTheme({
  ...theme,
  ...darkThemeProps,
});

export const lightTheme = createTheme({
  ...theme,
  ...lightThemeProps,
});
