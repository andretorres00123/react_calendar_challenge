import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/configureStore';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';


const store = configureStore();

const App = (props) => {
    return (
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Routes {...props} />
        </BrowserRouter>
      </ReduxProvider>
    );
  };

ReactDOM.render(<App />, document.getElementById('root'));
