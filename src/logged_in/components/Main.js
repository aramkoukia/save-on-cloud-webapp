import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';
import Routing from './Routing';
import NavBar from './navigation/NavBar';
import smoothScrollTop from '../../shared/functions/smoothScrollTop';

const styles = (theme) => ({
  main: {
    marginLeft: theme.spacing(9),
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
});

class Main extends PureComponent {
  state = {
    selectedTab: null,
    ImageCropper: null,
    Dropzone: null,
    targets: [],
    messages: [],
    isAccountActivated: false,
  };

  componentDidMount() {
  }


  selectDashboard = () => {
    smoothScrollTop();
    document.title = 'Save On Cloud - Dashboard';
    this.setState({
      selectedTab: 'Dashboard',
    });
  };

  selectSubscription = () => {
    smoothScrollTop();
    document.title = 'Save On Cloud - Subscription';
    this.setState({
      selectedTab: 'Subscription',
    });
  };

  selectBilling = () => {
    smoothScrollTop();
    document.title = 'Save On Cloud - Billing';
    this.setState({
      selectedTab: 'Billing',
    });
  };

  selectDailyCost = () => {
    smoothScrollTop();
    document.title = 'Save On Cloud - Daily Cost';
    this.setState({
      selectedTab: 'DailyCost',
    });
  };

  selectMostExpensiveResources = () => {
    smoothScrollTop();
    document.title = 'Save On Cloud - MostExpensiveResources';
    this.setState({
      selectedTab: 'MostExpensiveResources',
    });
  };

  selectUselessResources = () => {
    smoothScrollTop();
    document.title = 'Save On Cloud - Useless Resources';
    this.setState({
      selectedTab: 'UselessResources',
    });
  };

  selectFastestGrowingResources = () => {
    smoothScrollTop();
    document.title = 'Save On Cloud - Fastest Growing Resources';
    this.setState({
      selectedTab: 'FastestGrowingResources',
    });
  };

  render() {
    const { classes } = this.props;
    const {
      selectedTab,
      ImageCropper,
      Dropzone,
      targets,
      isAccountActivated,
      messages,
    } = this.state;
    return (
      <>
        <NavBar
          selectedTab={selectedTab}
          messages={messages}
        />
        <main className={classNames(classes.main)}>
          <Routing
            isAccountActivated={isAccountActivated}
            ImageCropper={ImageCropper}
            Dropzone={Dropzone}
            handleSwitchToggle={this.handleSwitchToggle}
            handleSelectChange={this.handleSelectChange}
            pushMessageToSnackbar={this.pushMessageToSnackbar}
            targets={targets}
            selectDashboard={this.selectDashboard}
            selectMostExpensiveResources={this.selectMostExpensiveResources}
            selectFastestGrowingResources={this.selectFastestGrowingResources}
            selectUselessResources={this.selectUselessResources}
            selectDailyCost={this.selectDailyCost}
            selectSubscription={this.selectSubscription}
            selectBilling={this.selectBilling}
          />
        </main>
      </>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Main);
