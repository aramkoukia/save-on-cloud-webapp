import React from 'react';
import ChartistGraph from 'react-chartist';
import { dailySalesChart } from '../../variables/charts';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import ReportService from '../../services/ReportService';

export default function Reports() {
  const [azureCost, setAzureCost] = React.useState({});

  ReportService.getAzureCost()
    .then((result) => {
      setAzureCost({
        labels: result.map(item => item.label),
        series: [result.map(item => item.value)],
      });
    });

  const options = {
    seriesBarDistance: 100,
    reverseData: true,
    horizontalBars: true,
    axisY: {
      offset: 150,
      scaleMinSpace: 50,
    },
    height: 500,
  };
  // const { ...rest } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={azureCost}
                type="Bar"
                options={options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4>Resource Cost</h4>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
