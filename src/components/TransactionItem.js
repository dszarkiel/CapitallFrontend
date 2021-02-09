import React from 'react';

class TransactionItem extends React.Component {
    
    render(){

        const {date, description, amount, category} = this.props.transaction

        return(
  
                <tr>
                    <td class="align-middle">{date}</td>
                    <td class="align-middle">{description}</td>
                    <td class="align-middle">{category}</td>
                    <td class="align-middle">${amount}</td>
                </tr>

        )
    }
}

export default TransactionItem