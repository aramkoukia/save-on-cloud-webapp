import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import {
  Card, CardContent, Typography, withTheme, Button, Icon,
  Radio, RadioGroup,
  FormControlLabel,
  FormControl,
  Box,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CardSection from './CardSection';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [value, setValue] = React.useState('proPlan');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const stripePaymentMethodHandler = async (result) => {
    if (result.error) {
      // Show error in payment form
    } else {
      // Otherwise send paymentMethod.id to your server
      const res = await fetch('/create-customer', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'jenny.rosen@example.com',
          payment_method: result.paymentMethod.id,
        }),
      });
      // The customer has been created
      const customer = await res.json();
      alert(customer);
    }
  };

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: 'jenny.rosen@example.com',
      },
    });

    stripePaymentMethodHandler(result);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="primary" gutterBottom>
          Plan Information
          &nbsp;
        </Typography>
        <FormControl component="fieldset">
          {/* <FormLabel component="legend">Select Plan</FormLabel> */}
          <RadioGroup aria-label="Select Plan" name="plan" value={value} onChange={handleChange}>
            <FormControlLabel value="freePLan" control={<Radio />} label="Free Plan" />
            <FormControlLabel value="proPlan" control={<Radio />} label="Pro Plan (25$ / Month)" />
            <FormControlLabel value="premiumPlan" control={<Radio />} label="Premium Plan (125$ / Month)" />
            <FormControlLabel value="enterprisePlan" control={<Radio />} label="Enterprise Plan (1000$ / Month)" />
          </RadioGroup>
        </FormControl>
        <br />

        { value === 'proPlan' && (
          <Card>
            <Box p={2}>
              <Typography variant="h6" color="primary" gutterBottom>
                Pro Plan Details
                <Box p={1} display="flex" alignItems="center">
                  <CheckIcon />
                  <Typography variant="body1">
                    All Features are available
                  </Typography>
                </Box>
                <Box p={1} display="flex" alignItems="center">
                  <CheckIcon />
                  <Typography variant="body1">
                    25$ Per Month
                  </Typography>
                </Box>
              </Typography>
            </Box>
          </Card>
        )}
        { value === 'freePLan' && (
          <Card>
            <Box p={2}>
              <Typography variant="h6" color="primary" gutterBottom>
                Free Plan Details
                <Box p={1} display="flex" alignItems="center">
                  <CheckIcon />
                  <Typography variant="body1">
                    All Features are available
                  </Typography>
                </Box>
                <Box p={1} display="flex" alignItems="center">
                  <CheckIcon />
                  <Typography variant="body1">
                    Free Forever!
                  </Typography>
                </Box>
              </Typography>
            </Box>
          </Card>
        )}
        { value === 'premiumPlan' && (
          <Card>
            <Box p={2}>
              <Typography variant="h6" color="primary" gutterBottom>
                Premium Plan Details
                <Box p={1} display="flex" alignItems="center">
                  <CheckIcon />
                  <Typography variant="body1">
                    All Features are available
                  </Typography>
                </Box>
                <Box p={1} display="flex" alignItems="center">
                  <CheckIcon />
                  <Typography variant="body1">
                    125$ Per Month
                  </Typography>
                </Box>
              </Typography>
            </Box>
          </Card>
        )}
        { value === 'enterprisePlan' && (
          <Card>
            <Box p={2}>
              <Typography variant="h6" color="primary" gutterBottom>
                Enterprise Plan Details
                <Box p={1} display="flex" alignItems="center">
                  <CheckIcon />
                  <Typography variant="body1">
                    All Features are available
                  </Typography>
                </Box>
                <Box p={1} display="flex" alignItems="center">
                  <CheckIcon />
                  <Typography variant="body1">
                    1000$ Per Month
                  </Typography>
                </Box>
              </Typography>
            </Box>
          </Card>
        )}
        <br />

        <form onSubmit={handleSubmit}>
          <CardSection />
          <br />
          <Button
            type="submit"
            disabled={!stripe}
            right
            variant="contained"
            color="secondary"
            disableElevation
            endIcon={<Icon>dvr</Icon>}
          >
            Pay And Subscribe
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default withTheme(CheckoutForm);
