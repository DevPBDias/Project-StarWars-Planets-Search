import React, { useContext } from 'react';
import StarWarsContext from '../context/Context';

function Table() {
  const { planetsFilter } = useContext(StarWarsContext);
  console.log(planetsFilter);
  return (
    <table className="tableInfo">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      {
        planetsFilter.map((info) => (
          <tbody key={ info.name }>
            <tr>
              <td>{ info.name }</td>
              <td>{ info.rotation_period }</td>
              <td>{ info.orbital_period }</td>
              <td>{ info.diameter }</td>
              <td>{ info.climate }</td>
              <td>{ info.gravity }</td>
              <td>{ info.terrain }</td>
              <td>{ info.surface_water }</td>
              <td>{ info.population }</td>
              <td>{ info.films }</td>
              <td>{ info.created }</td>
              <td>{ info.edited }</td>
              <td>{ info.url }</td>
            </tr>
          </tbody>
        ))
      }
    </table>
  );
}

export default Table;
