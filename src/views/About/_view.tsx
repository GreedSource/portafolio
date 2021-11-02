import { VFC } from "react";
import { Box } from "@mui/material";
import { useAboutServices } from "./_services";

export const AboutView: VFC = (): JSX.Element => {
  const {} = useAboutServices();
  return <Box>About</Box>;
};

export default AboutView;
