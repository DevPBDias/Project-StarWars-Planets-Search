import React from 'react';
import Filters from './Filters/Filters';
import Table from './Table/Table';

function StarWarsTable() {
  return (
    <main>
      <Filters />
      <Table />
    </main>
  );
}

export default StarWarsTable;
