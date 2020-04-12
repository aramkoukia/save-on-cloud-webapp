import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, Button, CardContent, Icon, Typography, withTheme, TextField, Grid,
} from '@material-ui/core';
import AzureInstructions from './AzureInstructions';

function AddAzureSubscription() {
  const history = useHistory();
  function handleAddSubscription() {
    history.push('/c/subscription');
  }

  function handleTestSubscription() {
    history.push('/c/subscription');
  }

  return (
    <div>
      <Typography color="secondary" paragraph>
        Add New Azure Subscription
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <AzureInstructions />

          <br />
          <Typography color="secondary" paragraph>
            Add The Service Principal to your Account
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <TextField
                variant="outlined"
                margin="dense"
                required
                fullWidth
                label="Subscription Id"
                autoFocus
                type="text"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                variant="outlined"
                margin="dense"
                required
                fullWidth
                label="Tenant Id or Tenant name"
                autoFocus
                type="text"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                variant="outlined"
                margin="dense"
                required
                fullWidth
                label="Client Id"
                autoFocus
                type="text"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                variant="outlined"
                margin="dense"
                required
                fullWidth
                label="Client Secret"
                autoFocus
                type="text"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleTestSubscription}
                endIcon={<Icon>cloudDone</Icon>}
              >
                Test
              </Button>
              &nbsp;&nbsp;
              <Button
                variant="contained"
                color="secondary"
                onClick={handleAddSubscription}
                endIcon={<Icon>save</Icon>}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

AddAzureSubscription.propTypes = {
};

export default withTheme(AddAzureSubscription);
