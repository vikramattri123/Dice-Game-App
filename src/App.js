import logo from './logo.svg';
import './App.css';
import React ,{useCallback, useState} from 'react';
import New from './components/New';
import { DataContextProvider } from './Context/DataContext';
function App() {

  return (
   
    <>
    <DataContextProvider>
    <div className="App">
      
    <New/>
     
    </div>
    </DataContextProvider>
    </>
  );
}

export default App;
