// NavigationButtons.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationButtons = () => {
  return (
    <div>
      <Link to="/home">
        <button>Домой</button>
      </Link>
      <Link to="/about">
        <button>О нас</button>
      </Link>
      <Link to="/contact">
        <button>Контакты</button>
      </Link>
    </div>
  );
};

export default NavigationButtons;
