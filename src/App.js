import React, { Component } from 'react';

import HomeScreen from './screens/HomeScreen'
import SearchResultsScreen from './screens/SearchResultsScreen';
import SkeletonScreen from './screens/SkeletonScreen'
import WageUploadScreen from './screens/WageUploadScreen'

class App extends Component {
  render() {
    return (
      <SearchResultsScreen/>
    );
  }
}

export default App;
