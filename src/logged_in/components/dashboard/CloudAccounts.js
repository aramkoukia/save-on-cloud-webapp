import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ListItemText,
  ExpansionPanelDetails,
  FormControl,
  withStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withWidth from '@material-ui/core/withWidth';
import Bordered from '../../../shared/components/Bordered';

const styles = (theme) => ({
  numberInput: {
    width: 110,
  },
  numberInputInput: {
    padding: '9px 34px 9px 14.5px',
  },
  dBlock: { display: 'block' },
  listItemLeftPadding: {
    paddingRight: theme.spacing(3),
  },
  expansionPanelDetails: {
    paddingTop: theme.spacing(0),
    justifyContent: 'flex-end',
  },
});

class CloudAccounts extends Component {
  state = {
    option1: 'None',
    option2: 'None',
    option3: 'None',
    option4: 'None',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'option6') {
      if (value > 7500 || value < 1000) {
        return;
      }
    }
    this.setState({ [name]: value });
  };

  onSubmit = () => {
    const { pushMessageToSnackbar } = this.props;
    setTimeout(() => {
      pushMessageToSnackbar({
        text: 'Your settings have been saved',
      });
    }, 1500);
  };

  render() {
    const {
      option1,
      option2,
      option3,
      option4,
    } = this.state;
    const { classes } = this.props;
    const inputs = [
      {
        state: option1,
        label: 'Option 1',
        stateName: 'option1',
      },
      {
        state: option2,
        label: 'Option 2',
        stateName: 'option2',
      },
      {
        state: option3,
        label: 'Option 3',
        stateName: 'option3',
      },
      {
        state: option4,
        label: 'Option 4',
        stateName: 'option4',
      },
    ];
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Azure Subscriptions</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.dBlock}>
          <List disablePadding>
            <Bordered disableVerticalPadding disableBorderRadius>
              {inputs.map((element, index) => (
                <ListItem
                  className="listItemLeftPadding"
                  disableGutters
                  divider
                  key={index}
                >
                  <ListItemText>
                    <Typography variant="body2">{element.label}</Typography>
                  </ListItemText>
                  <FormControl variant="outlined">
                    <ListItemSecondaryAction
                      className={classes.ListItemSecondaryAction}
                    />
                  </FormControl>
                </ListItem>
              ))}
            </Bordered>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

CloudAccounts.propTypes = {
  classes: PropTypes.object.isRequired,
  pushMessageToSnackbar: PropTypes.func,
};

export default withWidth()(withStyles(styles, { withTheme: true })(CloudAccounts));
