import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Dashboard from './dashboard/Dashboard';
import MostExpensiveResources from './reports/MostExpensiveResources';
import FastestGrowingResources from './reports/FastestGrowingResources';
import UselessResources from './reports/UselessResources';
import DailyCost from './reports/DailyCost';
import Subscription from './subscription/Subscription';
import Billing from './billing/Billing';
import AddAzureSubscription from './subscription/AddAzureSubscription';
import AddAwsSubscription from './subscription/AddAwsSubscription';
import CheckoutForm from './billing/CheckoutForm';
import PropsRoute from '../../shared/components/PropsRoute';

const styles = (theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    width: 'auto',
    [theme.breakpoints.up('xs')]: {
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: '82.5%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: '70%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

function Routing(props) {
  const {
    classes,
    pushMessageToSnackbar,
    handleSelectChange,
    targets,
    selectDashboard,
    selectUselessResources,
    selectMostExpensiveResources,
    selectDailyCost,
    selectFastestGrowingResources,
    selectSubscription,
    selectBilling,
    selectAddAzureSubscription,
    selectAddAwsSubscription,
    selectCheckout,
  } = props;
  return (
    <div className={classes.wrapper}>
      <Switch>
        <PropsRoute
          path="/c/mostexpensive"
          component={MostExpensiveResources}
          handleSelectChange={handleSelectChange}
          pushMessageToSnackbar={pushMessageToSnackbar}
          targets={targets}
          selectMostExpensiveResources={selectMostExpensiveResources}
        />
        <PropsRoute
          path="/c/fastestgrowing"
          component={FastestGrowingResources}
          handleSelectChange={handleSelectChange}
          pushMessageToSnackbar={pushMessageToSnackbar}
          targets={targets}
          selectFastestGrowingResources={selectFastestGrowingResources}
        />
        <PropsRoute
          path="/c/dailycost"
          component={DailyCost}
          selectDailyCost={selectDailyCost}
        />
        <PropsRoute
          path="/c/uselessresources"
          component={UselessResources}
          handleSelectChange={handleSelectChange}
          pushMessageToSnackbar={pushMessageToSnackbar}
          targets={targets}
          selectUselessResources={selectUselessResources}
        />
        <PropsRoute
          path="/c/subscription"
          component={Subscription}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectSubscription={selectSubscription}
        />
        <PropsRoute
          path="/c/addazuresubscription"
          component={AddAzureSubscription}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectAddAzureSubscription={selectAddAzureSubscription}
        />
        <PropsRoute
          path="/c/addawssubscription"
          component={AddAwsSubscription}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectAddAwsSubscription={selectAddAwsSubscription}
        />
        <PropsRoute
          path="/c/billing"
          component={Billing}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectBilling={selectBilling}
        />
        <PropsRoute
          path="/c/checkout"
          component={CheckoutForm}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectBilling={selectCheckout}
        />
        <PropsRoute
          path=""
          component={Dashboard}
          handleSelectChange={handleSelectChange}
          pushMessageToSnackbar={pushMessageToSnackbar}
          targets={targets}
          selectDashboard={selectDashboard}
        />
      </Switch>
    </div>
  );
}

Routing.propTypes = {
  classes: PropTypes.object.isRequired,
  pushMessageToSnackbar: PropTypes.func,
  handleSelectChange: PropTypes.func,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectDashboard: PropTypes.func.isRequired,
  selectDailyCost: PropTypes.func.isRequired,
  selectFastestGrowingResources: PropTypes.func.isRequired,
  selectMostExpensiveResources: PropTypes.func.isRequired,
  selectUselessResources: PropTypes.func.isRequired,
  selectSubscription: PropTypes.func.isRequired,
  selectAddAzureSubscription: PropTypes.func.isRequired,
  selectAddAwsSubscription: PropTypes.func.isRequired,
  selectBilling: PropTypes.func.isRequired,
  selectCheckout: PropTypes.func.isRequired,
};

Routing.defaultProps = {
  pushMessageToSnackbar: () => {},
  handleSelectChange: () => {},
};

export default withStyles(styles, { withTheme: true })(memo(Routing));
