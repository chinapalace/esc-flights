import React from 'react';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Search from './Search';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 440,
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>

        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
          style={{ boxShadow: ' 0 6px 3px -3px rgba(0,0,0,0.2)' }}

        >
          <Tab label="Round Trip" />
          <Tab label="One Way" />
          <Tab label="Multi City" />
        </Tabs>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><Search location={this.props.location} /></TabContainer>
          <TabContainer dir={theme.direction}><Search location={this.props.location} /></TabContainer>
          <TabContainer dir={theme.direction}><Search location={this.props.location} /></TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}



export default withStyles(styles, { withTheme: true })(FullWidthTabs);