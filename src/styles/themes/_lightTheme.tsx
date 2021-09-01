import { createTheme } from "@material-ui/core";

import { OverridesTheme, ThemeProps } from "./_overrides";

const Props = {};

const mergedProps = {
  ...ThemeProps,
  ...Props,
};

export const lightThemeProps = {
  overrides: OverridesTheme,
  props: mergedProps,
};

export default lightThemeProps;
