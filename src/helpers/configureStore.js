import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import rootReducer from '../reducers/index';
const persistConfig = {
    key: 'root',
    stateReconciler: autoMergeLevel1,
    storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store2 = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor2 = persistStore(store2);