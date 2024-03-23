import axios from "../lib/axios"
import useAuth from './useAuth';

const INIT_PATH = "/api/v1/auth/init"
export interface RefreshResponse {
    access_token: string
    success: boolean
}

const useNewAuthToken = () => {
    const { setAuth } = useAuth();
    const refresh = async () => {
        const resp = await axios.get(INIT_PATH, {
            withCredentials: true
        });
        const response = resp.data as RefreshResponse
        setAuth((prev) => {
            return { ...prev, accessToken: response.access_token }
        });
        localStorage.setItem("access_token", response.access_token)
        return response.access_token;
    }
    return refresh;
};

export default useNewAuthToken;
