import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, Button, CardContent, withTheme, Icon,
} from '@material-ui/core';

function AddAwsSubscription() {
  const history = useHistory();

  function handleAddSubscription() {
    history.push('/c/subscription');
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddSubscription}
          endIcon={<Icon>add</Icon>}
        >
          Add AWS Subscription
        </Button>
      </CardContent>
    </Card>
  );
}

AddAwsSubscription.propTypes = {
};

export default withTheme(AddAwsSubscription);
