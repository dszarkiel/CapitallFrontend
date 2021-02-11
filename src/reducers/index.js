import {combineReducers} from 'redux';
import currentUserReducer from './currentUser'
import transactionsReducer from './transactions' 
import accountsReducer from './accounts'
import budgetsReducer from './budgets'
import goalsReducer from './goals.js'
import billsReducer from './bills'
import selectTransactionReducer from './selectTransaction'
import selectAccountReducer from './selectAccount'
import selectBudgetReducer from './selectBudget'
import selectGoalReducer from './selectGoal'
import selectBillReducer from './selectBill'


export default combineReducers({
    currentUser: currentUserReducer,
    transactions: transactionsReducer,
    accounts: accountsReducer,
    budgets: budgetsReducer,
    goals: goalsReducer, 
    bills: billsReducer,
    selectTransaction: selectTransactionReducer,
    selectAccount: selectAccountReducer,
    selectBudget: selectBudgetReducer,
    selectGoal: selectGoalReducer,
    selectBill: selectBillReducer
})