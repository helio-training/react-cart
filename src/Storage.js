import React, { Component } from 'react';

class Storage extends Component {

  constructor(props) {
    super(props);
  }

  static get(name) {
    const value = localStorage.getItem(name);
    if(value) return JSON.parse(value);
    return value;
  }

  static has(name) {
    return Storage.get(name) !== undefined;
  }

  static set(name, value) {
    name = name || this.props.name;
    return localStorage.setItem(name, JSON.stringify(value));
  }

  // static all() {
  //   localStorage.length
  // }

  static clear() {
    localStorage.clear();
  }

  // componentWillMount() {
  //   this.save();
  // }
  //
  // save() {
  //   const value = this.props.useRaw ? this.props.value : JSON.stringify(this.props.value);
  //   console.log(value);
  //   Storage.set(this.props.name, value);
  // }

  render() {
    return null;
  }

}

// Storage.propTypes = {
//   name: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
//   useRaw: PropTypes.bool,
//   autoSave: PropTypes.bool
// };

export default Storage;