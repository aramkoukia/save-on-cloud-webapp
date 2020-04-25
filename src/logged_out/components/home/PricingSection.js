import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles,
} from '@material-ui/core';
import PriceCard from './PriceCard';
import calculateSpacing from './calculateSpacing';

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: 'hidden',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 360,
    },
  },
});

function PricingSection(props) {
  const { width, classes, openRegisterDialog } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: '#FFFFFF' }}>
      <Typography color="secondary" variant="h3" align="center" className="lg-mg-bottom">
        How much does it cost?
      </Typography>
      <div className={classNames('container-fluid', classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <PriceCard
              title="Starter Plan"
              pricing={(
                <span>
                  Free For Ever
                </span>
              )}
              features={['Under 10k$ Per Month Cloud Spending', 'All Features Are Available']}
              openRegisterDialog={openRegisterDialog}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <PriceCard
              // highlighted
              title="Pro Plan"
              pricing={(
                <span>
                  $25.00
                  <Typography display="inline"> / Month</Typography>
                </span>
              )}
              features={['Between 10k$ and 50k$ Per Month Cloud Spending', 'All Features Are Available']}
              openRegisterDialog={openRegisterDialog}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp('md', width) ? '400' : '0'}
          >
            <PriceCard
              title="Premium Plan"
              pricing={(
                <span>
                  $125.00
                  <Typography display="inline"> / Month</Typography>
                </span>
              )}
              features={['Between 50k$ and 400k$ Per Month Cloud Spending', 'All Features Are Available']}
              openRegisterDialog={openRegisterDialog}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp('md', width) ? '400' : '0'}
          >
            <PriceCard
              title="Enterprise Plan"
              pricing={(
                <span>
                  $1000.00
                  <Typography display="inline"> / Month</Typography>
                </span>
              )}
              features={['Over 400k$ Per Month Cloud Spending', 'All Features Are Available']}
              openRegisterDialog={openRegisterDialog}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  openRegisterDialog: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection),
);
