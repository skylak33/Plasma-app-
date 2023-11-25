import React from 'react';
import '../css/style.css'
const Header = () => {
  return (
    <header>
      <div className="logo; user-info"><img src="logo192.png" alt="Изображение пользователя" /></div>
      
      <div className="user-info">
        <span>Имя пользователя</span>
        <img src="logo192.png" alt="Изображение пользователя" />
      </div>
    </header>
  );
};

export default Header;
