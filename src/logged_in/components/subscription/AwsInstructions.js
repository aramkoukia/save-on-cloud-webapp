/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Typography, withTheme, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary,
  Grid,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function AwsInstructions() {
  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography color="secondary" paragraph>
            How Does It Work?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
              <Typography paragraph>
                Test
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography paragraph>
                Test
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography paragraph>
                Test
              </Typography>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        defaultExpanded
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography color="secondary" paragraph>
            How To Create Service Principal in AWS?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
              <Typography paragraph>
                Test
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Alert severity="warning">
                <AlertTitle>Note</AlertTitle>
                <Typography paragraph>
                  Test
                </Typography>
              </Alert>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography paragraph>
                Test
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography color="primary" paragraph>
                <b>Password-based authentication</b>
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography paragraph>
                Test
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="h6" color="primary" paragraph>
                <pre>test</pre>
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Alert severity="info">
                <AlertTitle>Important</AlertTitle>
                <Typography paragraph>
                  Test
                </Typography>
              </Alert>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography paragraph>
                Test
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography paragraph>
                Test
              </Typography>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default withTheme(AwsInstructions);
