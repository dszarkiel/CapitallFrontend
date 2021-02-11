import React from 'react';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {deleteBill, selectBill} from '../actions/billActions'

class BillPanelItem extends React.Component {

    handleUpdate = (e) => {
        const id = e.target.id
        this.props.selectBill(this.props.bill)
        this.props.history.push(`/bills/edit/${id}`)
    }

    handleDelete = (e) => {
        const id = parseInt(e.target.id)
        fetch(`http://localhost:3000/bills/${id}`, {method: "DELETE"})
        .then(response => response.json())
        .then(() => {
            this.props.deleteBill(id)
        })
    }

    renderAutopay = (id) => {
        let ap;
        let b = this.props.bills.find(bill => bill.id === id)
        if (b.autopay === true) {
            ap = "On"
        } else {
            ap = "Off"
        }
        return ap
    }

    render(){

        const {id, name, amount, due_date} = this.props.bill

        return(
                 <tr>
                    <td className="align-middle">{name}</td>
                    <td className="align-middle">${amount}</td>
                    <td className="align-middle">{due_date}</td>
                    <td className="align-middle">{this.renderAutopay(id)}</td>
                    <td className="align-middle" >
                    <Button size="sm" id={id} onClick={this.handleUpdate} >Update</Button>
                    <Button size="sm" id={id} variant="danger" onClick={this.handleDelete}>Delete</Button>
                    </td>
                </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bills: state.bills
    }
}

const mapDispatchToProps = {
    deleteBill: deleteBill,
    selectBill: selectBill
    
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BillPanelItem))