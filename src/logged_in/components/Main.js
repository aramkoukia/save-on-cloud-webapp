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
    document.title = 'Dashboard';
    this.setState({
      selectedTab: 'Dashboard',
    });
  };

  selectSubscription = () => {
    smoothScrollTop();
    document.title = 'Subscription';
    this.setState({
      selectedTab: 'Subscription',
    });
  };

  selectBilling = () => {
    smoothScrollTop();
    document.title = 'Billing';
    this.setState({
      selectedTab: 'Billing',
    });
  };

  selectCheckout = () => {
    smoothScrollTop();
    document.title = 'Checkout';
    this.setState({
      selectedTab: 'CheckoutBilling',
    });
  };

  selectDailyCost = () => {
    smoothScrollTop();
    document.title = 'Daily Cost';
    this.setState({
      selectedTab: 'DailyCost',
    });
  };

  selectMostExpensiveResources = () => {
    smoothScrollTop();
    document.title = 'Most Expensive Resources';
    this.setState({
      selectedTab: 'MostExpensiveResources',
    });
  };

  selectUselessResources = () => {
    smoothScrollTop();
    document.title = 'Useless Resources';
    this.setState({
      selectedTab: 'UselessResources',
    });
  };

  selectFastestGrowingResources = () => {
    smoothScrollTop();
    document.title = 'Fastest Growing Resources';
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
