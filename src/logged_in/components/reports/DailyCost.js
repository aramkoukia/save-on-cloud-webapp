import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
import DailyCostChart from './DailyCostCharts';
import ReportFilter from './ReportFilter';
import ReportService from '../../../services/ReportService';

function DailyCost(props) {
  const [data, setData] = React.useState([]);
  const {
    selectDailyCost,
  } = props;

  selectDailyCost();

  const columns = [
    { title: 'Subscription Name', field: 'subscriptionName' },
    { title: 'Resource Name', field: 'resourceName' },
    { title: 'Date', field: 'date' },
    { title: 'Cost $', field: 'cost' },
    { title: 'Avg Daily Cost $', field: 'avgDailyCost' },
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

  const fetchData = () => {
    ReportService.getAzureCostDailyDetail()
      .then((result) => {
        setData(result);
      });
  };

  useEffect(() => {
    fetchData(data);
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <ReportFilter />
        <br />
        <DailyCostChart />
        <br />
        <MaterialTable
          columns={columns}
          options={options}
          data={data}
          title="Daily Cost of Resources"
        />
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
