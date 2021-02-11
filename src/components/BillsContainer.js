import React from 'react';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button'
import BillContainerItem from './BillContainerItem'

class BillsContainer extends React.Component {

    renderBills = () => {
        return this.props.bills.map(bill => {
            return <BillContainerItem key={bill.id} bill={bill} />
        })
    }

    render(){
        return(
            <div className="bills-container">
                <h2>Bill Reminders</h2>
                <div className="bills-table" >
                {this.renderBills()}
                </div>
                <Button className="bills-view-btn" onClick={() => this.props.history.push('/bills')} >View</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bills: state.bills
    }
}

export default connect(mapStateToProps, null)(BillsContainer)