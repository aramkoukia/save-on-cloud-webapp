import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos/dist/aos';
import { withStyles } from '@material-ui/core';
import NavBar from './navigation/NavBar';
import Footer from './footer/Footer';
import 'aos/dist/aos.css';
import CookieRulesDialog from './cookies/CookieRulesDialog';
import CookieConsent from './cookies/CookieConsent';
import DialogSelector from './register_login/DialogSelector';
import Routing from './Routing';
import smoothScrollTop from '../../shared/functions/smoothScrollTop';

AOS.init({ once: true });

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    overflowX: 'hidden',
  },
});

class Main extends PureComponent {
  state = {
    selectedTab: null,
    mobileDrawerOpen: false,
    dialogOpen: null,
    cookieRulesDialogOpen: false,
  };

  componentDidMount() {
  }

  selectHome = () => {
    smoothScrollTop();
    document.title = 'Save On Cloud';
    this.setState({ selectedTab: 'Home' });
  };

  openLoginDialog = () => {
    this.setState({ dialogOpen: 'login', mobileDrawerOpen: false });
  };

  closeDialog = () => {
    this.setState({ dialogOpen: null });
  };

  openRegisterDialog = () => {
    this.setState({
      dialogOpen: 'register',
      mobileDrawerOpen: false,
    });
  };

  openTermsDialog = () => {
    this.setState({ dialogOpen: 'termsOfService' });
  };

  handleMobileDrawerOpen = () => {
    this.setState({ mobileDrawerOpen: true });
  };

  handleMobileDrawerClose = () => {
    this.setState({ mobileDrawerOpen: false });
  };

  switchSelectedTab = (tab) => {
    this.setState({ selectedTab: tab });
  };

  openChangePasswordDialog = () => {
    this.setState({ dialogOpen: 'changePassword' });
  };

  handleCookieRulesDialogOpen = () => {
    this.setState({ cookieRulesDialogOpen: true });
  };

  handleCookieRulesDialogClose = () => {
    this.setState({ cookieRulesDialogOpen: false });
  };

  render() {
    const { classes } = this.props;
    const {
      selectedTab,
      mobileDrawerOpen,
      dialogOpen,
      cookieRulesDialogOpen,
    } = this.state;
    return (
      <div className={classes.wrapper}>
        {!cookieRulesDialogOpen && (
          <CookieConsent
            handleCookieRulesDialogOpen={this.handleCookieRulesDialogOpen}
          />
        )}
        <DialogSelector
          openLoginDialog={this.openLoginDialog}
          dialogOpen={dialogOpen}
          onClose={this.closeDialog}
          openTermsDialog={this.openTermsDialog}
          openRegisterDialog={this.openRegisterDialog}
          openChangePasswordDialog={this.openChangePasswordDialog}
        />
        <CookieRulesDialog
          open={cookieRulesDialogOpen}
          onClose={this.handleCookieRulesDialogClose}
        />
        <NavBar
          selectedTab={selectedTab}
          selectTab={this.selectTab}
          openLoginDialog={this.openLoginDialog}
          openRegisterDialog={this.openRegisterDialog}
          mobileDrawerOpen={mobileDrawerOpen}
          handleMobileDrawerOpen={this.handleMobileDrawerOpen}
          handleMobileDrawerClose={this.handleMobileDrawerClose}
        />
        <Routing
          selectHome={this.selectHome}
          openRegisterDialog={this.openRegisterDialog}
          onClose={this.closeDialog}
        />
        <Footer />
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Main);
