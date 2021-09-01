export type themeTypes = "lightTheme" | "darkTheme";

interface IObjectKeys {
  [key: string]: string | number;
}

export interface StateProps extends IObjectKeys {
  theme: themeTypes;
}

export const initialState: StateProps = {
  theme: "lightTheme",
};
