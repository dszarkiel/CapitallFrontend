import React from 'react'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import BillPanelItem from './BillPanelItem'



class BillsPanel extends React.Component {

    renderBills = () => {
        let sortedBills = this.props.bills.slice().sort((a,b) => b.due_date > a.due_date ? -1: 1)
        return sortedBills.map(bill => {
            return <BillPanelItem key={bill.id} bill={bill} />
        })
    }

    render(){
        return(
            <div className="bills-panel shadow-lg rounded" >
                <h2>Bills Panel</h2>
                <div className="bills-panel-table">
                <Table striped bordered hover size="lg" responsive>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Amount Due</th>
                    <th>Due Date</th>
                    <th>AutoPay</th>
                    <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderBills()}
                </tbody>
                </Table>
                </div>
                <Button onClick={() => this.props.history.push('/dashboard')}>Back</Button>
                <Button onClick={() => this.props.history.push('/bills/new')} variant="success">Add New Bill</Button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bills: state.bills
    }
}



export default connect(mapStateToProps, null)(BillsPanel)