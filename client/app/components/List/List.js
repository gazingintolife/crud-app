import { connect } from 'react-redux';
import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
    return (
        <div>
            {
                props.data.map((data) => (<ListItem key = {data.id} {...data} />))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data : state.reducer
    }
}

export default connect(mapStateToProps)(List);