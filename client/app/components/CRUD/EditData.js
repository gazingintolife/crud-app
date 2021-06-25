import React from 'react';
import DataForm from '../DataForm/DataForm';
import { connect } from 'react-redux';
import { deleteData, editData } from '../../actions/data';
import List from '../List/List';

const EditData = (props) => {
    return(
        <div>
            <DataForm
            data = {props.data}
            onSubmit = {(data) => {
                const options = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data),
                }
                fetch(`/api/editdata/${props.data._id}`,options)
                .then(res => res.json())
                .then(json => {
                    props.dispatch(editData(props.data._id, json));
                })
                props.history.push('/');
            }}
            />

            <button onClick = {(data) => {
                fetch(`/api/deletedata/${props.data._id}`,{method: 'DELETE'})
                .then(res => res.json())
                .then(json => {
                    props.dispatch(deleteData({id: json._id}))
                    console.log(json._id)
                })
                
                props.history.push('/');
            }}>Delete
            </button>
            <List/>
        </div>
    );
}

const mapStateToProps = (state,props) => {
    return {
        data: state.reducer.find((data) => {
            return data._id === props.match.params.id
        })
    };
};

export default connect(mapStateToProps)(EditData);