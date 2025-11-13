
const LOCAL_BASE_URL = "http://localhost:3000";
const PROD_BASE_URL = "https://cms-server-one.vercel.app";

export const BASE_URL =
    window.location.hostname === "localhost" ? LOCAL_BASE_URL : PROD_BASE_URL;

export const API_PATHS = {
    AUTH: {
        LOGIN: "/api/v1/auth/login",
        SIGNUP: "/api/v1/auth/signup",
        GET_USER_INFO: "/api/v1/auth/getuser",
        GET_ALL_USER: '/api/v1/auth/getalluser'
    },
    ADMIN: {
        ADD_DOCTOR: "/api/v1/admin/add-doctor",
        GET_DOCTORS: "/api/v1/admin/doctors",
        UPDATE_DOCTOR: (id) => `/api/v1/admin/update-doctor/${id}`,
        DELETE_DOCTOR: (id) => `/api/v1/admin/delete-doctor/${id}`,
        ADD_ROOM: "/api/v1/admin/rooms/add-room",
        GET_ROOMS: "/api/v1/admin/rooms/get",
        OVERVIEW: "/api/v1/admin/overview",
    },
    PATIENT: {
        BOOK_APPOINTMENT: "/api/v1/patient/book-appointment",
        GET_SLOTS: (doctorId, date) => `/api/v1/patient/slots?doctorId=${doctorId}&date=${date}`,
        GET_MY_APPOINTMENT: "/api/v1/patient/my-appointment",
        GET_TODAY_DOCTORS: "/api/v1/doctor/today-doctors",
        GET_STATS: "/api/v1/patient/stats",
        GET_DATA: "/api/v1/patient/get-data",
    },
    DOCTOR: {
        OVERVIEW: "/api/v1/doctor/overview",
        PROFILE: "/api/v1/doctor/profile",
        GET_PATIENTS: "/api/v1/doctor/patients"
    }

};
