import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FormHelperText,
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
  link: {
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: 'pointer',
    color: theme.palette.primary.main,
    '&:enabled:hover': {
      color: theme.palette.primary.dark,
    },
    '&:enabled:focus': {
      color: theme.palette.primary.dark,
    },
  },
});

class RegisterDialog extends PureComponent {
  state = {
    loading: false,
    termsOfServiceError: false,
    passwordIsVisible: false,
  };

  register = async () => {
    const { setStatus } = this.props;
    if (!this.registerTermsCheckbox.checked) {
      this.setState({ termsOfServiceError: true });
      return;
    }
    if (this.registerPassword.value !== this.registerPasswordRepeat.value) {
      setStatus('passwordsDontMatch');
      return;
    }
    this.setState({ loading: true });
    const result = await AuthService.register(
      this.registerEmail.value,
      this.registerPassword.value,
    );

    if (result.is_error) {
      setStatus(result.error_content);
    } else {
      setStatus('accountCreated');
    }
    this.setState({ loading: false });
  };

  onVisibilityChange = (isVisible) => {
    this.setState({ passwordIsVisible: isVisible });
  };

  render() {
    const {
      theme,
      onClose,
      openTermsDialog,
      setStatus,
      status,
      classes,
    } = this.props;
    const { loading, termsOfServiceError, passwordIsVisible } = this.state;
    return (
      <FormDialog
        loading={loading}
        onClose={onClose}
        open
        headline="Register"
        onFormSubmit={(e) => {
          e.preventDefault();
          this.register();
        }}
        hideBackdrop
        hasCloseIcon
        content={(
          <>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={status === 'invalidEmail'}
              label="Email Address"
              inputRef={(node) => {
                this.registerEmail = node;
              }}
              autoFocus
              autoComplete="off"
              type="email"
              onChange={() => {
                if (status === 'invalidEmail') {
                  setStatus(null);
                }
              }}
              FormHelperTextProps={{ error: true }}
            />
            <VisibilityPasswordTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={
                status === 'passwordTooShort' || status === 'passwordsDontMatch' || status === 'PasswordRequiresNonAlphanumeric'
              }
              label="Password"
              inputRef={(node) => {
                this.registerPassword = node;
              }}
              autoComplete="off"
              onChange={() => {
                if (
                  status === 'passwordTooShort'
                  || status === 'passwordsDontMatch'
                  || status === 'PasswordRequiresNonAlphanumeric'
                ) {
                  setStatus(null);
                }
              }}
              helperText={(() => {
                if (status === 'passwordTooShort') {
                  return 'Create a password at least 6 characters long.';
                }
                if (status === 'passwordsDontMatch') {
                  return 'Your passwords dont match.';
                }
                if (status === 'PasswordRequiresNonAlphanumeric') {
                  return 'Your password requires at least one Non Alphanumeric character.';
                }
                return null;
              })()}
              FormHelperTextProps={{ error: true }}
              isVisible={passwordIsVisible}
              onVisibilityChange={this.onVisibilityChange}
            />
            <VisibilityPasswordTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={
                status === 'passwordTooShort' || status === 'passwordsDontMatch' || status === 'PasswordRequiresNonAlphanumeric'
              }
              label="Repeat Password"
              inputRef={(node) => {
                this.registerPasswordRepeat = node;
              }}
              autoComplete="off"
              onChange={() => {
                if (
                  status === 'passwordTooShort'
                  || status === 'passwordsDontMatch'
                  || status === 'PasswordRequiresNonAlphanumeric'
                ) {
                  setStatus(null);
                }
              }}
              helperText={(() => {
                if (status === 'passwordTooShort') {
                  return 'Create a password at least 6 characters long.';
                }
                if (status === 'passwordsDontMatch') {
                  return 'Your passwords dont match.';
                }
                if (status === 'PasswordRequiresNonAlphanumeric') {
                  return 'Your password requires at least one Non Alphanumeric character.';
                }
              })()}
              FormHelperTextProps={{ error: true }}
              isVisible={passwordIsVisible}
              onVisibilityChange={this.onVisibilityChange}
            />
            <FormControlLabel
              style={{ marginRight: 0 }}
              control={(
                <Checkbox
                  color="primary"
                  inputRef={(node) => {
                    this.registerTermsCheckbox = node;
                  }}
                  onChange={() => {
                    this.setState({ termsOfServiceError: false });
                  }}
                />
              )}
              label={(
                <Typography variant="body1">
                  I agree to the
                  <span
                    className={classes.link}
                    onClick={loading ? null : openTermsDialog}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(event) => {
                      if (
                        (!loading && event.keyCode === 13)
                        || event.keyCode === 32
                      ) {
                        openTermsDialog();
                      }
                    }}
                  >
                    {' '}
                    terms of service
                  </span>
                </Typography>
              )}
            />
            {termsOfServiceError && (
              <FormHelperText
                error
                style={{
                  display: 'block',
                  marginTop: theme.spacing(-1),
                }}
              >
                In order to create an account, you have to accept our terms of
                service.
              </FormHelperText>
            )}
            {status === 'accountCreated' ? (
              <HighlightedInformation>
                We have created your account. Please click on the link in the
                email we have sent to you before logging in.
              </HighlightedInformation>
            ) : (
              <div />
            )}
          </>
        )}
        actions={(
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            color="secondary"
            disabled={loading}
          >
            Register
            {loading && <ButtonCircularProgress />}
          </Button>
        )}
      />
    );
  }
}

RegisterDialog.propTypes = {
  theme: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  openTermsDialog: PropTypes.func.isRequired,
  status: PropTypes.string,
  setStatus: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RegisterDialog);
