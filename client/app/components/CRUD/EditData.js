import React from 'react';
import DataForm from '../DataForm/DataForm';
import { connect } from 'react-redux';
import { deleteData, editData } from '../../actions/data';

const EditData = (props) => {
    return(
        <div className = "container my-5">
            <div className = "d-flex justify-content-center">
                <div className = "mx-3">
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
                </div>

                <div className = "my-5 mx-1">
                    <button className = "btn btn-danger" onClick = {(data) => {
                        fetch(`/api/deletedata/${props.data._id}`,{method: 'DELETE'})
                        .then(res => res.json())
                        .then(json => {
                            props.dispatch(deleteData({id: json._id}))
                            console.log(json._id)
                        })
                    
                        props.history.push('/');
                        }}>Delete
                    </button>
                </div>
            </div>
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