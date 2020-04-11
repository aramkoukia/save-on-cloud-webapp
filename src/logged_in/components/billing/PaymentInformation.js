import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, Typography, withTheme,
} from '@material-ui/core';
import SubscriptionService from '../../../services/SubscriptionService';

function PaymentInformation() {
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
          Payment Method
        </Typography>
        <Typography color="primaryText" gutterBottom>
          <b>Card</b>
          &nbsp;
          555077******0466
          &nbsp;
          Expires 06/2022
        </Typography>
      </CardContent>
    </Card>
  );
}

PaymentInformation.propTypes = {
};

export default withTheme(PaymentInformation);
