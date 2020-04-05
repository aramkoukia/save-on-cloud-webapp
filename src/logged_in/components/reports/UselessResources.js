import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@material-ui/core';
import { MaterialTable } from 'material-table';
// import ReportService from '../../../services/ReportService';


function UselessResources(props) {
  // const [setAzureCost] = React.useState([]);
  const { selectUselessResources } = props;
  selectUselessResources();

  // ReportService.getAzureCost()
  //   .then((result) => {
  //     setAzureCost(result);
  //   });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        {/* <MaterialTable /> */}
        UselessResources
      </Grid>
    </Grid>
  );
}

UselessResources.propTypes = {
  selectUselessResources: PropTypes.func,
};

UselessResources.defaultProps = {
  selectUselessResources: () => {},
};

export default withTheme(UselessResources);
