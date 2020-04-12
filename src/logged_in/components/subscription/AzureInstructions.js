/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Typography, withTheme } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

function AzureInstructions() {
  return (
    <div>
      <Typography variant="h6" color="primary" paragraph>
        How Does It Work?
      </Typography>
      <Typography paragraph>
        Automated tools that use Azure services should always have restricted permissions.
        Instead of having applications sign in as a fully privileged user,
        Azure offers service principals.
      </Typography>
      <Typography paragraph>
        An Azure service principal is an identity created for use with applications,
        hosted services, and automated tools to access Azure resources.
        This access is restricted by the roles assigned to the service principal,
        giving you control over which resources can be accessed and at which level.
        For security reasons,
        it's always recommended to use service principals with automated tools
        rather than allowing them to log in with a user identity.
      </Typography>
      <Typography paragraph>
        This instruction shows you the steps for creating,
        getting information about a service principal with the Azure CLI.
      </Typography>

      <hr />

      <Typography variant="h6" color="primary" paragraph>
        Create a service principal
      </Typography>

      <Typography paragraph>
        Create a service principal with the az ad sp create-for-rbac command.
        When creating a service principal, you choose the type of sign-in authentication it uses.
      </Typography>

      <Alert severity="warning">
        <AlertTitle>Note</AlertTitle>
        <Typography paragraph>
          If your account doesn't have permission to create a service principal,
          &nbsp;
          <b>az ad sp create-for-rbac</b>
          &nbsp;
          will return an error message containing
          &nbsp;
          <strong>
            "Insufficient
            privileges to complete the operation."
          </strong>
          &nbsp;
          Contact your Azure
          Active Directory admin to create a service principal.
        </Typography>
      </Alert>

      <br />

      <Typography paragraph>
        There are two types of authentication available for service principals:
        Password-based authentication, and certificate-based authentication.
      </Typography>

      <Typography color="primary" paragraph>
        <b>Password-based authentication</b>
      </Typography>

      <Typography paragraph>
        Without any authentication parameters, password-based
        authentication is used with a random password created for you.
      </Typography>

      <Typography variant="h6" color="primary" paragraph>
        <pre>az ad sp create-for-rbac --name ServicePrincipalName</pre>
      </Typography>

      <Alert severity="info">
        <AlertTitle>Important</AlertTitle>
        <Typography paragraph>
          As of Azure CLI 2.0.68, the --password parameter to create a
          service principal with a user-defined password is no
          longer supported to prevent the accidental use of weak passwords.
        </Typography>
      </Alert>

      <br />

      <Typography paragraph>
        The output for a service principal with password authentication
        includes the password key.
        &nbsp;
        <strong>Make sure you copy this value - it can't be retrieved.</strong>
        &nbsp;
        If you forget the password, reset the service principal credentials.
      </Typography>

      <Typography paragraph>
        The
        &nbsp;
        <strong>appId</strong>
        &nbsp;
        and
        &nbsp;
        <strong>tenant keys</strong>
        &nbsp;
        appear in the output of:
        <Typography variant="h6" color="primary" paragraph>
          <pre>az ad sp create-for-rbac</pre>
        </Typography>
        and are used in service principal authentication.
        Record their values, but they can be retrieved at any point with:
        <Typography variant="h6" color="primary" paragraph>
          <pre>az ad sp list</pre>
        </Typography>
      </Typography>
    </div>
  );
}

export default withTheme(AzureInstructions);
