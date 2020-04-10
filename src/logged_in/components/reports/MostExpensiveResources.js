import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
import ReportFilter from './ReportFilter';
import ReportService from '../../../services/ReportService';

function MostExpensiveResources(props) {
  const [data, setData] = React.useState([]);
  const { selectMostExpensiveResources } = props;
  selectMostExpensiveResources();

  const fetchData = () => {
    ReportService.getMostExpensiveResources()
      .then((result) => {
        setData(result);
      });
  };

  useEffect(() => {
    fetchData(data);
  }, [data.length]);

  const columns = [
    { title: 'Subscription Name', field: 'subscriptionName' },
    { title: 'Resource Type', field: 'resourceType' },
    { title: 'Resource Name', field: 'resourceName' },
    { title: 'Date Created', field: 'dateCreated' },
    { title: 'Average Daily Cost', field: 'avgDailyCost' },
    { title: 'Average Monthly Cost', field: 'avgMonthlyCost' },
  ];

  const options = {
    paging: true,
    pageSizeOptions: [10, 20, 100],
    pageSize: 10,
    columnsButton: true,
    exportButton: true,
    filtering: true,
    search: true,
    grouping: true,
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <ReportFilter />
        <br />
        <MaterialTable
          columns={columns}
          options={options}
          data={data}
          title="Most Expensive Resources"
        />
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
