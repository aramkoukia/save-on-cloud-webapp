import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@material-ui/core';
import { MaterialTable } from 'material-table';
// import ReportService from '../../../services/ReportService';


function DailyCost(props) {
  // const [setAzureCost] = React.useState([]);
  const { selectDailyCost } = props;
  selectDailyCost();

  // ReportService.getAzureCost()
  //   .then((result) => {
  //     setAzureCost(result);
  //   });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        DailyCost
        {/* <MaterialTable /> */}
      </Grid>
    </Grid>
  );
}

DailyCost.propTypes = {
  selectDailyCost: PropTypes.func,
};

DailyCost.defaultProps = {
  selectDailyCost: () => {},
};

export default withTheme(DailyCost);
