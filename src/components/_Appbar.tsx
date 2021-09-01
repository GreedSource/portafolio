import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Box,
  Theme,
  createStyles,
  Tooltip,
} from "@material-ui/core";
import { Menu, BrightnessLow, BrightnessHigh } from "@material-ui/icons";
import { useThemeListener, ChangeThemeAction } from "../styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    toolbar: {
      justifyContent: "space-between",
    },
  })
);

export interface AppbarProps {
  open: boolean;
  handleDrawer: () => void;
}

export const Appbar = ({ open, handleDrawer }: AppbarProps) => {
  const classes = useStyles();
  const { state, dispatch } = useThemeListener();
  const handleThemeChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(
      new ChangeThemeAction(
        state.theme === "lightTheme" ? "darkTheme" : "lightTheme"
      )
    );
  };
  return (
    <AppBar
      color="default"
      position="fixed"
      className={clsx(classes.root, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Material UI
            {/* ITI. Joel García */}
          </Typography>
        </Box>
        <Box>
          <Tooltip title="Change theme" aria-label="change">
            <IconButton
              color="inherit"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleThemeChange}
            >
              {state.theme === "lightTheme" ? (
                <BrightnessHigh />
              ) : (
                <BrightnessLow />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
