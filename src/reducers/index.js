import {combineReducers} from 'redux';
import currentUserReducer from './currentUser'
import transactionsReducer from './transactions' 
import accountsReducer from './accounts'
import budgetsReducer from './budgets'


export default combineReducers({
    currentUser: currentUserReducer,
    transactions: transactionsReducer,
    accounts: accountsReducer,
    budgets: budgetsReducer
})