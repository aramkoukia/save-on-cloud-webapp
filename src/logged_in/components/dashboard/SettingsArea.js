import React from 'react';
import PropTypes from 'prop-types';
import CloudAccounts from './CloudAccounts';

function SettingsArea(props) {
  const { pushMessageToSnackbar } = props;
  return (
    <>
      <CloudAccounts pushMessageToSnackbar={pushMessageToSnackbar} />
    </>
  );
}

SettingsArea.propTypes = {
  pushMessageToSnackbar: PropTypes.func,
};

export default SettingsArea;
