import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    return <header data-cy="header" className="border-bottom mb-3 shadow p-3">
        <div className="" onClick={() => history.push('/')}>
            <i className="fa fa-stack-overflow"></i> Stack<strong>Overflow</strong> <small>Challenge</small>
        </div>
    </header>;
};

export default Header;

