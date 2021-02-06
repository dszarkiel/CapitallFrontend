import {combineReducers} from 'redux';
import currentUserReducer from './currentUser'
import transactionsReducer from './transactions' 
import accountsReducer from './accounts'
import budgetsReducer from './budgets'
import currentDateReducer from './currentDate'
import selectTransactionReducer from './selectTransaction'
import selectAccountReducer from './selectAccount'
import selectBudgetReducer from './selectBudget'


export default combineReducers({
    currentUser: currentUserReducer,
    transactions: transactionsReducer,
    accounts: accountsReducer,
    budgets: budgetsReducer,
    currentDate: currentDateReducer,
    selectTransaction: selectTransactionReducer,
    selectAccount: selectAccountReducer,
    selectBudget: selectBudgetReducer
})