import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({ shortMovies, handleShortFilms }) => {
  return (
    <label className="filter">
      <span className="filter__text">Короткометражки</span>
      <input className="filter__checkbox"
        type="checkbox"
        onChange={handleShortFilms}
        checked={shortMovies ? true : false} />
      <span className="filter__tumbler"></span>
    </label>
  );
};

export default FilterCheckbox;
