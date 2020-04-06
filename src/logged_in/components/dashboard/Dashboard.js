import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@material-ui/core';
import SubscriptionTable from '../subscription/SubscriptionTable';

class Dashboard extends PureComponent {
  componentDidMount() {
    const { selectDashboard } = this.props;
    selectDashboard();
  }

  render() {
    return (
      <>
        <Box mt={4}>
          <Typography variant="subtitle1" gutterBottom>
            Your Cloud Accounts
          </Typography>

        </Box>
        <SubscriptionTable />
      </>
    );
  }
}

Dashboard.propTypes = {
  selectDashboard: PropTypes.func.isRequired,
};

export default Dashboard;
