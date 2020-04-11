import React, { useEffect, useState } from 'react';
import {
  Card, CardContent, Typography, withTheme, Icon, Button,
  TableContainer, Table, TableRow, TableCell, TableHead,
  TableBody,
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
          &nbsp;
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            endIcon={<Icon>edit</Icon>}
          >
            Update
          </Button>
        </Typography>
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Company Name</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Province</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Portal Code</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Random Org Services Inc</TableCell>
                <TableCell>1111 WEST HASTINGS ST STE 500</TableCell>
                <TableCell>Canada</TableCell>
                <TableCell>BC</TableCell>
                <TableCell>Vancouver</TableCell>
                <TableCell>V48 0CD</TableCell>
                <TableCell>it@ramdomorg.ca</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

BillingInformation.propTypes = {
};

export default withTheme(BillingInformation);
