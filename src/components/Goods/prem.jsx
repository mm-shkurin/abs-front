import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../Goods/Goods.css';
import { Link } from 'react-router-dom';

const AutoList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryId, setCategoryId] = useState(1);

  const fetchCars = async (category) => {
    setLoading(true);
    setError(null); // Сброс ошибки перед новым запросом
    try {
      const response = await axios.get(`https://mm-shkurin-abs-api-3258.twc1.net/api/v1/autolist/?category=${category}`);
      setCars(response.data.posts);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars(categoryId);
  }, [categoryId]);

  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value);
  };

  if (loading) {
    return (<p>Loading...</p>);
  }

  if (error) {
    return <p>Error loading cars: {error.message}</p>;
  }

  return (
    <div className="container">
      <select className='category' id="category" value={categoryId} onChange={handleCategoryChange}>
        <option value="1">Новые автомобили</option>
        <option value="2">Б/У автомобили</option>
      </select>

      <div className="container-with-cars">
        {cars.map(car => (
          <div className="card" key={car.id}>
            <div className="card__top">
              <Link to={`/car/${car.id}`} className="card__image">
                {car.img && (
                  <img src={`https://mm-shkurin-abs-api-3258.twc1.net${car.img}`} alt={car.title} />
                )}
              </Link>
            </div>
            <div className="card__bottom">
              <Link to={`/car/${car.id}`} className="card__title">
                {car.title}
              </Link>
              <div className="card__details">
                <div className="card__price">
                  <strong>Цена:</strong> {car.price || 'Не указана'}₽
                </div>
                <div className="card__owners">
                <strong>Год:</strong> {car.year ? `${car.year}` : 'Не указан'}
                </div>
                <div className="card__mileage">
                  <strong>Пробег:</strong> {car.mileage ? `${car.mileage} км` : 'Не указан'}
                </div>
                <div className="card__owners">
                  <strong>Владельцев:</strong> {car.owners || 'Не указано'}
                </div>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoList;