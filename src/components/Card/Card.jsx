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

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await axios.get(`https://mm-shkurin-abs-api-3258.twc1.net/api/v1/autolist/${id}/`);
                setCar(response.data.post);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCar();
    }, [id]);

    const handleNextImage = () => {
        if (car) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % getCarImages().length);
        }
    };

    const handlePrevImage = () => {
        if (car) {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + getCarImages().length) % getCarImages().length);
        }
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    const getCarImages = () => {
        return [
            car.img,
            car.img1,
            car.img2,
            car.img3,
            car.img4,
        ].filter(Boolean); // Удаляем неопределенные значения
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading car details: {error.message}</p>;
    }

    const carImages = getCarImages();

    return (
        <div className='cars-mb'>
            {car && (
                <div className='car-card'>
                    
                    <h1 className='h1-car'>{car.title}, {car.price}₽</h1>
                    <div className='car-direction'> 
                    <div className='slideshow-container'>
                        {carImages.length > 0 && (
                            <>
                                <img className='card-img' src={`https://mm-shkurin-abs-api-3258.twc1.net${carImages[currentImageIndex]}`} alt={car.title} />
                                <div className="buttons">
                                    
                                </div>
                            </>
                        )}
                    </div>
                    <div className='thumbnail-container'>
                        {carImages.map((image, index) => (
                            <img
                                key={index}
                                className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                                src={`https://mm-shkurin-abs-api-3258.twc1.net${image}`}
                                alt={car.title}
                                onClick={() => handleThumbnailClick(index)}
                            />
                        ))}
                    </div>
                    </div>
                    <div className='card-content'>
                        <h1>{car.title}</h1>
                        <p><strong>Цена</strong>: {car.price}₽</p>
                        <p><strong>Год</strong>: {car.year}г</p>
                        <p><strong>Двигатель</strong>: {car.engine}л</p>
                        <p><strong>Мощность</strong>: {car.power}л.с</p>
                        <p><strong>Коробка</strong>: {car.gearbox}</p>
                        <p><strong>Владельцев</strong>: {car.owners}</p>
                        <p><strong>Пробег</strong>: {car.mileage}км</p>
                        <p className='oclock'>Режим работы <span>🕘</span>9:00-20:00,<span>🕗</span> без выходных <br />ул. Маршала Жукова, 65/1, Омск</p>
                        <button className='car-but'>Связаться по поводу авто</button>
                    </div>

                    <div className='card-content2'>
                        <p><strong>Год</strong>: {car.year}г</p>
                        <p><strong>Двигатель</strong>: {car.engine}л</p>
                        <p><strong>Мощность</strong>: {car.power}л.с</p>
                        <p><strong>Коробка</strong>: {car.gearbox}</p>
                        <p><strong>Владельцев</strong>: {car.owners}</p>
                        <p><strong>Пробег</strong>: {car.mileage}км</p>
                        <p className='oclock'>Режим работы <span>🕘</span>9:00-20:00,<span>🕗</span> без выходных <br />ул. Маршала Жукова, 65/1, Омск</p>
                        <button className='car-but'>Связаться по поводу авто</button>
                    </div>
                
                </div>
            )}
        </div>
    );
};

export default CarDetails;