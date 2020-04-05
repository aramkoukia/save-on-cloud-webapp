import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@material-ui/core';
import { MaterialTable } from 'material-table';
// import ReportService from '../../../services/ReportService';


function MostExpensiveResources(props) {
  // const [setAzureCost] = React.useState([]);
  const { selectMostExpensiveResources } = props;
  selectMostExpensiveResources();

  // ReportService.getAzureCost()
  //   .then((result) => {
  //     setAzureCost(result);
  //   });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        {/* <MaterialTable /> */}
        MostExpensiveResources
      </Grid>
    </Grid>
  );
}

MostExpensiveResources.propTypes = {
  selectMostExpensiveResources: PropTypes.func,
};

MostExpensiveResources.defaultProps = {
  selectMostExpensiveResources: () => {},
};

export default withTheme(MostExpensiveResources);
