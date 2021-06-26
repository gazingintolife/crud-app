import React, { Component } from 'react';
import AddData from '../CRUD/AddData';
import List from '../List/List';

const Home = () => {
    return (
      <div className = "container shadow bg-white rounded my-5 ">

        <h2 className = "p-3 my-1 text-center">Add your Info here!</h2>
        <AddData/>  
        <div class="container">
          <div className = "p-1">
            <div class="row my-3 m-1 text-center">
              <div class="col">
                <p className = "font-weight-bold">Name</p>
              </div>
              <div class="col font-weight-bold">
                Email
              </div>
              <div class="col font-weight-bold">
                Age
              </div>
              <div class="col font-weight-bold">
                Gender
              </div>
              <div class="col font-weight-bold">
                Action
              </div>
            </div>
          </div>

          <div class="row">
           <List/>
          </div>
        </div>

      </div>
    );
  }

export default Home;
