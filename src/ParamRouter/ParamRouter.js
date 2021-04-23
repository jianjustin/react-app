import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useParams,
    Router
} from 'react-router-dom';

function ParamRouter(){
    return (
        <BrowserRouter>
            <div>
            <ul>
                <li>
                    <Link to="/netflix">Netflix</Link>
                </li>
                <li>
                    <Link to="/zillow-group">Zillow Group</Link>
                </li>
                <li>
                    <Link to="/yahoo">Yahoo</Link>
                </li>
                <li>
                    <Link to="/modus-create">Modus Create</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/:id">
                    <Child></Child>
                </Route>

            </Switch>
            </div>
        </BrowserRouter>
    );
}

function Child(){
    const {id} = useParams();

    return (
        <div>
          <h3>ID: {id}</h3>
        </div>
    );
}

export default ParamRouter;