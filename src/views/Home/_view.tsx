import { VFC } from "react";
import { Box } from "@mui/material";
import { useHomeServices } from "./_services";

export const HomeView: VFC = (props): JSX.Element => {
  const {} = useHomeServices();
  return <Box>Home</Box>;
};

export default HomeView;
