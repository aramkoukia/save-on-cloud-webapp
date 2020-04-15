import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
import ReportFilter from './ReportFilter';
import FastestGrowingResourcesChart from './FastestGrowingResourcesChart';
import ReportService from '../../../services/ReportService';

function FastestGrowingResources(props) {
  const [data, setData] = React.useState([]);
  const { selectFastestGrowingResources } = props;
  selectFastestGrowingResources();

  const fetchData = () => {
    ReportService.getFastestGrowingResources()
      .then((result) => {
        setData(result);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { title: 'Subscription Name', field: 'subscriptionName' },
    { title: 'Resource Type', field: 'resourceType' },
    { title: 'Resource Name', field: 'resourceName' },
    { title: 'Date Created', field: 'dateCreated' },
    { title: 'Average Daily Cost $', field: 'avgDailyCost' },
    { title: 'Average Monthly Cost $', field: 'avgMonthlyCost' },
  ];

  const options = {
    paging: true,
    pageSizeOptions: [10, 20, 100],
    pageSize: 10,
    columnsButton: true,
    exportButton: true,
    filtering: true,
    search: true,
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <ReportFilter />
        <br />
        <FastestGrowingResourcesChart />
        <br />
        <MaterialTable
          columns={columns}
          options={options}
          data={data}
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
