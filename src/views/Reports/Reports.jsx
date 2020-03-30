import React from 'react';
import PropTypes from 'prop-types';
import ChartistGraph from 'react-chartist';
import withStyles from '@material-ui/core/styles/withStyles';
import { dailySalesChart } from '../../variables/charts';
import dashboardStyle from '../../assets/jss/material-dashboard-react/views/dashboardStyle';
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import ReportService from '../../services/ReportService';

class Reports extends React.Component {
  constructor(props) {
    super(props);

    this.state = { azureCost: {} };
  }

  componentDidMount() {
    // this.setState({ loading: true });

    ReportService.getAzureCost()
      .then((result) => {
        const azureCost = {
          labels: result.map(item => item.label),
          series: [result.map(item => item.value)],
        };
        this.setState({ azureCost });
      });
  }

  render() {
    const { classes } = this.props;
    const {
      azureCost,
    } = this.state;
    const options = {
      seriesBarDistance: 100,
      reverseData: true,
      horizontalBars: true,
      axisY: {
        offset: 150,
        scaleMinSpace: 50,
      },
      height:500,
    };

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
                <h4 className={classes.cardTitle}>Resource Cost</h4>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Reports.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Reports);
