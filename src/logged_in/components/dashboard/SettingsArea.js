import React from 'react';
import PropTypes from 'prop-types';
import Settings1 from './Settings1';
import Settings2 from './Settings2';

function SettingsArea(props) {
  const { pushMessageToSnackbar } = props;
  return (
    <>
      <Settings1 pushMessageToSnackbar={pushMessageToSnackbar} />
      <Settings2 pushMessageToSnackbar={pushMessageToSnackbar} />
    </>
  );
}

SettingsArea.propTypes = {
  pushMessageToSnackbar: PropTypes.func,
};

export default SettingsArea;
