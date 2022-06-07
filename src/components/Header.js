import React, { useState, useContext, useEffect } from 'react';
import StarWarsContext from '../context/Context';

function Header() {
  const { data, setPlanetsFilter } = useContext(StarWarsContext);
  const [filterByName, setFilterByName] = useState({
    name: '',
  });

  // função para atualizar o valor do input
  const handleChange = ({ target }) => {
    setFilterByName({ name: target.value });
  };

  // didMountUpdate: estou criando um filtro dinamico em que ao digitar ele muda o estado do planetas filtrados, anteriormente setado igual ao data
  useEffect(() => {
    // filtrando os planeta que incluem o valor q digito no input
    const planets = data.filter((planet) => planet.name.includes(filterByName.name));
    // atualizando o estado apos a filtragem de forma dinamica
    setPlanetsFilter(planets);
  }, [setPlanetsFilter, filterByName.name, data]);

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
          value={ filterByName.name }
          onChange={ handleChange }
        />
      </label>

    </div>
  );
}

export default Header;
