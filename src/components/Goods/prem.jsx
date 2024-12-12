import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './../Goods/Goods.css';

const AutoList = () => {
    const [cars, setCars] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [categoryId, setCategoryId] = useState('');

    // Загрузка категорий
    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/categories/');
            const fetchedCategories = response.data;
            setCategories(fetchedCategories);

            // Устанавливаем первую категорию по умолчанию
            if (fetchedCategories.length > 0) {
                setCategoryId(fetchedCategories[0].id);
            }
        } catch (err) {
            setError('Ошибка загрузки категорий');
        }
    };

    // Загрузка автомобилей
    const fetchCars = async (categoryId) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/autolist/', {
                params: { categories: categoryId },
            });
            setCars(response.data);
        } catch (err) {
            setError('Ошибка загрузки автомобилей');
        } finally {
            setLoading(false);
        }
    };

    // Обработчик изменения категории
    const handleCategoryChange = (e) => {
        setCategoryId(Number(e.target.value));
    };

    // Загрузка данных при монтировании
    useEffect(() => {
        fetchCategories();
    }, []);

    // Загрузка автомобилей при изменении категории
    useEffect(() => {
        if (categoryId) {
            fetchCars(categoryId);
        }
    }, [categoryId]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <div className="select-cont">
                <select className="category" value={categoryId} onChange={handleCategoryChange}>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="container-with-cars">
                {cars.map((car) => (
                    <div className="car-card" key={car.id}>
                        <Link to={`/car/${car.id}`} className="car-image">
                            {car.images?.length > 0 ? (
                                <img src={car.images[0].img} alt={car.title} />
                            ) : (
                                <p>Нет изображения</p>
                            )}
                        </Link>
                        <div className="car-details">
                            <Link to={`/car/${car.id}`} className="car-title">
                                {car.title || 'Название не указано'}
                            </Link>
                            <p><strong>Год:</strong> {car.year || 'Не указан'}</p>
                            <p><strong>Пробег:</strong> {car.mileage || 'Не указан'}</p>
                            <p><strong>Владельцев:</strong> {car.owners || 'Не указано'}</p>
                        </div>
                        <div className="card-price">
                            <p>{car.price || 'Не указана'}₽</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="but-cont">
                <Link to="/form">
                    <button className="add-car-button">
                        Добавить свой авто
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AutoList;