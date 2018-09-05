import React from 'react';
import ReactDOM from 'react-dom';
import main from './webgl/gl_main.js';
import './index.css';

main();

ReactDOM.render(
    <h1>WGL Test</h1>,
    document.getElementById('root')
)
