import React, { useState } from "react";
import './../Login/auth.css';
import { useNavigate } from "react-router-dom"; // Для навигации после входа
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false); // Индикатор загрузки
    const navigate = useNavigate(); // Навигация

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Включаем индикатор загрузки
        setMessage(""); // Сбрасываем предыдущее сообщение

        try {
            const response = await axios.post("https://mm-shkurin-abs-api-712a.twc1.net/api/token/", formData);
            const { access, refresh } = response.data;

            // Сохраняем токены в localStorage
            localStorage.setItem("access", access);
            localStorage.setItem("refresh", refresh);

            setMessage("Авторизация успешна!");
            setLoading(false);

            // Перенаправляем пользователя на главную страницу или список авто
            navigate("/list");
        } catch (error) {
            setMessage("Ошибка авторизации. Проверьте логин и пароль.");
            setLoading(false);

            // Сбрасываем только пароль для безопасности
            setFormData({
                ...formData,
                password: "",
            });
        }
    };

    return (
        <div className="container-auth">
            <div className="auth">
                <h2>Авторизация</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <label className="sign" for="sign">Номер телефона</label>
                    <input
                        className="auth-input"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <label className="sign" for="sign">Пароль</label>
                    <input
                        className="auth-input"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button className="auth-input" type="submit" disabled={loading}>
                        {loading ? "Входим..." : "Войти"}
                    </button>
                </form>
                {message && <p>{message}</p>}
                <p>Если нет аккаунта <a className="a-auth" href='/reg'>зарегистрируйтесь</a></p>
            </div>
        </div>
    );
};

export default Login;
