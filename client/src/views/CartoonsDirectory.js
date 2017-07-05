import React from 'react';

import Paper from 'material-ui/Paper';

const styles = {
  paper: {
    minHeight: '100px',
    padding: '40px'
  }
};

export default class CartoonsDirectory extends React.Component {
  render() {
    return (
      <Paper style={styles.paper}>
        <h2>This is Cartoons Directory</h2>
      </Paper>
    );
  }
}
