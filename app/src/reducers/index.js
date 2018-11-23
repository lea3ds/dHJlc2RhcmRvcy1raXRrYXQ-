
import {combineReducers} from 'redux';

import {reducer as synchronizerStore } from '../components/synchronizer';

import {reducer as paymentStore } from '../components/pages/Payment';


import {reducer as products } from '../components/pages/products';
import {reducer as account } from '../components/pages/account';
import {reducer as app} from '../components/app/_reducer';

export default combineReducers({
    dataArrays: synchronizerStore,
    paymentStore,

    products,
    account,
    app,
});
