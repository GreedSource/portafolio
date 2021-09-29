import { createTheme } from "@mui/material";
import _ from "lodash";

import SharedThemeProps from "../shared";

export const LightThemeProps = {};

export const LightTheme = createTheme(
  _.merge(LightThemeProps, SharedThemeProps)
);

export default LightTheme;
