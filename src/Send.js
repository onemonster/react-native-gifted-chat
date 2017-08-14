import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';

export default class Send extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.text.trim().length === 0 && nextProps.text.trim().length > 0 || this.props.text.trim().length > 0 && nextProps.text.trim().length === 0) {
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.containerStyle]}
        onPress={() => {
          if (this.props.text.trim().length > 0) {
            this.props.onSend({text: this.props.text.trim()}, true);
          }
        }}
        accessibilityTraits="button"
      >
        <Text style={[styles.text, this.props.textStyle]}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#74A3D9',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginLeft: 10,
    marginRight: 10,
  },
});

Send.defaultProps = {
  text: '',
  onSend: () => {},
  label: '보내기',
  containerStyle: {},
  textStyle: {},
};

Send.propTypes = {
  text: PropTypes.string,
  onSend: PropTypes.func,
  label: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
};
