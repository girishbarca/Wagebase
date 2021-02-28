import React, { Component } from 'react';

import HomeScreen from './screens/HomeScreen'
import SkeletonScreen from './screens/SkeletonScreen'
import WageUploadScreen from './screens/WageUploadScreen'

class App extends Component {
  render() {
    return (
      <WageUploadScreen/>
    );
  }
}

export default App;
