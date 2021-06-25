import { connect } from 'react-redux';
import React from 'react';
import { startAddData } from '../../actions/data';
import DataForm from '../DataForm/DataForm';
const config = require('../../../../config/config.example');

export class AddData extends React.Component {
    onSubmit = (data) => {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }

        fetch('/api/adddata', options)
        .then(res => res.json())
        .then(json => {
            this.props.startAddData(json);
        })
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