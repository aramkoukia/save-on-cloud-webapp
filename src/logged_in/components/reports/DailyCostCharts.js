import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@material-ui/core';
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import ReportService from '../../../services/ReportService';

function DailyCostCharts(props) {
  const { theme, CardChart, data } = props;
  const [azureCost, setAzureCost] = React.useState([]);

  ReportService.getAzureCostDaily()
    .then((result) => {
      setAzureCost(result);
    });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        {CardChart
    && data
    && data.profit.length >= 2
    && data.views.length >= 2 && (
    <CardChart
      data={data.profit}
      color={theme.palette.secondary.light}
      height="70px"
      title="Day Over Day Spending"
    />
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        <ResponsiveContainer width="95%" height={200}>
          <AreaChart
            width={600}
            height={400}
            data={azureCost}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  );
}

DailyCostCharts.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  CardChart: PropTypes.elementType,
};

export default withTheme(DailyCostCharts);
