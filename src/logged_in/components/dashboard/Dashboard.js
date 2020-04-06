import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@material-ui/core';
import StatisticsArea from './StatisticsArea';
import SubscriptionTable from '../subscription/SubscriptionTable';

class Dashboard extends PureComponent {
  componentDidMount() {
    const { selectDashboard } = this.props;
    selectDashboard();
  }

  render() {
    const {
      CardChart,
      statistics,
    } = this.props;
    return (
      <>
        <StatisticsArea CardChart={CardChart} data={statistics} />
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
  CardChart: PropTypes.elementType.isRequired,
  statistics: PropTypes.object.isRequired,
  selectDashboard: PropTypes.func.isRequired,
};

export default Dashboard;
