import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setCredentials } from '@/src/features/auth/authSlice';
import styles from '../styles/auth.module.css';
import { toast } from 'react-toastify';


const GoogleSign = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const handleGooglBtn = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const { access_token } = tokenResponse;
                const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`);
                const userProfile = res.data;

                console.log(userProfile);

                try {
                    const response = await axios.post('https://seeme-nga3.onrender.com/api/users', {
                        email: userProfile.email,
                        username: userProfile.family_name,
                        password: process.env.NEXT_PUBLIC_PASSWORD,
                        image: userProfile.picture,
                        accessToken: access_token,
                    });
                    const user = response.data;
                    console.log(user);
                   
                    router.push('/call');
                } catch (error) {
                
                    if (error.response && error.response.status === 400) { 
                        // Attempt to log in the user
                        const loginResponse = await axios.post('https://seeme-nga3.onrender.com/api/users/auth', {
                            email: userProfile.email,
                            password: process.env.NEXT_PUBLIC_PASSWORD,
                        });
                        const user = loginResponse.data;
                        console.log(user);
                       
                        dispatch(setCredentials(user));
                        router.push('/call');
                    } else {
                        throw error;
                    }
                }
            } catch (error) {
                console.error(error);
                toast.error('An error occurred. Please try again.');
            }
        },
        onError: error => console.log(error),
    });

    return (
        <button type='button' className={styles['google-btn']} onClick={() => handleGooglBtn()}>
            <img
                src='https://res.cloudinary.com/duz7maquu/image/upload/v1716030524/SeeMe/Group_cdzfut.svg'
                alt='Google'
            />
            Google
        </button>
    );
}

export default GoogleSign;
