import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import cookies from "js-cookie";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store , persistor} from './redux/store';
import { SnackbarProvider } from 'notistack';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<h1></h1>}>
            <SnackbarProvider>
              <App />
            </SnackbarProvider>
          </Suspense>
        </PersistGate>
      </Provider>
    </BrowserRouter>
);
