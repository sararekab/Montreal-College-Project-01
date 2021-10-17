import initialAppContext from './initialAppContext';

let cacheSetState = null;

const resetAppContext = (setAppState) => {

    if (setAppState) {
        cacheSetState = setAppState;
        return;
    }

    if (cacheSetState) {
        cacheSetState(JSON.parse(JSON.stringify(initialAppContext)));
    }
};

export default resetAppContext;