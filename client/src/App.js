import React, { Fragment } from 'react';
import InputTodo from './components/InputTodo';

import './App.css';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
      </div>
      <ListTodo />
    </Fragment>
  );
}

export default App;
