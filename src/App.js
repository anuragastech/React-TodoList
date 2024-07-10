import React from 'react';

import Todolist from './Components/Todolist/todolist';
import Header from './Components/Header/Header';
import About from './Components/about/about';

const App = () => {
  return (
    <div>
      <Header />
      
      <Todolist />
      <About />
    </div>
  );
};

export default App;
