import axios from "../lib/axios"
import useAuth from './useAuth';

const REFRESH_PATH = "/api/v1/auth/refresh"
export interface RefreshResponse {
    access_token: string
    success: boolean
}

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const refresh = async () => {
        const resp = await axios.get(REFRESH_PATH, {
            withCredentials: true
        });
        const response = resp.data as RefreshResponse
        setAuth((prev) => {
            return { ...prev, accessToken: response.access_token }
        });
        return response.access_token;
    }
    return refresh;
};

export default useRefreshToken;
