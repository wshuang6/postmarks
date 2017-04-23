import React from 'react';
import {connect} from 'react-redux';
import './index.css';
import logo from '../logo.png';

export class Nav extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)  => ({
  currentFolderId: state.folders.currentFolderId
})

export default connect(mapStateToProps)(Nav);
