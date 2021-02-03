import React from 'react';
import {connect} from 'react-redux'

class Dashboard extends React.Component {

    componentDidMount(){
        if (!this.props.currentUser) {
            this.props.history.push("/")
        }
    }


    render(){
        return(
            <div className="dashboard" >
                <h1>Dashboard</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(Dashboard)