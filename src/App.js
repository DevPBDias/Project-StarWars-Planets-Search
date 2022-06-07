import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Header from './components/Header';
import Table from './components/Table';
import StarWarsProvider from './context/Provider';

function App() {
  return (
    <StarWarsProvider>
      <Header />
      <Filters />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
