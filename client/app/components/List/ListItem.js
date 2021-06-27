import React from 'react';
import { withRouter } from 'react-router';

class ListItem extends React.Component{

    constructor(props){
        super(props);
    }
    
    onButtonClick = () =>{
        this.props.history.push(`/edit/${this.props._id}`)
        console.log(this.props._id);
    }

    render(){
        return (
            <div className="container text-center">
                <div className="row">
                  <div className="col p-3">
                    {this.props.name}
                  </div>
                  <div className="col p-3">
                      {this.props.email}
                  </div>
                  <div className="col p-3">
                      {this.props.age}
                  </div>
                  <div className="col p-3">
                      {this.props.gender}
                  </div>
                  <div className="col p-3">
                      <button className = "btn btn-light" onClick = {this.onButtonClick} >Edit</button>
                  </div>
                </div>
            </div>   
    )};
}

export default withRouter(ListItem);
