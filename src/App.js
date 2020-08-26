import React from 'react';
import Footer from "./components/Footer";

import SearchMovies from './components/SeachMovies';

function App() {
  return (
    <div className='container'>
      <h1 className='title'>Findflix</h1>
      <SearchMovies />
      <Footer />
    </div>

  );
}

export default App;
