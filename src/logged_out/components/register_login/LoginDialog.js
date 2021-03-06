import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import {
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  withStyles,
} from '@material-ui/core';
import FormDialog from '../../../shared/components/FormDialog';
import HighlightedInformation from '../../../shared/components/HighlightedInformation';
import ButtonCircularProgress from '../../../shared/components/ButtonCircularProgress';
import VisibilityPasswordTextField from '../../../shared/components/VisibilityPasswordTextField';
import AuthService from '../../../services/AuthService';

const styles = (theme) => ({
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    cursor: 'pointer',
    '&:enabled:hover': {
      color: theme.palette.primary.dark,
    },
    '&:enabled:focus': {
      color: theme.palette.primary.dark,
    },
  },
  disabledText: {
    cursor: 'auto',
    color: theme.palette.text.disabled,
  },
  formControlLabel: {
    marginRight: 0,
  },
});

class LoginDialog extends PureComponent {
  state = { loading: false, passwordIsVisible: false };

  onVisibilityChange = (isVisible) => {
    this.setState({ passwordIsVisible: isVisible });
  };

  login = async () => {
    const { setStatus, history } = this.props;
    this.setState({
      loading: true,
    });
    setStatus(null);

    const result = await AuthService.signIn(this.loginEmail.value, this.loginPassword.value);
    if (result.is_error) {
      setStatus('invalidEmail');
      this.setState({
        loading: false,
      });
    } else {
      history.push('/c/dashboard');
    }
  };

  render() {
    const {
      classes,
      onClose,
      openChangePasswordDialog,
      status,
      setStatus,
    } = this.props;
    const { loading, passwordIsVisible } = this.state;
    return (
      <>
        <FormDialog
          open
          onClose={onClose}
          loading={loading}
          onFormSubmit={(e) => {
            e.preventDefault();
            this.login();
          }}
          hideBackdrop
          headline="Login"
          content={(
            <>
              <TextField
                variant="outlined"
                margin="normal"
                error={status === 'invalidEmail'}
                required
                fullWidth
                label="Email Address"
                inputRef={(node) => {
                  this.loginEmail = node;
                }}
                autoFocus
                autoComplete="off"
                type="email"
                onChange={() => {
                  if (status === 'invalidEmail') {
                    setStatus(null);
                  }
                }}
                helperText={
                  status === 'invalidEmail'
                  && "This email address isn't associated with an account."
                }
                FormHelperTextProps={{ error: true }}
              />
              <VisibilityPasswordTextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                error={status === 'invalidPassword'}
                label="Password"
                inputRef={(node) => {
                  this.loginPassword = node;
                }}
                autoComplete="off"
                onChange={() => {
                  if (status === 'invalidPassword') {
                    setStatus(null);
                  }
                }}
                helperText={
                  status === 'invalidPassword' ? (
                    <span>
                      Incorrect password. Try again, or click on
                      {' '}
                      <b>&quot;Forgot Password?&quot;</b>
                      {' '}
                      to reset it.
                    </span>
                  ) : (
                    ''
                  )
                }
                FormHelperTextProps={{ error: true }}
                onVisibilityChange={this.onVisibilityChange}
                isVisible={passwordIsVisible}
              />
              <FormControlLabel
                className={classes.formControlLabel}
                control={(
                  <Checkbox
                    inputRef={(node) => {
                      this.loginRememberMe = node;
                    }}
                    color="primary"
                  />
                )}
                label={<Typography variant="body1">Remember me</Typography>}
              />
              {status === 'verificationEmailSend' ? (
                <HighlightedInformation>
                  We have send instructions on how to reset your password to
                  your email address
                </HighlightedInformation>
              ) : (
                <div />
              )}
            </>
          )}
          actions={(
            <>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                disabled={loading}
                size="large"
              >
                Login
                {loading && <ButtonCircularProgress />}
              </Button>
              <Typography
                align="center"
                className={classNames(
                  classes.forgotPassword,
                  loading ? classes.disabledText : null,
                )}
                color="primary"
                onClick={loading ? null : openChangePasswordDialog}
                tabIndex={0}
                role="button"
                onKeyDown={(event) => {
                  if (
                    (!loading && event.keyCode === 13)
                    || event.keyCode === 32
                  ) {
                    openChangePasswordDialog();
                  }
                }}
              >
                Forgot Password?
              </Typography>
            </>
          )}
        />
      </>
    );
  }
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  status: PropTypes.string,
};

LoginDialog.defaultProps = {
  status: '',
};

export default withRouter(withStyles(styles)(LoginDialog));
