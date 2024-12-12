import React, { useState } from "react";
import './../Login/auth.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import axios from "axios";
import Login from "./login";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/register/", formData);
            setMessage("Регистрация прошла успешно. Теперь вы можете авторизоваться.");
        } catch (error) {
            setMessage("Ошибка регистрации. Проверьте введённые данные.");
        }
    };

    return (
        <div className="container-auth">
            <div className="auth">
            <h2>Регистрация</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                <input
                    className="auth-input"
                    type="text"
                    name="username"
                    placeholder="Номер телефона"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                className="auth-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                className="auth-input"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button className="auth-input" type="submit">Зарегистрироваться</button>
            </form>
            <p>{message}</p>
            
            </div>
        </div>
    );
};

export default Register;