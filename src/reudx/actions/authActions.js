import { SUCCESS_AUTHORIZATION, AUTH_LOGOUT } from "../actionTypes.js";


export const successAuth = (payload) => ({
    type: SUCCESS_AUTHORIZATION,
    payload
});

export const logoutAuth = () => ({
    type: AUTH_LOGOUT
})