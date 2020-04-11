import React, { useEffect } from 'react';
import {
  Typography, Card, CardContent, withTheme,
} from '@material-ui/core';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Tooltip,
  YAxis,
  CartesianGrid,
  Line,
  Legend,
} from 'recharts';
import ReportService from '../../../services/ReportService';

function MostExpensiveResourcesChart() {
  const [data, setData] = React.useState([]);

  const fetchData = () => {
    ReportService.getMostExpensiveResourcesChart()
      .then((result) => {
        setData(result);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textPrimary" gutterBottom>
          Most Expensive Resources Trend
        </Typography>
        <ResponsiveContainer width="95%" height={200}>
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="resource1" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="resource2" stroke="#82ca9d" />
            <Line type="monotone" dataKey="resource3" stroke="#FFBB28" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

MostExpensiveResourcesChart.propTypes = {
};

export default withTheme(MostExpensiveResourcesChart);
