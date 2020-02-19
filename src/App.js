import React from 'react';
import { useMst } from 'stores';
import {
    HashRouter as Router,
    Switch,
    Route
    // Link,
    // useRouteMatch,
    // useParams
} from 'react-router-dom';
import List from 'pages';
import Header from 'components/Header';
import Detailed from 'pages/Detailed';
import Add from 'pages/Add';

const App = () => {
    return <div data-cy="app" className="app">
        <Router>
            <Header />
            <article data-cy="main" className="container mb-3">
                <Switch>
                    <Route path="/add">
                        <Add store={useMst()} />
                    </Route>
                    <Route path="/:id">
                        <Detailed store={useMst()} />
                    </Route>
                    <Route path="/">
                        <List store={useMst()} />
                    </Route>
                </Switch>
            </article>
        </Router>

        <footer data-cy="footer" className="text-center">
            <div className="card-body bg-dark text-white"><i className="fa fa-stack-overflow"></i> Stack Overflow:  Front-End / Challenge © 2020 Stock Overflow: exam taken by @Francis Samande Declaro</div>
        </footer>
    </div>;
};
export default App;