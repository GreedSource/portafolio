import { useHistory } from "react-router-dom";

export const useAppBarServices = () => {
  const history = useHistory();
  const handleRedirect = (path: string) => {
    history.push(path);
  };
  return {
    handleRedirect,
  };
};

export default useAppBarServices;
