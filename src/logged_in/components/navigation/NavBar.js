import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Gravatar from 'react-gravatar';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Tooltip,
  Box,
  withStyles,
  isWidthUp,
  withWidth,
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import NotificationsPausedIcon from '@material-ui/icons/NotificationsPaused';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import MenuIcon from '@material-ui/icons/Menu';
import Balance from './Balance';
import NavigationDrawer from '../../../shared/components/NavigationDrawer';

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: 0,
    },
  },
  appBarToolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  accountAvatar: {
    backgroundColor: theme.palette.secondary.main,
    height: 24,
    width: 24,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5),
    },
  },
  drawerPaper: {
    height: '100%vh',
    whiteSpace: 'nowrap',
    border: 0,
    width: theme.spacing(7),
    overflowX: 'hidden',
    marginTop: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
    backgroundColor: theme.palette.common.black,
  },
  smBordered: {
    [theme.breakpoints.down('xs')]: {
      borderRadius: '50% !important',
    },
  },
  menuLink: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  iconListItem: {
    width: 'auto',
    borderRadius: theme.shape.borderRadius,
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  textPrimary: {
    color: theme.palette.primary.main,
  },
  mobileItemSelected: {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  username: {
    paddingLeft: 0,
    paddingRight: theme.spacing(2),
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  permanentDrawerListItem: {
    justifyContent: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
});

class NavBar extends PureComponent {
  state = { mobileOpen: false };

  // Will be use to make website more accessible by screen readers
  links = [];

  openMobileDrawer = () => {
    this.setState({ mobileOpen: true });
  };

  closeMobileDrawer = () => {
    this.setState({ mobileOpen: false });
  };

  render() {
    const { mobileOpen } = this.state;
    const {
      selectedTab,
      classes,
      width,
      openAddBalanceDialog,
    } = this.props;
    const menuItems = [
      {
        link: '/c/dashboard',
        name: 'Dashboard',
        onClick: () => {
          this.closeMobileDrawer();
        },
        icon: {
          desktop: (
            <DashboardIcon
              className={
                selectedTab === 'Dashboard' ? classes.textPrimary : 'text-white'
              }
              fontSize="small"
            />
          ),
          mobile: <DashboardIcon className="text-white" />,
        },
      },
      {
        link: '/c/reports',
        name: 'Daily Cost Monitoring',
        onClick: () => {
          this.closeMobileDrawer();
        },
        icon: {
          desktop: (
            <AssessmentIcon
              className={
                 selectedTab === 'Daily Cost Monitoring' ? classes.textPrimary : 'text-white'
               }
              fontSize="small"
            />
          ),
          mobile: <AssessmentIcon className="text-white" />,
        },
      },
      {
        link: '/c/reports',
        name: 'Most Expensive Resources',
        onClick: () => {
          this.closeMobileDrawer();
        },
        icon: {
          desktop: (
            <MonetizationOnIcon
              className={
                 selectedTab === 'Most Expensive Resources' ? classes.textPrimary : 'text-white'
               }
              fontSize="small"
            />
          ),
          mobile: <MonetizationOnIcon className="text-white" />,
        },
      },
      {
        link: '/c/reports',
        name: 'Fastest Growing Resources',
        onClick: () => {
          this.closeMobileDrawer();
        },
        icon: {
          desktop: (
            <TrendingUpIcon
              className={
                 selectedTab === 'Fastest Growing Resources' ? classes.textPrimary : 'text-white'
               }
              fontSize="small"
            />
          ),
          mobile: <TrendingUpIcon className="text-white" />,
        },
      },
      {
        link: '/c/reports',
        name: 'Useless Resources',
        onClick: () => {
          this.closeMobileDrawer();
        },
        icon: {
          desktop: (
            <NotificationsPausedIcon
              className={
                 selectedTab === 'Useless Resources' ? classes.textPrimary : 'text-white'
               }
              fontSize="small"
            />
          ),
          mobile: <NotificationsPausedIcon className="text-white" />,
        },
      },
      {
        link: '/c/subscription',
        name: 'Cloud Accounts',
        onClick: () => {
          this.closeMobileDrawer();
        },
        icon: {
          desktop: (
            <AccountBalanceIcon
              className={
                selectedTab === 'Cloud Accounts'
                  ? classes.textPrimary
                  : 'text-white'
              }
              fontSize="small"
            />
          ),
          mobile: <AccountBalanceIcon className="text-white" />,
        },
      },
      {
        link: '/',
        name: 'Logout',
        icon: {
          desktop: (
            <PowerSettingsNewIcon className="text-white" fontSize="small" />
          ),
          mobile: <PowerSettingsNewIcon className="text-white" />,
        },
      },
    ];
    return (
      <>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar className={classes.appBarToolbar}>
            <Box display="flex" alignItems="center">
              <Hidden smUp>
                <Box mr={1}>
                  <IconButton
                    aria-label="Open Navigation"
                    onClick={this.openMobileDrawer}
                    color="primary"
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              </Hidden>
              <Hidden xsDown>
                <Typography
                  variant="h4"
                  className={classes.brandText}
                  display="inline"
                  color="primary"
                >
                  Save
                </Typography>
                <Typography
                  variant="h4"
                  className={classes.brandText}
                  display="inline"
                  color="secondary"
                >
                  On
                </Typography>
                <Typography
                  variant="h4"
                  className={classes.brandText}
                  display="inline"
                  color="primary"
                >
                  Cloud
                </Typography>
              </Hidden>
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              width="100%"
            >
              {isWidthUp('sm', width) && (
                <div>
                  <Balance
                    balance={1545523}
                    openAddBalanceDialog={openAddBalanceDialog}
                  />
                </div>
              )}
              {/* <MessagePopperButton messages={messages} /> */}
              <ListItem
                disableGutters
                className={classNames(classes.iconListItem, classes.smBordered)}
              >
                <Gravatar
                  email="aramkoukia@gmail.com"
                  className={classNames(classes.accountAvatar)}
                />
                {isWidthUp('sm', width) && (
                  <ListItemText
                    className={classes.username}
                    primary={
                      <Typography color="textPrimary">Aram Koukia</Typography>
                    }
                  />
                )}
              </ListItem>
            </Box>
          </Toolbar>
        </AppBar>
        <Hidden xsDown>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            open={false}
          >
            <List>
              {menuItems.map((element, index) => (
                <Link
                  to={element.link}
                  className={classes.menuLink}
                  onClick={element.onClick}
                  key={element.link}
                  ref={(node) => {
                    this.links[index] = node;
                  }}
                >
                  <Tooltip
                    title={element.name}
                    placement="right"
                    key={element.name}
                  >
                    <ListItem
                      selected={selectedTab === element.name}
                      button
                      divider={index !== menuItems.length - 1}
                      className={classes.permanentDrawerListItem}
                      onClick={() => {
                        this.links[index].click();
                      }}
                      aria-label={
                        element.name === 'Logout'
                          ? 'Logout'
                          : `Go to ${element.name}`
                      }
                    >
                      <ListItemIcon className={classes.justifyCenter}>
                        {element.icon.desktop}
                      </ListItemIcon>
                      {/* {element.name} */}
                    </ListItem>
                  </Tooltip>
                </Link>
              ))}
            </List>
          </Drawer>
        </Hidden>
        <NavigationDrawer
          menuItems={menuItems.map((element) => ({
            link: element.link,
            name: element.name,
            icon: element.icon.mobile,
            onClick: element.onClick,
          }))}
          anchor="left"
          open={mobileOpen}
          selectedItem={selectedTab}
          onClose={this.closeMobileDrawer}
        />
      </>
    );
  }
}

NavBar.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
};

export default withWidth()(withStyles(styles, { withTheme: true })(NavBar));
