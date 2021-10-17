import React, { createContext, useEffect, useState } from 'react';
import initialAppContext from './initialAppContext';
import resetAppContext from './resetAppContext';

export const AppContext = createContext();

export let setStateApp = null;
export let getStateApp = null;

const AppContextProvider = (props) => {
    const [appState, setAppState] = useState(JSON.parse(JSON.stringify(initialAppContext)));

    if (!setStateApp) {
        setStateApp = setAppState;
    }
    if (!getStateApp) {
        getStateApp = appState;
    }

    useEffect(() => {
        resetAppContext(setAppState);
    }, []);

    useEffect(() => {
        getStateApp = appState;
    }, [appState]);

    return (
        <AppContext.Provider
            value={[appState, setAppState]}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;