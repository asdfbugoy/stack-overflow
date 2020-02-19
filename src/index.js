import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, store } from 'stores';
import { onPatch, onSnapshot } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';

const mstDebug = () => {
    makeInspectable(store);
    onPatch(store, patch => console.log(patch));
    onSnapshot(store, snapshot => console.log('Snapshot: ', snapshot));
};

process.env.NODE_ENV === 'development' && mstDebug();

ReactDOM.render(<Provider value={store}><App /></Provider>, document.getElementById('root'));
