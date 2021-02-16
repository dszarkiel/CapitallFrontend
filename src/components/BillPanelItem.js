import React from 'react';
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {deleteBill, selectBill, updateBill} from '../actions/billActions'
import {TrashFill, GearWideConnected, CashStack} from 'react-bootstrap-icons'
import moment from 'moment'

class BillPanelItem extends React.Component {

    handleUpdate = (e) => {
        const id = e.currentTarget.id
        this.props.selectBill(this.props.bill)
        this.props.history.push(`/bills/edit/${id}`)
    }

    handleDelete = (e) => {
        const id = parseInt(e.currentTarget.id)
        fetch(`http://localhost:3000/bills/${id}`, {method: "DELETE"})
        .then(response => response.json())
        .then(() => {
            this.props.deleteBill(id)
        })
    }

    handlePaid = (e) => {
        const id = parseInt(e.currentTarget.id)
        let due_date = moment(this.props.bill.due_date)
        due_date.add(1, "month")
        let nextDate = due_date.format("YYYY-MM-DD")
        console.log(nextDate)
        fetch(`http://localhost:3000/bills/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                due_date: nextDate
            })
        })
        .then(response => response.json())
        .then(updatedBill => {
            this.props.updateBill(updatedBill)
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
                    <td className="align-middle">${amount.toLocaleString()}</td>
                    <td className="align-middle">{due_date}</td>
                    <td className="align-middle">{this.renderAutopay(id)}</td>
                    <td className="align-middle" >
                    <Button size="sm" variant="success" id={id} onClick={this.handlePaid} >Paid {<CashStack/>}</Button>
                    <Button size="sm" id={id} onClick={this.handleUpdate} >{<GearWideConnected/>}</Button>
                    <Button size="sm" id={id} variant="danger" onClick={this.handleDelete}>{<TrashFill/>}</Button>
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
    selectBill: selectBill,
    updateBill: updateBill
    
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BillPanelItem))