import { legacy_createStore } from 'redux';
import reducer from './reducer';

const mystore = legacy_createStore(reducer);

export default mystore;