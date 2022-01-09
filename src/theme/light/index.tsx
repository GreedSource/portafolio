import _ from "lodash";
import { createTheme } from "@mui/material";
import palette from "./_Palette";
import SharedThemeProps from "../shared";

export const LightThemeProps = {
  palette,
};

export const LightTheme = createTheme(
  _.merge(LightThemeProps, SharedThemeProps)
);

export default LightTheme;
