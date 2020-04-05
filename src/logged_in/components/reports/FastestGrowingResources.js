import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@material-ui/core';
import { MaterialTable } from 'material-table';
// import ReportService from '../../../services/ReportService';


function FastestGrowingResources(props) {
  // const [setAzureCost] = React.useState([]);
  const { selectFastestGrowingResources } = props;
  selectFastestGrowingResources();

  // ReportService.getAzureCost()
  //   .then((result) => {
  //     setAzureCost(result);
  //   });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        FastestGrowingResources
        {/* <MaterialTable /> */}
      </Grid>
    </Grid>
  );
}

FastestGrowingResources.propTypes = {
  selectFastestGrowingResources: PropTypes.func,
};

FastestGrowingResources.defaultProps = {
  selectFastestGrowingResources: () => {},
};

export default withTheme(FastestGrowingResources);
