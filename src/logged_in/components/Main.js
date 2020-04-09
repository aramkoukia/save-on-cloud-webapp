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
    CardChart: null,
    EmojiTextArea: null,
    ImageCropper: null,
    Dropzone: null,
    DateTimePicker: null,
    transactions: [],
    statistics: { views: [], profit: [] },
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
    if (!this.hasFetchedCardChart) {
      this.hasFetchedCardChart = true;
      import('../../shared/components/CardChart').then((Component) => {
        this.setState({ CardChart: Component.default });
      });
    }
  };

  selectSubscription = () => {
    smoothScrollTop();
    document.title = 'Save On Cloud - Subscription';
    this.setState({
      selectedTab: 'Subscription',
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
      EmojiTextArea,
      CardChart,
      Dropzone,
      DateTimePicker,
      transactions,
      statistics,
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
            EmojiTextArea={EmojiTextArea}
            CardChart={CardChart}
            Dropzone={Dropzone}
            DateTimePicker={DateTimePicker}
            handleNumberChange={this.handleNumberChange}
            handleSwitchToggle={this.handleSwitchToggle}
            handleSelectChange={this.handleSelectChange}
            toggleAccountActivation={this.toggleAccountActivation}
            pushMessageToSnackbar={this.pushMessageToSnackbar}
            transactions={transactions}
            statistics={statistics}
            targets={targets}
            selectDashboard={this.selectDashboard}
            selectMostExpensiveResources={this.selectMostExpensiveResources}
            selectFastestGrowingResources={this.selectFastestGrowingResources}
            selectUselessResources={this.selectUselessResources}
            selectDailyCost={this.selectDailyCost}
            selectSubscription={this.selectSubscription}
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
