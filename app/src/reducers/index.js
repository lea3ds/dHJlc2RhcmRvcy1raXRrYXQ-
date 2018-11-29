
import {combineReducers} from 'redux';

import {reducer as synchronizerStore } from '../components/synchronizer';

import {reducer as paymentStore } from '../components/pages/Payment';


import {reducer as product } from '../components/pages/product/index';
import {reducer as account } from '../components/pages/account';
import {reducer as app} from '../components/app/_reducer';

export default combineReducers({
    dataArrays: synchronizerStore,
    paymentStore,

    product,
    account,
    app,
});
