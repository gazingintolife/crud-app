import React from 'react';
import DataForm from '../DataForm/DataForm';
import { connect } from 'react-redux';
import { editData } from '../../actions/data';

const EditData = (props) => {
    return(
        <div>
            <DataForm
            data = {props.data}
            onSubmit = {(data) => {
                console.log(data);
                console.log(props.data._id);
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
    );
}

const mapStateToProps = (state,props) => {
    return {
        data: state.reducer.find((data) => {
            return data.id === props._id
        })
    };
};

export default connect(mapStateToProps)(EditData);