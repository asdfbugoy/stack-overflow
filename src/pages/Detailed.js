import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Question from 'components/Question';
import { useParams } from 'react-router-dom';

const Detailed = props => {
    const { store } = props;
    const { id } = useParams();
    return <section data-cy="questions">
        {store.getQuestion(id) ? <Question data={store.getQuestion(id)} /> : <div className="alert alert-danger">Page not Found!</div>}
    </section>;
};

Detailed.propTypes = {
    store: PropTypes.object
};

export default observer(Detailed);