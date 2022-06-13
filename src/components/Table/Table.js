import React, { useContext } from 'react';
import StarWarsContext from '../../context/Context';
import { TableStyle, TD, TH, TR, ListFilms } from './style';

function Table() {
  const { planetsFilter } = useContext(StarWarsContext);
  console.log(planetsFilter);
  return (
    <TableStyle>
      <thead>
        <TR>
          <TH>Name</TH>
          <TH>Rotation Period</TH>
          <TH>Orbital Period</TH>
          <TH>Diameter</TH>
          <TH>Climate</TH>
          <TH>Gravity</TH>
          <TH>Terrain</TH>
          <TH>Surface Water</TH>
          <TH>Population</TH>
          <TH>Films</TH>
          <TH>Created</TH>
          <TH>Edited</TH>
          <TH>URL</TH>
        </TR>
      </thead>
      {
        planetsFilter.map((info) => (
          <tbody key={ info.name }>
            <TR>
              <TD>{ info.name }</TD>
              <TD>{ info.rotation_period }</TD>
              <TD>{ info.orbital_period }</TD>
              <TD>{ info.diameter }</TD>
              <TD>{ info.climate }</TD>
              <TD>{ info.gravity }</TD>
              <TD>{ info.terrain }</TD>
              <TD>{ info.surface_water }</TD>
              <TD>{ info.population }</TD>
              <TD>
                { info.films.map((list) => (<ListFilms key={ list }>{list}</ListFilms>))}
              </TD>
              <TD>{ info.created }</TD>
              <TD>{ info.edited }</TD>
              <TD>{ info.url }</TD>
            </TR>
          </tbody>
        ))
      }
    </TableStyle>
  );
}

export default Table;
