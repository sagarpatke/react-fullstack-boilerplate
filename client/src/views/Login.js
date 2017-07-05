import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

const styles = {
  paper: {
    minHeight: '100px',
    padding: '40px'
  }
};

export default class Login extends React.Component {
  render() {
    return (
      <Paper style={styles.paper}>
        <h2>Login</h2>
        <Link to="/app"><RaisedButton label="Login" primary /></Link>
      </Paper>
    );
  }
}
