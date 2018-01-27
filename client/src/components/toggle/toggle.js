import React from 'react';
import { withStyles } from 'material-ui/styles';
import teal from 'material-ui/colors/teal';
import Switch from 'material-ui/Switch';

const styles = {
  bar: {},
  checked: {
    color: teal[500],
    '& + $bar': {
      backgroundColor: teal[500],
    },
  },
};

class Toggle extends React.Component {
  state = {
    checkedA: true,
    checkedB: false,
    checkedE: true,
  };

  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Switch
          classes={{
            checked: classes.checked,
            bar: classes.bar,
          }}
          checked={this.state.checkedE}
          onChange={this.handleChange('checkedE')}
          aria-label="checkedD"
        />
      </div>
    );
  }
}



export default withStyles(styles)(Toggle);