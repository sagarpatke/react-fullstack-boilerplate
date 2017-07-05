import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Row, Col} from 'react-flexbox-grid';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Login from './views/Login';
import CartoonsDirectory from './views/CartoonsDirectory';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(<MuiThemeProvider>
  <Router>
    <Row around='xs'>
      <Col xs={12} md={11}>
        <Route exact path="/" component={Login} />
        <Route exact path="/app" component={CartoonsDirectory} />
      </Col>
    </Row>
  </Router>
</MuiThemeProvider>, document.getElementById('root'));
