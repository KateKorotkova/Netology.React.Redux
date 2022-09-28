import { combineReducers, legacy_createStore, compose } from 'redux';
import serviceListReducer from '../reducers/serviceListReducer';
import serviceAddReducer from '../reducers/serviceAddReducer';


const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


function configureStore() {
    return legacy_createStore(
      combineReducers({
        serviceList: serviceListReducer,
        serviceAdd: serviceAddReducer,
      }),
      undefined,
      compose(
        ReactReduxDevTools,
      )
    );
  }
  
  
  export default configureStore;