import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Button } from '@material-ui/core';
import SettingsArea from './SettingsArea';
import StatisticsArea from './StatisticsArea';

class Dashboard extends PureComponent {
  componentDidMount() {
    const { selectDashboard } = this.props;
    selectDashboard();
  }

  render() {
    const {
      CardChart,
      statistics,
      pushMessageToSnackbar,
    } = this.props;
    return (
      <>
        <StatisticsArea CardChart={CardChart} data={statistics} />
        {/* <Box mt={4}>
          <Typography variant="subtitle1" gutterBottom>
            Your Account
          </Typography>
        </Box>
        <AccountInformationArea
          isAccountActivated={isAccountActivated}
          toggleAccountActivation={toggleAccountActivation}
        /> */}
        <Box mt={4}>
          <Typography variant="subtitle1" gutterBottom>
            Your Cloud Accounts
          </Typography>

        </Box>
        <SettingsArea pushMessageToSnackbar={pushMessageToSnackbar} />
      </>
    );
  }
}

Dashboard.propTypes = {
  CardChart: PropTypes.elementType.isRequired,
  statistics: PropTypes.object.isRequired,
  toggleAccountActivation: PropTypes.func,
  pushMessageToSnackbar: PropTypes.func,
  selectDashboard: PropTypes.func.isRequired,
};

export default Dashboard;
