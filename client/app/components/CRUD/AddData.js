import React from 'react';
import DataForm from '../DataForm/DataForm';


export class AddData extends React.Component {
    
    onSubmit = (data) => {
        console.log("This is printed",data);
    }
    
    render(){
        return (
            <div>
                <DataForm onSubmit = {this.onSubmit}/>
            </div>
        );
    }
}

export default AddData;