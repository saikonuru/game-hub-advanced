import { useContext } from "react";
import AuthContext from "../state-management/contexts/authContext";

const useAuth = () => useContext(AuthContext);

export default useAuth;
