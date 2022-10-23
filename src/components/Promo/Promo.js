import React from "react";
import './Promo.css'

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
          <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
      </div>
      <ul className="promo__navigation">
        <a href="#info" className="promo__link"><li className="promo_navigation_item">О проекте</li></a>
        <a href="#tech" className="promo__link"><li className="promo_navigation_item">Технологии</li></a>
        <a href="#aboutStudent" className="promo__link"><li className="promo_navigation_item">Студент</li></a>
      </ul>
    </section>
  );
};

export default Promo;
