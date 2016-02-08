require("bootstrap-webpack");
import React from 'react';
import {render} from 'react-dom';
import Router from './components/router.jsx';

render(<Router/>,  document.getElementById('app'));
