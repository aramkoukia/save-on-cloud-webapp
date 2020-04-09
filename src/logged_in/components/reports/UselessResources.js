import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
import ReportFilter from './ReportFilter';
// import ReportService from '../../../services/ReportService';


function UselessResources(props) {
  const [azureCost, setAzureCost] = React.useState([]);
  const { selectUselessResources } = props;
  selectUselessResources();

  const columns = [
    { title: 'Subscription Name', field: 'subscriptionName' },
    { title: 'Resource Name', field: 'resourceName' },
    { title: 'Date Created', field: 'dateCreated' },
    { title: 'Average Daily Cost', field: 'avgDailyCost' },
    { title: 'Network Usage?', field: 'networkUsage' },
    { title: 'I/O?', field: 'ioUsage' },
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
        <ReportFilter />
        <MaterialTable
          columns={columns}
          options={options}
          data={azureCost}
          title="Useless Resources"
        />
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
