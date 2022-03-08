import React from 'react'
import { Provider } from 'react-redux';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Routing from './Routes/Routes';
import store from "./store";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Header />
        <Routing />
        <Footer />
      </Provider>
    </React.StrictMode>

  );
}

export default App;
