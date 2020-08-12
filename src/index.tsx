import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';

import { FetchResults } from './components/FetchResults';

const Index: FunctionComponent = () => (
  <div>
    <FetchResults />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('root'));
