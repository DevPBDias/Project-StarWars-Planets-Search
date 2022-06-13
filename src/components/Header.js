import React, { useContext } from 'react';
import StarWarsContext from '../context/Context';

function Header() {
  const { setInputValue } = useContext(StarWarsContext);

  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <label htmlFor="planet-input">
        What planet are you looking for ?
        <input
          data-testid="name-filter"
          type="text"
          placeholder="Type the planet name"
          name="planet-input"
          id="planet-input"
          onChange={ ({ target }) => setInputValue(target.value.toLowerCase()) }
        />
      </label>
    </div>
  );
}

export default Header;
