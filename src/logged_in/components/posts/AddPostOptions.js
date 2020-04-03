import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  FormControl,
  Select,
  OutlinedInput,
  MenuItem,
  Box,
  withStyles,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Bordered from '../../../shared/components/Bordered';
import ImageCropperDialog from '../../../shared/components/ImageCropperDialog';

const styles = (theme) => ({
  floatButtonWrapper: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 1000,
  },
  inputRoot: {
    width: 190,
    '@media (max-width:  400px)': {
      width: 160,
    },
    '@media (max-width:  360px)': {
      width: 140,
    },
    '@media (max-width:  340px)': {
      width: 120,
    },
  },
  uploadIcon: {
    fontSize: 48,
    transition: theme.transitions.create(['color', 'box-shadow', 'border'], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  imgWrapper: { position: 'relative' },
  img: {
    width: '100%',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: theme.shape.borderRadius,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  uploadText: {
    transition: theme.transitions.create(['color', 'box-shadow', 'border'], {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  numberInput: {
    width: 110,
  },
  numberInputInput: {
    padding: '9px 34px 9px 14.5px',
  },
  emojiTextArea: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginRight: -1,
  },
  dNone: {
    display: 'none',
  },
});

const inputOptions = ['None', 'Slow', 'Normal', 'Fast'];

class AddPostOptions extends PureComponent {
  state = {
    option1: 'None',
    option2: 'None',
    option3: 'None',
    option4: 'None',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  printFile = () => {
    const {
      Dropzone, classes, files, deleteItem, onDrop,
    } = this.props;
    if (files[0]) {
      return (
        <div className={classes.imgWrapper}>
          <img
            alt="uploaded item"
            src={files[0].preview}
            className={classes.img}
            style={{ height: 151 }}
          />
          <div className={classes.floatButtonWrapper}>
            <IconButton onClick={deleteItem}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      );
    }
    return (
      <Dropzone accept="image/png, image/jpeg" onDrop={onDrop} fullHeight>
        <span className={classes.uploadText}>
          Click / Drop file
          {' '}
          <br />
          {' '}
          here
        </span>
      </Dropzone>
    );
  };

  render() {
    const {
      EmojiTextArea,
      ImageCropper,
      classes,
      DateTimePicker,
      cropperFile,
      onCrop,
      onCropperClose,
      uploadAt,
      onChangeUploadAt,
    } = this.props;
    const {
      option1, option2, option3, option4,
    } = this.state;
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
      <>
        {ImageCropper && (
          <ImageCropperDialog
            open={!!cropperFile}
            ImageCropper={ImageCropper}
            src={cropperFile ? cropperFile.preview : ''}
            onCrop={onCrop}
            onClose={onCropperClose}
            aspectRatio={4 / 3}
          />
        )}
        <Typography paragraph variant="h6">
          Upload Image
        </Typography>
        <Box mb={2}>
          {EmojiTextArea && (
            <EmojiTextArea
              inputClassName={classes.emojiTextArea}
              maxCharacters={2200}
              rightContent={this.printFile()}
              emojiSet="google"
            />
          )}
        </Box>
        <Typography paragraph variant="h6">
          Options
        </Typography>
        <List disablePadding>
          <Bordered disableVerticalPadding disableBorderRadius>
            <ListItem divider disableGutters className="listItemLeftPadding">
              <ListItemText>
                <Typography variant="body2">Upload at</Typography>
              </ListItemText>
              <ListItemSecondaryAction>
                {DateTimePicker && (
                  <DateTimePicker
                    value={uploadAt}
                    format="yyyy/MM/dd hh:mm a"
                    onChange={onChangeUploadAt}
                    disablePast
                  />
                )}
              </ListItemSecondaryAction>
            </ListItem>
            {inputs.map((element, index) => (
              <ListItem
                className="listItemLeftPadding"
                disableGutters
                divider={index !== inputs.length - 1}
                key={index}
              >
                <ListItemText>
                  <Typography variant="body2">{element.label}</Typography>
                </ListItemText>
                <FormControl variant="outlined">
                  <ListItemSecondaryAction>
                    <Select
                      value={element.state}
                      onChange={this.handleChange}
                      input={(
                        <OutlinedInput
                          name={element.stateName}
                          labelWidth={0}
                          className={classes.numberInput}
                          classes={{ input: classes.numberInputInput }}
                        />
                      )}
                    >
                      {inputOptions.map((innerElement) => (
                        <MenuItem value={innerElement} key={innerElement}>
                          {innerElement}
                        </MenuItem>
                      ))}
                    </Select>
                  </ListItemSecondaryAction>
                </FormControl>
              </ListItem>
            ))}
          </Bordered>
        </List>
      </>
    );
  }
}

AddPostOptions.propTypes = {
  onEmojiTextareaChange: PropTypes.func,
  DateTimePicker: PropTypes.elementType,
  EmojiTextArea: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
  classes: PropTypes.object,
  cropperFile: PropTypes.object,
  onCrop: PropTypes.func,
  onCropperClose: PropTypes.func,
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteItem: PropTypes.func,
  onDrop: PropTypes.func,
  value: PropTypes.string,
  characters: PropTypes.number,
  uploadAt: PropTypes.instanceOf(Date),
  onChangeUploadAt: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(AddPostOptions);
