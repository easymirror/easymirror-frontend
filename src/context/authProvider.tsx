import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface AuthContextType {
  auth: any; 
  setAuth: Dispatch<SetStateAction<any>>;
}

const AuthContext = createContext<AuthContextType>({
  auth: {}, // Initial value for auth
  setAuth: () => {} // Initial value for setAuth
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
