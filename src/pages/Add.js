import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

const Add = props => {
    return <section data-cy="add">
        <form>
            <input type="text" className="form-control"/>
            <textarea type="text" className="form-control"></textarea>
            <input type="text" className="form-control"/>
        </form>
    </section>;
};

Add.propTypes = {
    store: PropTypes.object
};

export default observer(Add);