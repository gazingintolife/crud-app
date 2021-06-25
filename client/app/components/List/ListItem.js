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
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>{this.props.name}</td>
                        <td>{this.props.email}</td>
                        <td>{this.props.age}</td>
                        <td>{this.props.gender}</td>
                        <td>
                            <button onClick = {this.onButtonClick} >Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )};
}

export default withRouter(ListItem);
