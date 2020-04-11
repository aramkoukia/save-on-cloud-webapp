import React from 'react';
import propTypes from 'prop-types';
import {
  Card, Button, CardContent, withTheme, Icon,
} from '@material-ui/core';

function AddSubscription(props) {
  const {
    onAddAzureSubscription,
    onAddAwsSubscription,
  } = props;
  return (
    <Card variant="outlined">
      <CardContent>
        <Button
          variant="contained"
          color="primary"
          onClick={onAddAwsSubscription}
          endIcon={<Icon>add</Icon>}
        >
          Add Azure Subscription
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          color="secondary"
          onClick={onAddAzureSubscription}
          endIcon={<Icon>add</Icon>}
        >
          Add AWS Subscription
        </Button>
      </CardContent>
    </Card>
  );
}

AddSubscription.propTypes = {
  onAddAzureSubscription: propTypes.func.isRequired,
  onAddAwsSubscription: propTypes.func.isRequired,
};

export default withTheme(AddSubscription);
