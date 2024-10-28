import React, { useState } from 'react';
import './main.css'

const Drop = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='main-ransom'>
      <div className='ransom' onClick={toggleDropdown}>{title}</div>
      {isOpen && <div className='txt-ransom'>{content}</div>}
    </div>
  );
};

export default Drop;