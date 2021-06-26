import { connect } from 'react-redux';
import React from 'react';
import ListItem from './ListItem';
import { setStoreInitialState } from '../../actions/data';

class List extends React.Component {
    
    constructor(props){
        super(props);
    }

    componentDidMount() {
        fetch('/api/getdata', {method: 'GET'})
        .then((res) => res.json())
        .then(json => {
            this.props.setStoreState(json);
        })
    }

    render() {        
        return (
            <div className = "container">
                {
                    this.props.data.length === 0 ?
                    (
                        <p>No Data</p>
                    ): 
                    (   
                        this.props.data.map((data) => (<ListItem key= {data._id} {...data}/>))
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStoreState: (data) => dispatch(setStoreInitialState(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);