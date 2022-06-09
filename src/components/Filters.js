import React, { useContext } from 'react';
import StarWarsContext from '../context/Context';

const OPTIONS_COLUMN = ['population',
  'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
const OPTIONS_OPERATOR = ['maior que', 'menor que', 'igual a'];
const COLUMN_ID = 'column-filter';

function Filters() {
  const { setPlanetsFilter, planetsFilter, data,
    filterByNumericValues, setfilterByNumericValues } = useContext(StarWarsContext);

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
      const select = document.getElementById(COLUMN_ID);
      select.remove(select.querySelector('option[value="population"]'));
    }
    if (columnFilter === 'orbital_period') {
      const select = document.getElementById(COLUMN_ID);
      select.remove(select.querySelector('option[value="orbital_period"]'));
    }
    if (columnFilter === 'diameter') {
      const select = document.getElementById(COLUMN_ID);
      select.remove(select.querySelector('option[value="diameter"]'));
    }
    if (columnFilter === 'rotation_period') {
      const select = document.getElementById(COLUMN_ID);
      select.remove(select.querySelector('option[value="rotation_period"]'));
    }
    if (columnFilter === 'surface_water') {
      const select = document.getElementById(COLUMN_ID);
      select.remove(select.querySelector('option[value="surface_water"]'));
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
    }

    if (comparisonFilter === 'menor que') {
      const newPlanetsFilter = planetsFilter
        .filter((values) => Number(values[columnFilter]) < Number([valueFilter]));
      setPlanetsFilter(newPlanetsFilter);
    }

    if (comparisonFilter === 'igual a') {
      const newPlanetsFilter = planetsFilter
        .filter((values) => Number(values[columnFilter]) === Number([valueFilter]));
      setPlanetsFilter(newPlanetsFilter);
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
            OPTIONS_COLUMN.map((column, index) => (
              <option key={ index } value={ column }>{column}</option>))
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
            OPTIONS_OPERATOR.map((operator, index) => (
              <option key={ index } value={ operator }>{operator}</option>))
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
