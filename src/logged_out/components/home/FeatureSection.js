import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Typography, isWidthUp, withWidth,
} from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import ComputerIcon from '@material-ui/icons/Computer';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MeassageIcon from '@material-ui/icons/Message';
import calculateSpacing from './calculateSpacing';
import FeatureCard from './FeatureCard';

const iconSize = 30;

const features = [
  {
    color: '#00C853',
    headline: 'Focus on the big costs',
    text:
      'Show the most expensive service on a daily basis',
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: '0',
    smDelay: '0',
  },
  {
    color: '#6200EA',
    headline: 'Focus on the spending trends',
    text:
      'Show the fastest growing service from cost point of view in the last few days ',
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: '200',
    smDelay: '200',
  },
  {
    color: '#0091EA',
    headline: 'Focus on what\'s not used',
    text:
      'Show top useless services that are paid for (Logs, API calls, Cert manager, etc) ',
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: '400',
    smDelay: '0',
  },
  {
    color: '#d50000',
    headline: 'Real-time running cost and forecasting',
    text:
      'Our real-time running cost feature allows you to know your Cloud spend in real-time long before you are surprised with a huge bill.',
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: '0',
    smDelay: '200',
  },
  {
    color: '#DD2C00',
    headline: 'Cloud Spend Alert and Notification',
    text:
      'You will get notified if your Cloud services started to spend a lot of money, so you can stop them before it is too late.',
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: '200',
    smDelay: '0',
  },
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          How can Save On Cloud help?
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map((element) => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp('md', width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(FeatureSection);
