import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/Context';

function Header() {
  const { data, setPlanetsFilter,
    filterPlanetName, setfilterPlanetName } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    setfilterPlanetName({
      filterByName: {
        name: target.value,
      },
    });
  };

  // didMountUpdate: estou criando um filtro dinamico em que ao digitar ele muda o estado do planetas filtrados, anteriormente setado igual ao data
  useEffect(() => {
    const planets = data
      .filter((planet) => planet.name
        .toLowerCase().includes(filterPlanetName.filterByName.name));
    setPlanetsFilter(planets);
  }, [setPlanetsFilter, data, filterPlanetName]);

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
          value={ filterPlanetName.filterByName.name }
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}

export default Header;
