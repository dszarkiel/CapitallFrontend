import React from 'react';

class TransactionItem extends React.Component {
    
    render(){

        const {date, description, amount, category} = this.props.transaction

        return(
  
                <tr>
                    <th>{date}</th>
                    <th>{description}</th>
                    <th>{category}</th>
                    <th>{amount}</th>
                </tr>

        )
    }
}

export default TransactionItem