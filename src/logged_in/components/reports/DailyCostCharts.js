import React, { useEffect } from 'react';
import {
  Grid, Typography, Card, CardContent, withTheme,
} from '@material-ui/core';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts';
import ReportService from '../../../services/ReportService';

function DailyCostCharts() {
  const [dailyData, setDailyData] = React.useState([]);
  const [dayOverDayData, setDayOverDayData] = React.useState([]);

  const fetchData = () => {
    ReportService.getAzureCostDaily()
      .then((result) => {
        setDailyData(result);
      });

    ReportService.getAzureCostDayOverDay()
      .then((result) => {
        setDayOverDayData(result);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textPrimary" gutterBottom>
              Daily Cost
            </Typography>
            <ResponsiveContainer width="95%" height={200}>
              <BarChart
                width={600}
                height={400}
                data={dailyData}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textPrimary" gutterBottom>
              Day Over Day Cost
            </Typography>
            <ResponsiveContainer height={200}>
              <AreaChart
                data={dayOverDayData}
                margin={{
                  top: 10, right: 30, left: 0, bottom: 0,
                }}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

DailyCostCharts.propTypes = {
};

export default withTheme(DailyCostCharts);
