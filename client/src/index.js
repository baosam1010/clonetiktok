import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import paths from './paths/paths';


const store = configureStore();

const showPath = (paths) => {
  let result = null;
  result = paths.map(item => {
    const { element: Element, path } = item;
    return (
      <Route
        key={path}
        path={path}
        element={<Element />}
      />
    )
  })
  return result;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          {showPath(paths)}
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  </React.StrictMode>
  , document.getElementById('root')
);


reportWebVitals();
