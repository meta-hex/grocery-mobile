import React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './src/navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import store from './src/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PaperProvider>
          <MainNavigation />
        </PaperProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
