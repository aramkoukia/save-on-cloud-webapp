import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, Button, CardContent, withTheme, Icon,
} from '@material-ui/core';

function AddAzureSubscription() {
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
          Add Azure Subscription
        </Button>
      </CardContent>
    </Card>
  );
}

AddAzureSubscription.propTypes = {
};

export default withTheme(AddAzureSubscription);
