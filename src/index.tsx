import React from 'react';
import ReactDOM from 'react-dom';
import Core from './Core/Core';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./Core/redux/store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Core/>,
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
