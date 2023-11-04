import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./utils/router";
import {Provider} from "react-redux";
import {store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const persistentStore = persistStore(store)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistentStore} loading={null}>
                <RouterProvider router={router()}/>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
