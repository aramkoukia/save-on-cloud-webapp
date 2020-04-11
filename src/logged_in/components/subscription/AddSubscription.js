import React from 'react';
import {
  Card, Button, CardContent, withTheme, Icon,
} from '@material-ui/core';

function AddSubscription() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          endIcon={<Icon>add</Icon>}
        >
          Add Azure Subscription
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          endIcon={<Icon>add</Icon>}
        >
          Add AWS Subscription
        </Button>
      </CardContent>
    </Card>
  );
}

AddSubscription.propTypes = {
};

export default withTheme(AddSubscription);
