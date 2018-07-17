import ReactDOMServer from 'react-dom/server';
import React from 'react';
import HelloWorld from './src/index.js'

const result = ReactDOMServer.renderToString(<HelloWorld />);

export default result;