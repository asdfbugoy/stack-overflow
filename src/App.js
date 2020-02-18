import React from 'react';
import List from 'components';

const App = () => <div data-cy="app" className="app">
    <header className="border-bottom mb-3 shadow p-3">
        <div className="">
            <i className="fa fa-stack-overflow"></i> Stack<strong>Overflow</strong> <small>Challenge</small>
        </div>
    </header>
    <article className="container mb-3">
        <List />
    </article>
    <footer className="text-center">
        <div className="card-body bg-dark text-white"><i className="fa fa-stack-overflow"></i> Stack Overflow:  Front-End / Challenge © 2020 Stock Overflow: exam taken by @Francis Samande Declaro</div>
    </footer>
</div>;

export default App;