import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import { Provider } from 'react-redux';
import { store } from './Store';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
