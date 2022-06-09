import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/Context';

function Filters() {
  const { setPlanetsFilter, planetsFilter,
    filterByNumericValues, setfilterByNumericValues } = useContext(StarWarsContext);
  // const [savePlanetFilter, setSavePlanetFilter] = useState([]);
  const [msgFilter, setMsgFilter] = useState([]);

  const handleNumeric = ({ target }) => {
    setfilterByNumericValues({
      ...filterByNumericValues,
      [target.name]: target.value,
    });
  };

  const handleClick = () => {
    const columnFilter = filterByNumericValues.column;
    const valueFilter = filterByNumericValues.value;
    const comparisonFilter = filterByNumericValues.comparison;

    if (comparisonFilter === 'maior que') {
      const newPlanetsFilter = planetsFilter
        .filter((values) => Number(values[columnFilter]) > Number([valueFilter]));
      setPlanetsFilter(newPlanetsFilter);
      setMsgFilter({ ...msgFilter, filterByNumericValues });
    }

    if (comparisonFilter === 'menor que') {
      const newPlanetsFilter = planetsFilter
        .filter((values) => Number(values[columnFilter]) < Number([valueFilter]));
      setPlanetsFilter(newPlanetsFilter);
      setMsgFilter({ ...msgFilter, filterByNumericValues });
    }

    if (comparisonFilter === 'igual a') {
      const newPlanetsFilter = planetsFilter
        .filter((values) => Number(values[columnFilter]) === Number([valueFilter]));
      setPlanetsFilter(newPlanetsFilter);
      setMsgFilter({ ...msgFilter, filterByNumericValues });
    }
    console.log(msgFilter);
  };

  // toda vez que clickar fazer um filtro do antigo planetsFilter e acrescentar os valores do filtro no <p>

  return (
    <div>
      <label htmlFor="column-filter">
        Coluna:
        <select
          onChange={ handleNumeric }
          name="column"
          id="column-filter"
          data-testid="column-filter"
        >
          <option defaultValue value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Operador:
        <select
          name="comparison"
          onChange={ handleNumeric }
          id="comparison-filter"
          data-testid="comparison-filter"
        >
          <option defaultValue value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="button-filter">
        Quantidade:
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          placeholder="Digite um número"
          id="button-filter"
          value={ filterByNumericValues.value }
          onChange={ handleNumeric }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      {/* <p>{msgFilter}</p> */}
    </div>
  );
}

export default Filters;
