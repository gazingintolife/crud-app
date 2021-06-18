import { connect } from 'react-redux';
import React from 'react';
import { startAddData } from '../../actions/data';
import DataForm from '../DataForm/DataForm';


export class AddData extends React.Component {
    
    onSubmit = (data) => {
        this.props.startAddData(data);
    }
    
    render(){
        return (
            <div>
                <DataForm onSubmit = {this.onSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddData: (data) => dispatch(startAddData(data))
});

export default connect(undefined, mapDispatchToProps)(AddData);