import { VFC } from "react";
import { Box } from "@mui/material";
import { useContactServices } from "./_services";

export const ContactView: VFC = (props): JSX.Element => {
  const {} = useContactServices();
  return <Box>Contact</Box>;
};

export default ContactView;
