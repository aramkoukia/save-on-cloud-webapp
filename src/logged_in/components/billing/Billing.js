import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withTheme } from '@material-ui/core';
import PaymentHistoryTable from './PaymentHistoryTable';
import BillingInformation from './BillingInformation';
import PlanInformation from './PlanInformation';
import PaymentInformation from './PaymentInformation';

function Billing(props) {
  const {
    selectBilling,
  } = props;

  selectBilling();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <PlanInformation />
      </Grid>
      <Grid item xs={12} md={6}>
        <PaymentInformation />
      </Grid>
      <Grid item xs={12} md={6}>
        <BillingInformation />
      </Grid>
      <Grid item xs={12} md={12}>
        <PaymentHistoryTable />
      </Grid>
    </Grid>
  );
}

Billing.propTypes = {
  selectBilling: PropTypes.func.isRequired,
};

export default withTheme(Billing);
