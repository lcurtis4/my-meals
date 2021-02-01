  import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import { Meal } from './Meal';

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Meal />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


