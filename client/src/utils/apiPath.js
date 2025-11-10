// utils/apiPaths.js

// Base URLs for local and production
const LOCAL_BASE_URL = "http://localhost:3000"; // backend port
const PROD_BASE_URL = "";

// Detect environment automatically
export const BASE_URL =
    window.location.hostname === "localhost" ? LOCAL_BASE_URL : PROD_BASE_URL;

// All API endpoints
export const API_PATHS = {
    AUTH: {
        LOGIN: "/api/v1/auth/login",
        SIGNUP: "/api/v1/auth/signup",
        GET_USER_INFO: "/api/v1/auth/getuser",
    },
    ADMIN: {
        ADD_DOCTOR: "/api/v1/admin/add-doctor",
        GET_DOCTORS: "/api/v1/admin/doctors",
        UPDATE_DOCTOR: (id) => `/api/v1/admin/update-doctor/${id}`,
        DELETE_DOCTOR: (id) => `/api/v1/admin/delete-doctor/${id}`,
        ADD_ROOM: "/api/v1/admin/rooms/add-room",
        GET_ROOMS: "/api/v1/admin/rooms/get",
    },
    PATIENT: {
        BOOK_APPOINTMENT: "/api/v1/patient/book-appointment",
        GET_SLOTS: (doctorId, date) => `/api/v1/patient/slots?doctorId=${doctorId}&date=${date}`,
        GET_MY_APPOINTMENT: "/api/v1/patient/my-appointment"
    },

};
