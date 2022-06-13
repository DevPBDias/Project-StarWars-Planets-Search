import React, { useContext } from 'react';
import StarWarsContext from '../context/Context';

function Filters() {
  const {
    data,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filterByNumbers,
    setfilterByNumbers,
    planetsFilter,
    setPlanetsFilter,
    optionsColumn,
    newOptionsColumn,
    setNewOptionsColumn,
    optionsComparison,
    // setoptionsComparison,
  } = useContext(StarWarsContext);

  const handleClickFilter = () => {
    const newNumericFilter = {
      column,
      comparison,
      value,
    };
    setfilterByNumbers([...filterByNumbers, newNumericFilter]);

    if (comparison === 'maior que') {
      const newPlanetsFilter = planetsFilter
        .filter((values) => Number(values[column]) > Number([value]));
      setPlanetsFilter(newPlanetsFilter);
    }

    if (comparison === 'menor que') {
      const newPlanetsFilter = planetsFilter
        .filter((values) => Number(values[column]) < Number([value]));
      setPlanetsFilter(newPlanetsFilter);
    }

    if (comparison === 'igual a') {
      const newPlanetsFilter = planetsFilter
        .filter((values) => Number(values[column]) === Number([value]));
      setPlanetsFilter(newPlanetsFilter);
    }

    const newOptions = optionsColumn
      .filter((options) => column !== options);
    console.log(newOptions);
    setNewOptionsColumn(newOptions);
    console.log(optionsColumn);
  };

  const handleDeleteFilter = (index) => {
    const deletedFilter = filterByNumbers.filter((_item, itemID) => itemID !== index);
    setfilterByNumbers(deletedFilter);
  };

  const resetFilter = () => {
    setPlanetsFilter(data);
    setfilterByNumbers([]);
  };

  return (
    <div>
      <label htmlFor="column-filter">
        Column:
        <select
          onChange={ ({ target }) => setColumn(target.value) }
          id="column-filter"
          value={ column }
          data-testid="column-filter"
        >
          {
            newOptionsColumn.map((item, index) => (
              <option
                key={ index }
                value={ item }
              >
                {item}
              </option>))
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparison:
        <select
          onChange={ ({ target }) => setComparison(target.value) }
          id="comparison-filter"
          value={ comparison }
          data-testid="comparison-filter"
        >
          {
            optionsComparison.map((item, index) => (
              <option key={ index } value={ item }>{item}</option>))
          }
        </select>
      </label>
      <label htmlFor="button-filter">
        Value:
        <input
          data-testid="value-filter"
          type="number"
          placeholder="Type any number"
          id="button-filter"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClickFilter }
      >
        Filter
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ resetFilter }
      >
        Reset filters
      </button>
      {
        filterByNumbers.map((filter, index) => (
          <div
            key={ index }
          >
            <p>
              {`${filter.column} 
                ${filter.comparison} 
                ${filter.value}`}
            </p>
            <button
              type="button"
              data-testid="filter"
              onClick={ () => handleDeleteFilter(index) }
            >
              Deletar
            </button>
          </div>))
      }
    </div>
  );
}

export default Filters;
