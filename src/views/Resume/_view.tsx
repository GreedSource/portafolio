import { VFC } from "react";
import { Box } from "@mui/material";
import { useResumeServices } from "./_services";

export const ResumeView: VFC = (props): JSX.Element => {
  const {} = useResumeServices();
  return <Box>Resume</Box>;
};

export default ResumeView;
