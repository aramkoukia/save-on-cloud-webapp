import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, Typography, withTheme,
} from '@material-ui/core';
import SubscriptionService from '../../../services/SubscriptionService';

function BillingInformation() {
  const [subscriptionData, setSubscriptionData] = useState([]);

  const fetchData = () => {
    SubscriptionService.getSubscriptions()
      .then((result) => {
        setSubscriptionData(result);
      });
  };

  useEffect(() => {
    fetchData(subscriptionData);
  }, []);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="primary" gutterBottom>
          Billing Information
        </Typography>
        <Typography color="primaryText" gutterBottom>
          Random Org Services Inc
          <br />
          1111 WEST HASTINGS ST STE 500, V48 0CD
          <br />
          VANCOUVER BC Canada
          <br />
          it@ramdomorg.ca
        </Typography>
      </CardContent>
    </Card>
  );
}

BillingInformation.propTypes = {
};

export default withTheme(BillingInformation);
