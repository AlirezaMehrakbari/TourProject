'use client'
import {Provider} from "react-redux";
import store from "@/app/redux/store";
import React from "react";
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

// @ts-ignore
const persistor = persistStore(store)
const ReduxProvider = ({children}: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default ReduxProvider
