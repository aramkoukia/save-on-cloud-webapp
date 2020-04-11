import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, Button, CardContent, withTheme, Icon,
} from '@material-ui/core';

function AddSubscription() {
  const history = useHistory();

  function HandleAddAzureSubscription() {
    history.push('/c/addazuresubscription');
  }

  function HandleAddAwsSubscription() {
    history.push('/c/addawssubscription');
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Button
          variant="contained"
          color="primary"
          onClick={HandleAddAzureSubscription}
          endIcon={<Icon>add</Icon>}
        >
          Add Azure Subscription
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          color="secondary"
          onClick={HandleAddAwsSubscription}
          endIcon={<Icon>add</Icon>}
        >
          Add AWS Subscription
        </Button>
      </CardContent>
    </Card>
  );
}

export default withTheme(AddSubscription);
