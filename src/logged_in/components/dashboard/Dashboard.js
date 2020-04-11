import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import SubscriptionTable from '../subscription/SubscriptionTable';
import SubscriptionPieChart from '../reports/SubscriptionPieChart';
import ResourceTypePieChart from '../reports/ResourceTypePieChart';
import ReportFilter from '../reports/ReportFilter';

class Dashboard extends PureComponent {
  componentDidMount() {
    const { selectDashboard } = this.props;
    selectDashboard();
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <ReportFilter />
        </Grid>
        <Grid item xs={12} md={6}>
          <SubscriptionPieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <ResourceTypePieChart />
        </Grid>
        <Grid item xs={12} md={12}>
          <SubscriptionTable />
        </Grid>
      </Grid>
    );
  }
}

Dashboard.propTypes = {
  selectDashboard: PropTypes.func.isRequired,
};

export default Dashboard;
