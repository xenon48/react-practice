import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderPage = function () {
  root.render(
    <React.StrictMode>
      <App state={store.getState()}
        store={store}
        dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  );
}
renderPage();
store.subscribe(renderPage);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();