import React, { Component } from 'react';
import 'whatwg-fetch';
import AddData from '../CRUD/AddData';
import List from '../List/List';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: []
    };

    // this.newCounter = this.newCounter.bind(this);
    // this.incrementCounter = this.incrementCounter.bind(this);
    // this.decrementCounter = this.decrementCounter.bind(this);
    // this.deleteCounter = this.deleteCounter.bind(this);

    // this._modifyCounter = this._modifyCounter.bind(this);
  }

  componentDidMount() {
    fetch('/api/counters')
      .then(res => res.json())
      .then(json => {
        this.setState({
          counters: json
        });
      });
  }

  newCounter() {
    fetch('/api/counters', { method: 'POST' })
      .then(res => res.json())
      .then(json => {
        let data = this.state.counters;
        data.push(json);

        this.setState({
          counters: data
        });
      });
  }

  incrementCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}/increment`, { method: 'PUT' })
      .then(res => res.json())
      .then(json => {
        this._modifyCounter(index, json);
      });
  }

  decrementCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}/decrement`, { method: 'PUT' })
      .then(res => res.json())
      .then(json => {
        this._modifyCounter(index, json);
      });
  }

  deleteCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}`, { method: 'DELETE' })
      .then(_ => {
        this._modifyCounter(index, null);
      });
  }

  _modifyCounter(index, data) {
    let prevData = this.state.counters;

    if (data) {
      prevData[index] = data;
    } else {
      prevData.splice(index, 1);
    }

    this.setState({
      counters: prevData
    });
  }

  render() {
    return (
      <div>
        <AddData/>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Age</td>
              <td>Gender</td>
            </tr>
          </tbody>
        </table>
        <List/>
      </div>
    );
  }
}

export default Home;
