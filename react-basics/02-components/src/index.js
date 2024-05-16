import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassBased from './components/ClassBased';
import FunctionBased from './components/FunctionBased';

const rootEl = document.getElementById('root')
const root = ReactDOM.createRoot(rootEl);
root.render(
  <>
    <ClassBased /> <hr/>
    <FunctionBased />
  </>    
);
