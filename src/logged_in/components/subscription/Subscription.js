import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';
import SubscriptionTable from './SubscriptionTable';
import AddSubscription from './AddSubscription';

const styles = {
  divider: {
    backgroundColor: 'rgba(0, 0, 0, 0.26)',
  },
};

class Subscription extends PureComponent {
  componentDidMount() {
    const { selectSubscription } = this.props;
    selectSubscription();
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <AddSubscription />
        </Grid>
        <Grid item xs={12} md={12}>
          <SubscriptionTable />
        </Grid>
      </Grid>
    );
  }
}

Subscription.propTypes = {
  selectSubscription: PropTypes.func.isRequired,
};

export default withStyles(styles)(Subscription);
