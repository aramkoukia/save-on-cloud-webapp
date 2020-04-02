import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import currencyPrettyPrint from '../../../shared/functions/currencyPrettyPrint';

const styles = {
  input: { padding: '10px 9px', cursor: 'pointer' },
  outlinedInput: {
    width: 400,
    height: 40,
    cursor: 'pointer',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
};

function Balance(props) {
  const { balance } = props;
  return (
    <div>
      <Typography color="primary">
        Total spending this month:
        {currencyPrettyPrint(balance)}
      </Typography>
    </div>
  );
}

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default withStyles(styles)(Balance);
