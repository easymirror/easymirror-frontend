import { useContext, useDebugValue } from "react";
import AuthContext from "../context/authProvider";

const useAuth = () => {
    const { auth } = useContext(AuthContext)
    useDebugValue(auth, auth => auth?.accessToken)
    return useContext(AuthContext);
}

export default useAuth;