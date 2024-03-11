import { axiosPrivate } from "../lib/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";
import useNewAuthToken from "./useNewAuthToken";


// ErrorResponse represents the response returned when there is an error
export interface ErrorResponse {
    success: boolean
    action: string
}

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const initToken = useNewAuthToken()
    const { auth } = useAuth();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            // async (response) => {
            //     if ((response && response.status === 204) && response.headers["Authorization"]) {
            //         console.log("New JWT token:", response.headers["Authorization"])
            //         localStorage.setItem("access_token", response.headers["Authorization"])
            //     }

            //     console.log("It was a successful response! Code:",response.status )
            //     return response;
            // },
            async (error) => {
                const prevRequest = error?.config;
                const response = error?.response?.data as ErrorResponse
                if ((error?.response?.status === 401 && !prevRequest?.sent) && response.action === "refresh_token") {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                } else if ((error?.response?.status === 401 && !prevRequest?.sent) && response.action === "new_token"){
                    prevRequest.sent = true;
                    const newAccessToken = await initToken();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh, initToken])

    return axiosPrivate;
}

export default useAxiosPrivate;