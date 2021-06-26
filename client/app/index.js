import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/IndexRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import { Tooltip, Toast, Popover } from 'bootstrap';

const store = configureStore();

const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
)

render(jsx, document.getElementById('app'));
