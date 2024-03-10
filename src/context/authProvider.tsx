import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface Auth {
  accessToken?: string
  refreshToken?: string
}

interface AuthContextType {
  auth: Auth; 
  setAuth: Dispatch<SetStateAction<Auth>>;
}

const AuthContext = createContext<AuthContextType>({
  auth: {}, // Initial value for auth
  setAuth: () => {} // Initial value for setAuth
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<Auth>({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
