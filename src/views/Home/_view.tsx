import { FunctionComponent } from "react";
import { useHomeServices } from "./_services";

export const HomeView: FunctionComponent = (): JSX.Element => {
  const {} = useHomeServices();
  return <div>Home</div>;
};

export default HomeView;
