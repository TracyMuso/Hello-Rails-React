import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Greetings from '../components/Greetings';

const App = () => (
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<Greetings />} />
    </Routes>
  </Provider>
);

export default App;