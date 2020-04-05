import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import PropsRoute from '../../shared/components/PropsRoute';
import Home from './home/Home';

function Routing(props) {
  const { selectHome } = props;
  return (
    <Switch>
      )
      <PropsRoute path="/" component={Home} selectHome={selectHome} />
      )
    </Switch>
  );
}

Routing.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default memo(Routing);
