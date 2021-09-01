export const OverridesTheme = {
  MuiAppBar: {
    colorPrimary: {
      backgroundColor: "#FFC0CB",
    },
  },
  MuiCard: {
    root: {
      padding: 20,
    },
  },
};

export const ThemeProps = {
  MuiAppBar: {
    elevation: 0,
  },
  MuiButton: {
    disableElevation: true,
    variant: "contained" as const,
  },
  MuiCard: {
    elevation: 0,
  },
};
