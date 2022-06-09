import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/Context';

const OPTIONS_COLUMN = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const OPTIONS_OPERATOR = ['maior que', 'menor que', 'igual a'];

function Filters() {
  const { setPlanetsFilter, planetsFilter, data,
    filterByNumericValues, setfilterByNumericValues } = useContext(StarWarsContext);
  const [msgFilter, setMsgFilter] = useState([]);

  const handleNumeric = ({ target }) => {
    setfilterByNumericValues({
      ...filterByNumericValues,
      [target.name]: target.value,
    });
  };

  const removeColumn = () => {
    console.log(filterByNumericValues);
    const columnFilter = filterByNumericValues.column;
    if (columnFilter === 'population') {
      delete OPTIONS_COLUMN[0];
      setfilterByNumericValues({ ...filterByNumericValues, column: 'orbital_period' });
      console.log(OPTIONS_COLUMN);
    }
    if (columnFilter === 'orbital_period') {
      delete OPTIONS_COLUMN[1];
      setfilterByNumericValues({ ...filterByNumericValues, column: 'diameter' });
      console.log(OPTIONS_COLUMN);
    }
    if (columnFilter === 'diameter') {
      delete OPTIONS_COLUMN[2];
      setfilterByNumericValues({ ...filterByNumericValues });
      console.log(OPTIONS_COLUMN);
    }
    if (columnFilter === 'rotation_period') {
      delete OPTIONS_COLUMN[3];
      setfilterByNumericValues({ ...filterByNumericValues });
      console.log(OPTIONS_COLUMN);
    }
    if (columnFilter === 'surface_water') {
      delete OPTIONS_COLUMN[4];
      setfilterByNumericValues({ ...filterByNumericValues });
      console.log(OPTIONS_COLUMN);
    }
  };

  const resetFilter = () => {
    setPlanetsFilter(data);
  };

  const handleClick = () => {
    const columnFilter = filterByNumericValues.column;
    const valueFilter = filterByNumericValues.value;
    const comparisonFilter = filterByNumericValues.comparison;

    if (comparisonFilter === 'maior que') {
      const newPlanetsFilter = planetsFilter
        .filter((values) => Number(values[columnFilter]) > Number([valueFilter]));
      setPlanetsFilter(newPlanetsFilter);
      setMsgFilter(filterByNumericValues);
      console.log(msgFilter);
    }

    if (comparisonFilter === 'menor que') {
      const newPlanetsFilter = planetsFilter
        .filter((values) => Number(values[columnFilter]) < Number([valueFilter]));
      setPlanetsFilter(newPlanetsFilter);
      setMsgFilter(filterByNumericValues);
      console.log(msgFilter);
    }

    if (comparisonFilter === 'igual a') {
      const newPlanetsFilter = planetsFilter
        .filter((values) => Number(values[columnFilter]) === Number([valueFilter]));
      setPlanetsFilter(newPlanetsFilter);
      setMsgFilter(filterByNumericValues);
      console.log(msgFilter);
    }
    removeColumn();
  };

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
          {
            OPTIONS_COLUMN.map((column) => (
              <option key={ column } value={ column }>{column}</option>))
          }
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
          {
            OPTIONS_OPERATOR.map((operator) => (
              <option key={ operator } value={ operator }>{operator}</option>))
          }
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
      <button
        type="button"
        onClick={ resetFilter }
      >
        Resetar filtro
      </button>
    </div>
  );
}

export default Filters;
