import React, { useEffect } from 'react';
import {
  Typography, Card, CardContent, withTheme,
} from '@material-ui/core';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from 'recharts';
import ReportService from '../../../services/ReportService';

function ResourceTypePieChart() {
  const [data, setData] = React.useState([]);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#b85cb9', '#0ee226', '#99a69a'];

  const fetchData = () => {
    ReportService.getResourceTypeShare()
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
          Resource Type Cost Share
        </Typography>
        <ResponsiveContainer width="95%" height={200}>
          <PieChart>
            <Pie
              data={data}
              fill="#82ca9d"
              label
              // label={renderCustomizedLabel}
            >
              {
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
            }
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

ResourceTypePieChart.propTypes = {
};

export default withTheme(ResourceTypePieChart);
