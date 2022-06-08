import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import StarWarsContext from './Context';

const STAR_WARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  // criando um estado para salvar/atualizar os planetas filtrados ao longo que digito no input
  const [planetsFilter, setPlanetsFilter] = useState([]);

  const apiStarWars = async () => {
    try {
      const response = await fetch(STAR_WARS_API);
      const dataApi = await response.json();
      const dataInfo = dataApi.results;
      // deletar uma propriedade de um obj
      // https://www.w3schools.com/howto/howto_js_remove_property_object.asp
      const dataInfoDeleted = dataInfo.map((results) => {
        if (delete results.residents) { return results; }
        return null;
      });
      setData(dataInfoDeleted);
      // setando o estado inicial abaixo igual ao data, antes de ser feito o filtro
      setPlanetsFilter(dataInfoDeleted);
    } catch (error) {
      console.log(error);
    }
  };

  // didMount para chamar a API
  useEffect(() => {
    apiStarWars();
  }, []);

  const contextValue = { data,
    planetsFilter,
    setPlanetsFilter };

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
