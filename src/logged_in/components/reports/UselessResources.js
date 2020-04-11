import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
import ReportFilter from './ReportFilter';
import ReportService from '../../../services/ReportService';


function UselessResources(props) {
  const [data, setData] = React.useState([]);
  const { selectUselessResources } = props;
  selectUselessResources();

  const fetchData = () => {
    ReportService.getUselessResources()
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
    { title: 'Average Daily Cost $', field: 'avgDailyCost' },
    { title: 'Network Usage?', field: 'networkUsage' },
    { title: 'I/O?', field: 'ioUsage' },
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
        <MaterialTable
          columns={columns}
          options={options}
          data={data}
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
