import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, Typography, withTheme,
} from '@material-ui/core';
import SubscriptionService from '../../../services/SubscriptionService';

function PlanInformation() {
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
          Plan Information
        </Typography>

        <Typography color="textPrimary" gutterBottom>
          Current plan: &nbsp;
          <b>Standard</b>
        </Typography>
      </CardContent>
    </Card>
  );
}

PlanInformation.propTypes = {
};

export default withTheme(PlanInformation);
