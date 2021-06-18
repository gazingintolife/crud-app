import React from 'react';

export default class DataForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.data ? props.data.name : '',
            email: props.data ? props.data.email : '',
            age: props.data ? props.data.age : '',
            gender: props.data ? props.data.gender : '',
            error: ''
        }

    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({name:name}))
    }

    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({email:email}))
    }

    onAgeChange = (e) => {
        const age = e.target.value;
        this.setState(() => ({age:age}))
    }

    onGenderChange = (e) => {
        const gender = e.target.value;
        this.setState(() => ({gender:gender}))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.name || !this.state.email || !this.state.age || !this.state.gender){
            this.setState(() => ({error: 'Please fill all the fields'}));
        }

        else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                name: this.state.name,
                email: this.state.email,
                age: this.state.age,
                gender: this.state.gender
            });
            const form = document.getElementsByName('form')[0];
            form.reset();
        }
        

    }
    render(){
        return (
            <div>
            { this.state.error && <p>{this.state.error}</p>}
            <form name = "form" onSubmit = {this.onSubmit}>
                    <input
                        type = 'text'
                        placeholder = 'Name'
                        value = {this.state.name}
                        onChange = {this.onNameChange}
                    />
                    <input
                        type = 'email'
                        placeholder = 'Email'
                        value = {this.state.email}
                        onChange = {this.onEmailChange}
                    />
                    <input
                        type = 'number'
                        placeholder = 'Age'
                        value = {this.state.age}
                        onChange = {this.onAgeChange}
                    />
                    <input
                        type = 'text'
                        placeholder = 'Gender'
                        value = {this.state.gender}
                        onChange = {this.onGenderChange}
                    />
                    <button>Add Data</button>
                </form>
            </div>
        )
    }
}