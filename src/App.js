import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import store from './redux/redux-store';
import { Provider } from 'react-redux';


const App = function (props) {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
      </Provider>
    </BrowserRouter>

  );
}

export default App;