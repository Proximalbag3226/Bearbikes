import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const getUserInfo = () => {
    const token = localStorage.getItem("token");
    if (token) {
        const decoded = jwt_decode(token);
        return decoded;
    }
    return null;
};

export const Home = () => {
    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {
        const user = getUserInfo();
        if (user) {
            setUserInfo(user);
        }
    }, []);
};