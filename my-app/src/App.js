import './App.css';
import React from 'react';
import AppWrapper from './AppWrapper';
import Header from './components/Header/Header';
import Main from './components/Header/Main/Main';

function App() {
  return (
    <AppWrapper>
      <Header /> 
      <Main /> 
    </AppWrapper>
  );
}

export default App;
