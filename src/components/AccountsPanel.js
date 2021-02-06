import React from 'react'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import AccountPanelItem from './AccountPanelItem'



class AccountsPanel extends React.Component {

    renderAccounts = () => {
        return this.props.accounts.map(acc => {
            return <AccountPanelItem key={acc.id} account={acc} />
        })
    }

    render(){
        return(
            <div className="accounts-panel" >
                <h2>Accounts Panel</h2>
                <div className="accounts-panel-table">
                <Table responsive>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Balance</th>
                    <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderAccounts()}
                </tbody>
                </Table>
                </div>
                <Button onClick={() => this.props.history.push('/dashboard')}>Back</Button>
                <Button onClick={() => this.props.history.push('/accounts/new')} variant="success">Create New Transaction</Button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    }
}



export default connect(mapStateToProps, null)(AccountsPanel)