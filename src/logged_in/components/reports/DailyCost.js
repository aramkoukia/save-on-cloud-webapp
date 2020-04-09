import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@material-ui/core';
import MaterialTable from 'material-table';
import DailyCostChart from './DailyCostCharts';
import ReportFilter from './ReportFilter';
// import ReportService from '../../../services/ReportService';

function DailyCost(props) {
  const [azureCost, setAzureCost] = React.useState([]);
  const {
    selectDailyCost,
    CardChart,
    statistics,
  } = props;

  selectDailyCost();

  const columns = [
    { title: 'Subscription Name', field: 'subscriptionName' },
    { title: 'Resource Name', field: 'resourceName' },
    { title: 'Date', field: 'date' },
    { title: 'Daily Cost', field: 'cost' },
    { title: 'Day Over Day Cost', field: 'cost' },
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
        <DailyCostChart CardChart={CardChart} data={statistics} />
        <MaterialTable
          columns={columns}
          options={options}
          data={azureCost}
          title="Daily Cost of Resources"
        />
      </Grid>
    </Grid>
  );
}

DailyCost.propTypes = {
  selectDailyCost: PropTypes.func,
  CardChart: PropTypes.elementType.isRequired,
  statistics: PropTypes.object.isRequired,
};

DailyCost.defaultProps = {
  selectDailyCost: () => {},
};

export default withTheme(DailyCost);
