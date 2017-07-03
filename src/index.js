import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(<MuiThemeProvider>
  <RaisedButton label="Click Me" secondary={true}/>
</MuiThemeProvider>, document.getElementById('root'));
