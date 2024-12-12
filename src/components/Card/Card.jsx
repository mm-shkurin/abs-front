import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../Card/car.css';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Получение данных об автомобиле
    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await axios.get(`https://mm-shkurin-abs-api-712a.twc1.net/api/v1/autolist/${id}/`);
                setCar(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCar();
    }, [id]);

    // Обработчик переключения на следующее изображение
    const handleNextImage = () => {
        if (car?.images?.length > 0) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % car.images.length);
        }
    };

    // Обработчик переключения на предыдущее изображение
    const handlePrevImage = () => {
        if (car?.images?.length > 0) {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + car.images.length) % car.images.length);
        }
    };

    // Обработчик клика на миниатюру
    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    // Загрузка данных
    if (loading) {
        return <p>Loading...</p>;
    }

    // Ошибка при загрузке данных
    if (error) {
        return <p>Error loading car details: {error.message}</p>;
    }

    // Генерация путей изображений
    const carImages = car?.images?.map((image) => {
        // Обработка относительных и абсолютных путей
        return image.img.startsWith('http')
            ? image.img
            : `http://127.0.0.1:8000${image.img}`;
    }) || [];

    return (
        <div className="cars-mb">
            {car && (
                <div className="car-card">
                    <h1 className="h1-car">{car.title}, {car.price}₽</h1>
                    <div className="car-direction">
                        <div className="slideshow-container">
                            {carImages.length > 0 && (
                                <>
                                    <img
                                        className="card-img"
                                        src={carImages[currentImageIndex]}
                                        alt={`${car.title} - ${currentImageIndex + 1}`}
                                    />
                                    <div className="buttons">
                                        <button onClick={handlePrevImage}></button>
                                        <button onClick={handleNextImage}></button>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="thumbnail-container">
                            {carImages.map((image, index) => (
                                <img
                                    key={index}
                                    className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="card-content">
                        <h1>{car.title}</h1>
                        <p><strong>Цена</strong>: {car.price}₽</p>
                        <p><strong>Год</strong>: {car.year}г</p>
                        <p><strong>Двигатель</strong>: {car.engine}л</p>
                        <p><strong>Мощность</strong>: {car.power}л.с</p>
                        <p><strong>Коробка</strong>: {car.gearbox}</p>
                        <p><strong>Владельцев</strong>: {car.owners}</p>
                        <p><strong>Пробег</strong>: {car.mileage}км</p>
                        <p className="oclock">
                            Режим работы <span>🕘</span>9:00-20:00,<span>🕗</span> без выходных
                            <br />ул. Маршала Жукова, 65/1, Омск
                        </p>
                        <a href="https://t.me/absoluteomsk555"><button className='car-but'>Связаться по поводу авто</button></a>
                    </div>
                    <div className='card-content2'>
                        <p><strong>Год</strong>: {car.year}г</p>
                        <p><strong>Двигатель</strong>: {car.engine}л</p>
                        <p><strong>Мощность</strong>: {car.power}л.с</p>
                        <p><strong>Коробка</strong>: {car.gearbox}</p>
                        <p><strong>Владельцев</strong>: {car.owners}</p>
                        <p><strong>Пробег</strong>: {car.mileage}км</p>
                        <p className='oclock'>Режим работы <span>🕘</span>9:00-20:00,<span>🕗</span> без выходных <br />ул. Маршала Жукова, 65/1, Омск</p>
                        <a href="https://t.me/absoluteomsk555"><button className='car-but'>Связаться по поводу авто</button></a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarDetails;