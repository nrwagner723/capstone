import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const { user, token, getUserJobs } = useContext(AuthContext);
  return [user, token, getUserJobs];
};

export default useAuth;
