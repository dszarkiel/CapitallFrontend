import React from 'react'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import BillPanelItem from './BillPanelItem'
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'

class BillsPanel extends React.Component {
    state = {
        showNotification: false
    }

    renderBills = () => {
        let sortedBills = this.props.bills.slice().sort((a,b) => b.due_date > a.due_date ? -1: 1)
        return sortedBills.map(bill => {
            return <BillPanelItem key={bill.id} bill={bill} />
        })
    }

    notify = () => {
        this.setState({
            showNotification: !this.state.showNotification
        })
    }

    render(){
        return(
            
            <div className="bills-panel shadow-lg rounded" >
                <Toast  style={{position: 'absolute', bottom: 10, right: 10}}  onClose={() => this.notify()} show={this.state.showNotification} delay={1500} autohide>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded mr-2"
                    alt=""
                    />
                    <strong className="mr-auto">Woohoo, XXXX paid! 💸</strong>
                    <small></small>
                </Toast.Header>
                <Toast.Body>Don't need to worry for another month!</Toast.Body>
                </Toast>
             
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
                <Button onClick={() => this.notify()} variant="success">Notify</Button>

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