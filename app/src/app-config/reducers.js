// Reducers
import {reducer as product } from '../components/pages/product/index';
import {reducer as account } from '../components/pages/account';
import {reducer as app} from '../components/app/_reducer';

// Combine Reducers
import {combineReducers} from 'redux';

export default combineReducers({
    product,
    account,
    app,
});
