import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import PropsRoute from '../../shared/components/PropsRoute';
import Home from './home/Home';

function Routing(props) {
  const { selectHome, openRegisterDialog } = props;
  return (
    <Switch>
      )
      <PropsRoute
        path="/"
        component={Home}
        selectHome={selectHome}
        openRegisterDialog={openRegisterDialog}
      />
      )
    </Switch>
  );
}

Routing.propTypes = {
  selectHome: PropTypes.func.isRequired,
  openRegisterDialog: PropTypes.func.isRequired,
};

export default memo(Routing);
