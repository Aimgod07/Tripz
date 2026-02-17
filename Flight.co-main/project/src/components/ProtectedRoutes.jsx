import {Navigate} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { useState,useEffect } from 'react';

import api from '../api';
import { ACCESS_TOKEN,REFRESH_TOKEN } from '../constants';

function ProtectedRoutes({children}) {
    const refreshToken = async ()=>{
        const refresh_token = localStorage.getItem(REFRESH_TOKEN);
        try {
            const response = await api.post('http://localhost:8000/api/token/refresh/', { 
                refresh: refresh_token 
            });
            if (response.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.error('Error refreshing token:', error);
            setIsAuthorized(false);
        }   

    }

    const [isAuthorized, setIsAuthorized] = useState(null);
       const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return;
        }
        const decodedToken = jwtDecode(token)
        const tokenExpiry = decodedToken.exp
        const now = Date.now()/100;

        if (tokenExpiry < now) {
            // Token has expired, try to refresh
             await refreshToken();
        } else {
            // Token is valid
            setIsAuthorized(true);
        }

    };


    useEffect(() => {
        auth().catch(()=>setIsAuthorized(false));
    }, [])
    
    
 

   if (isAuthorized === null) {
        return <div>Loading...</div>;
    }
    return isAuthorized ? children : <Navigate to="/login" />;


}
export default ProtectedRoutes;