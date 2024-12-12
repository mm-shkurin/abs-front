import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../Goods/form.css';
import { useNavigate } from 'react-router-dom';
import Login from '../Login/login';

const AddCarForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        year: '',
        mileage: '',
        owners: '',
        engine: '',
        power: '',
        gearbox: '',
        images: [],
        categories: [],
    });

    const [categories, setCategories] = useState([]);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();

    // Получение токена
    const getAuthToken = () => localStorage.getItem('access');

    // Проверка токена на истечение
    const isTokenValid = () => {
        const token = getAuthToken();
        if (!token) return false;

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const currentTime = Date.now() / 1000;
            return payload.exp > currentTime; // Проверяем, истек ли токен
        } catch (error) {
            console.error('Ошибка при декодировании токена:', error);
            return false;
        }
    };

    useEffect(() => {
        if (isTokenValid()) {
            setIsAuthorized(true);
            // Загрузка категорий
            axios.get('https://mm-shkurin-abs-api-712a.twc1.net/api/v1/categories/')
                .then(response => setCategories(response.data))
                .catch(err => console.error('Ошибка при загрузке категорий:', err));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            images: Array.from(e.target.files),
        }));
    };

    const handleCategoryChange = (e) => {
        const selectedCategories = Array.from(e.target.selectedOptions, (option) => option.value);
        setFormData((prev) => ({ ...prev, categories: selectedCategories }));
        };

    const handleAddCar = async (e) => {
        e.preventDefault();
        
        const accessToken = getAuthToken();
        const form = new FormData();
        
        form.append('user', JSON.parse(atob(accessToken.split('.')[1])).user_id);
        
        Object.keys(formData).forEach((key) => {
        if (key === 'images') {
        formData.images.forEach((image) => form.append('uploaded_images', image));
        } else if (key === 'categories') {
        formData.categories.forEach((categoryId) => form.append('categories', categoryId));
        } else {
        form.append(key, formData[key]);
        }
        });
        
        try {
        await axios.post('http://127.0.0.1:8000/api/v1/autolist/', form, {
        headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data',
        },
        });
        alert('Автомобиль успешно добавлен!');
        navigate('/');
        } catch (err) {
        console.error('Ошибка при добавлении автомобиля:', err.response ? err.response.data : err.message);
        alert('Ошибка при добавлении автомобиля.');
        }
        };

    // Если пользователь не авторизован, показываем сообщение
    if (!isAuthorized) {
        return <Login />;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Добавить автомобиль</h2>
                <form className="auto-post" onSubmit={handleAddCar}>
                    <input
                        className="inputinform"
                        type="text"
                        name="title"
                        placeholder="Название авто"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className="inputinform"
                        type="text"
                        name="price"
                        placeholder="Цена"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className="inputinform"
                        type="text"
                        name="year"
                        placeholder="Год выпуска"
                        value={formData.year}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        className="inputinform"
                        type="text"
                        name="mileage"
                        placeholder="Пробег"
                        value={formData.mileage}
                        onChange={handleInputChange}
                    />
                    <input
                        className="inputinform"
                        type="text"
                        name="owners"
                        placeholder="Количество владельцев"
                        value={formData.owners}
                        onChange={handleInputChange}
                    />
                    <input
                        className="inputinform"
                        type="text"
                        name="engine"
                        placeholder="Объем двигателя"
                        value={formData.engine}
                        onChange={handleInputChange}
                    />
                    <input
                        className="inputinform"
                        type="text"
                        name="power"
                        placeholder="Мощность двигателя"
                        value={formData.power}
                        onChange={handleInputChange}
                    />
                    <input
                        className="inputinform"
                        type="text"
                        name="gearbox"
                        placeholder="Тип коробки передач"
                        value={formData.gearbox}
                        onChange={handleInputChange}
                    />

                    <p>Выберите категорию:</p>
                    <select
className="selectcat"
name="categories"
multiple
value={formData.categories}
onChange={handleCategoryChange}
>
{categories.map((category) => (
<option key={category.id} value={category.id}>
{category.name}
</option>
))}
</select>

                    <input
                        className="inputinform"
                        type="file"
                        name="images"
                        accept="image/*"
                        onChange={handleFileChange}
                        multiple
                    />

                    {formData.images.length > 0 && (
                        <div className="select-im">
                            <h3>Добавленные изображения:</h3>
                            {formData.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(image)}
                                    alt={`Image ${index + 1}`}
                                    width="100"
                                />
                            ))}
                        </div>
                    )}
                    <button className="but-inform" type="submit">
                        Добавить
                    </button>
                    category.name - Данный веб-сайт выставлен..
                    category.name
                    <button className="but-inform" type="button" onClick={() => navigate('/')}>
                        Отмена
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCarForm;