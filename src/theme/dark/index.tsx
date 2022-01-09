import _ from "lodash";
import { createTheme } from "@mui/material";
import SharedThemeProps from "../shared";
import palette from "./_Palette";

export const DarkThemeProps = {
  palette,
};

export const DarkTheme = createTheme(_.merge(DarkThemeProps, SharedThemeProps));

export default DarkTheme;
