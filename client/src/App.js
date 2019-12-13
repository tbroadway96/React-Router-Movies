import React, { useState } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path = '/' component = {MovieList} />
      <Route path = '/movies/:id' component = {Movie} />
    </div>
  );
};

export default App;
