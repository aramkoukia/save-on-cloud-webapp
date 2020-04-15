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

function SubscriptionPieChart() {
  const [data, setData] = React.useState([]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#b85cb9', '#0ee226', '#99a69a'];
  // const RADIAN = Math.PI / 180;
  // const renderCustomizedLabel = ({
  //   cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  // }) => {
  //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);

  //   return (
  //     <text x={x} y={y} fill="white"
  // textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
  //       {`${(percent * 100).toFixed(0)}%`}
  //     </text>
  //   );
  // };

  const fetchData = () => {
    ReportService.getAccountCostShare()
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
          Account Cost Share
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

SubscriptionPieChart.propTypes = {
};

export default withTheme(SubscriptionPieChart);
