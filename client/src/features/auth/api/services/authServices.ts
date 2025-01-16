import { AxiosError, AxiosInstance } from "axios";
import axios from "../../../../api/http";
import { LoginRequest, LoginResponse, LogoutResponse, RegisterRequest, RegisterResponse, User, Work } from "../../types";
import { io } from 'socket.io-client'

export async function createAccount(credentials: RegisterRequest): Promise<RegisterResponse> {
    const formData = new FormData();

    if (credentials.profileImage) {
        formData.append('profileImage', credentials.profileImage);
    }

    if (credentials.work && Array.isArray(credentials.work)) {
        const workData = credentials.work.map((work: Work) => {
            const workItem: Work = {
                workTitle: work.workTitle,
                workDescription: work.workDescription,
                images: []
            };

            if (Array.isArray(work.images)) {
                work.images.forEach((image: string) => {
                    formData.append('images', image);
                    workItem.images.push(image);
                });
            }

            return workItem;
        });

        formData.append('work', JSON.stringify(workData));
    }

    Object.entries(credentials).forEach(([key, value]) => {
        if (key !== 'profileImage' && key !== 'work') {
            formData.append(key, value);
        }
    });

    try {
        const res = await axios.post('/api/auth/signup', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });

        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('Axios error when creating user:', error.response?.data?.message || error.message);
            throw new Error(error.response?.data?.message || 'Failed to create user');
        }

        console.error('Unexpected error:', error);
        throw new Error('An unexpected error occurred');
    }
}


export async function login(credentials: LoginRequest): Promise<LoginResponse> {
    try {
        const res = await axios.post('/api/auth/login', JSON.stringify(credentials), {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        });
        return res?.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('Axios error when logging in:', error.response?.data?.message || error.message);
            throw new Error(error.response?.data?.message || 'Failed to login');
        }

        console.error('Unexpected error:', error);
        throw new Error('An unexpected error occurred');
    }
}

export async function disconnectSocket(): Promise<void> {
    console.log('disconnected')
    const socket = io('http://localhost:8000');
    socket.disconnect();
}

export async function refreshToken(): Promise<LoginResponse> {
    try {
        const res = await axios.get('/api/auth/refresh', {
            withCredentials: true
        });
        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('Axios error when refreshing token:', error.response?.data?.message || error.message);
            throw new Error(error.response?.data?.message || 'Failed to refresh token');
        }

        console.error('Unexpected error:', error);
        throw new Error('An unexpected error occurred');
    }
}

export async function logout(axiosPrivate: AxiosInstance): Promise<LogoutResponse> {
    try {
        const res = await axiosPrivate.post('/api/auth/logout');
        return res.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('Axios error when logging out:', error.response?.data?.message || error.message);
            throw new Error(error.response?.data?.message || 'Failed to logout');
        }

        console.error('Unexpected error:', error);
        throw new Error('An unexpected error occurred');
    }
}