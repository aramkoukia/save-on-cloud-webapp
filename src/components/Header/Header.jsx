import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/icons/Menu';
import Button from '../CustomButtons/Button';
import headerStyle from '../../assets/jss/material-dashboard-react/components/headerStyle';
import HeaderLinks from './HeaderLinks';

class Header extends React.Component {
  render() {
    const { classes, color, handleDrawerToggle } = this.props;
    const appBarClasses = classNames({
      [` ${classes[color]}`]: color,
    });

    return (
      <AppBar className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          <div className={classes.flex}>
            {/* Here we create navbar brand, based on route name */}
            <Button color="transparent" href="#" className={classes.title}>
              Save On Cloud
            </Button>
          </div>
          <Hidden smDown implementation="css">
            <HeaderLinks />
          </Hidden>
          <Hidden mdUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  handleDrawerToggle: PropTypes.func,
};

export default withStyles(headerStyle)(Header);
