import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from 'recharts';
import { Grid, withTheme } from '@material-ui/core';
import ReportService from '../../../services/ReportService';


function Reports(props) {
  const [azureCost, setAzureCost] = React.useState([]);
  const { CardChart, selectReports } = props;
  selectReports();

  ReportService.getAzureCost()
    .then((result) => {
      setAzureCost(result);
    });

  return (
    CardChart
  && azureCost && (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <BarChart
          width={1000}
          height={500}
          data={azureCost}
          layout="vertical"
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="label" />
          <Bar background label dataKey="value" fill="#8884d8" />
        </BarChart>
      </Grid>
    </Grid>
    )
  );
}

Reports.propTypes = {
  CardChart: PropTypes.elementType,
  selectReports: PropTypes.func,
};

export default withTheme(Reports);
