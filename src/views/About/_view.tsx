import { FunctionComponent } from "react";
import { useAboutServices } from "./_services";

export const AboutView: FunctionComponent = (): JSX.Element => {
  const {} = useAboutServices();
  return <div>About</div>;
};

export default AboutView;
