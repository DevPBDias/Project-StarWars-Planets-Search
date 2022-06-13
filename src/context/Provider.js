import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './Context';

const STAR_WARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [planetsFilter, setPlanetsFilter] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [filterByNumbers, setfilterByNumbers] = useState([]);
  const [newOptionsColumn, setNewOptionsColumn] = useState([]);
  const [optionsColumn, setOptionsColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water']);
  const [optionsComparison, setOptionsComparison] = useState([
    'maior que',
    'menor que',
    'igual a']);

  // didMount para chamar a API
  useEffect(() => {
    const apiStarWars = async () => {
      console.log('chamei Api');
      try {
        const response = await fetch(STAR_WARS_API);
        const dataApi = await response.json();
        const dataInfo = dataApi.results;
        const newData = dataInfo.map((results) => {
          if (delete results.residents) { return results; }
          return null;
        });
        setData(newData);
        setPlanetsFilter(newData);
        setNewOptionsColumn(optionsColumn);
      } catch (error) {
        console.log(error);
      }
    };
    apiStarWars();
  }, []);

  // didMountUpdate: estou criando um filtro dinamico em que ao digitar ele muda o estado do planetas filtrados, anteriormente setado igual ao data
  useEffect(() => {
    const planets = data
      .filter((planet) => planet.name.toLowerCase().includes(inputValue));
    setPlanetsFilter(planets);
  }, [inputValue, data]);

  const contextValue = {
    data,
    planetsFilter,
    setPlanetsFilter,
    inputValue,
    setInputValue,
    filterByNumbers,
    setfilterByNumbers,
    column,
    comparison,
    value,
    setColumn,
    setComparison,
    setValue,
    optionsColumn,
    setOptionsColumn,
    newOptionsColumn,
    setNewOptionsColumn,
    optionsComparison,
    setOptionsComparison };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default StarWarsProvider;
