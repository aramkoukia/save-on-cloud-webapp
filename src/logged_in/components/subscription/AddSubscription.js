import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, Button, CardContent, withTheme, Icon,
} from '@material-ui/core';

function AddSubscription() {
  const history = useHistory();

  function handleAddAzureSubscription() {
    history.push('/c/addazuresubscription');
  }

  function handleAddAwsSubscription() {
    history.push('/c/addawssubscription');
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddAzureSubscription}
          endIcon={<Icon>add</Icon>}
        >
          Add Azure Subscription
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAddAwsSubscription}
          endIcon={<Icon>add</Icon>}
        >
          Add AWS Subscription
        </Button>
      </CardContent>
    </Card>
  );
}

export default withTheme(AddSubscription);
