import { OverridesTheme, ThemeProps } from "./_overrides";

const Props = {};

const mergedProps = {
  ...ThemeProps,
  ...Props,
};

export const darkThemeProps = {
  overrides: OverridesTheme,
  props: mergedProps,
  palette: {
    type: "dark" as const,
  },
};

export default darkThemeProps;
