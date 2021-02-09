import React from 'react';

class TransactionItem extends React.Component {
    
    render(){

        const {date, description, amount, category} = this.props.transaction

        return(
  
                <tr>
                    <td>{date}</td>
                    <td>{description}</td>
                    <td>{category}</td>
                    <td>${amount}</td>
                </tr>

        )
    }
}

export default TransactionItem