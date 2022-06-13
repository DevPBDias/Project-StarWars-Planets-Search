import React, { useContext } from 'react';
import StarWarsContext from '../../context/Context';
import { PlanetFilter, OptionsFilter, InputStyle, SpanStyle, H1,
  OptionStyle, SelectStyle, SelectFilter, FormsStyle, HeaderStyle,
  ButtonStyle, ButtonFilter, LabelStyle } from './style';

const FILTER = 'Filter ';

function Filters() {
  const {
    data,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    setInputValue,
    filterByNumbers,
    setfilterByNumbers,
    planetsFilter,
    setPlanetsFilter,
    optionsColumn,
    newOptionsColumn,
    setNewOptionsColumn,
    optionsComparison,
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

    const newOptions = newOptionsColumn
      .filter((options) => column !== options);
    console.log(newOptions);
    setNewOptionsColumn(newOptions);
    setColumn(newOptions[0]);
    console.log(optionsColumn);
  };

  const handleDeleteFilter = (index) => {
    const deletedFilter = filterByNumbers.filter((_item, itemID) => itemID !== index);
    setfilterByNumbers(deletedFilter);
  };

  const resetFilter = () => {
    setPlanetsFilter(data);
    setfilterByNumbers([]);
    setColumn(optionsColumn);
  };

  return (
    <FormsStyle>
      <HeaderStyle>
        <H1>Projeto StarWars Planets</H1>
      </HeaderStyle>
      <PlanetFilter>
        <LabelStyle htmlFor="planet-input">
          What planet are you looking for ?
          <InputStyle
            data-testid="name-filter"
            type="text"
            placeholder="Type planet name"
            name="planet-input"
            id="planet-input"
            onChange={ ({ target }) => setInputValue(target.value.toLowerCase()) }
          />
        </LabelStyle>
      </PlanetFilter>
      <OptionsFilter>
        <SelectFilter>
          <LabelStyle htmlFor="column-filter">
            Column:
            <SelectStyle
              onChange={ ({ target }) => setColumn(target.value) }
              id="column-filter"
              value={ column }
              data-testid="column-filter"
            >
              {
                newOptionsColumn.map((item, index) => (
                  <OptionStyle
                    key={ index }
                    value={ item }
                  >
                    {item}
                  </OptionStyle>))
              }
            </SelectStyle>
          </LabelStyle>
          <LabelStyle htmlFor="comparison-filter">
            Comparison:
            <SelectStyle
              onChange={ ({ target }) => setComparison(target.value) }
              id="comparison-filter"
              value={ comparison }
              data-testid="comparison-filter"
            >
              {
                optionsComparison.map((item, index) => (
                  <OptionStyle key={ index } value={ item }>{item}</OptionStyle>))
              }
            </SelectStyle>
          </LabelStyle>
          <LabelStyle htmlFor="button-filter">
            Value:
            <InputStyle
              data-testid="value-filter"
              type="number"
              placeholder="Type any number"
              id="button-filter"
              value={ value }
              onChange={ ({ target }) => setValue(target.value) }
            />
          </LabelStyle>
        </SelectFilter>
        <ButtonFilter>
          <ButtonStyle
            data-testid="button-filter"
            type="button"
            onClick={ handleClickFilter }
          >
            { FILTER }
          </ButtonStyle>
          <ButtonStyle
            type="button"
            data-testid="button-remove-filters"
            onClick={ resetFilter }
          >
            Reset
          </ButtonStyle>
        </ButtonFilter>
      </OptionsFilter>
      {
        filterByNumbers.map((filter, index) => (
          <ButtonFilter
            key={ index }
            data-testid="filter"
            id="filter"
          >
            <LabelStyle htmlFor="filter">
              { `${FILTER} ${index + 1} : ` }
              <SpanStyle>
                {`${filter.column} 
                ${filter.comparison} 
                ${filter.value}`}
              </SpanStyle>
              <ButtonStyle
                type="button"
                onClick={ () => handleDeleteFilter(index) }
              >
                X
              </ButtonStyle>
            </LabelStyle>
          </ButtonFilter>))

      }
    </FormsStyle>
  );
}

export default Filters;
