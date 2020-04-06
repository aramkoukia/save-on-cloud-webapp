import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
// import ReportService from '../../../services/ReportService';


function FastestGrowingResources(props) {
  const [azureCost, setAzureCost] = React.useState([]);
  const { selectFastestGrowingResources } = props;
  selectFastestGrowingResources();

  const columns = [
    { title: 'Subscription Name', field: 'subscriptionName' },
    { title: 'Resource Name', field: 'resourceName' },
    { title: 'Date Created', field: 'dateCreated' },
    { title: 'cost', field: 'cost' },
  ];

  const options = {
    paging: true,
    pageSizeOptions: [25, 50, 100],
    pageSize: 25,
    columnsButton: true,
    exportButton: true,
    filtering: true,
    search: true,
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <MaterialTable
          columns={columns}
          options={options}
          data={azureCost}
          title="Fastest Growing Resources"
        />
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
