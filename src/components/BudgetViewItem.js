import React from 'react';

class BudgetViewItem extends React.Component {
    
    render(){

        const {date, description, amount, category} = this.props.transaction

        return(
  
                <tr>
                    <td className="align-middle">{date}</td>
                    <td className="align-middle">{description}</td>
                    <td className="align-middle">{category}</td>
                    <td className="align-middle">${amount.toLocaleString()}</td>
                </tr>

        )
    }
}

export default BudgetViewItem