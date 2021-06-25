import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
import App from '../components/App/App';
import NotFound from '../components/App/NotFound';
import Home from '../components/Home/Home';
import EditData from '../components/CRUD/EditData';

const AppRouter = () => (
    <Router>
        <div>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path = "/edit/:id?" component = {EditData} />
                    <Route component={NotFound}/>

                </Switch>
            </App>
        </div>
    </Router>
);

export default AppRouter;