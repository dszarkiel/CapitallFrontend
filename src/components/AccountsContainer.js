import React from 'react';
import {connect} from 'react-redux';
import AccountContainerItem from './AccountContainerItem'
import Button from 'react-bootstrap/Button'

class AccountsContainer extends React.Component {

    renderAccounts = () => {
        return this.props.accounts.map(acc => {
            return <AccountContainerItem key={acc.id} account={acc} />
        })
    }

    handleViewAccounts = () => {
        this.props.history.push('/accounts')
    }

    render(){
        return(
            <div className="accounts-container">
                <h2>Accounts</h2>
                <div className="accounts-table" >
                {this.renderAccounts()}
                </div>
                <Button className="account-view-btn" onClick={this.handleViewAccounts} >View</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, null)(AccountsContainer)