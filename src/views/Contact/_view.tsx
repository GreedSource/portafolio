import { FunctionComponent } from "react";
import { useContactServices } from "./_services";

export const ContactView: FunctionComponent = (): JSX.Element => {
  const {} = useContactServices();
  return <div>Contact</div>;
};

export default ContactView;
