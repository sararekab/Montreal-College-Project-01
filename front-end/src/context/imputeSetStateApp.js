import produce from 'immer';
import { setStateApp } from './AppContext';

const imputeSetStateApp = (updatedStateCBFn) => {
    setStateApp(produce(updatedStateCBFn));
};

export default imputeSetStateApp;