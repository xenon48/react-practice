import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';

const App = function (props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs state={props.state.messagesPage}/>} />
            <Route path="/profile" element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;