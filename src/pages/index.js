import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Question from 'components/Question';
import { useHistory } from 'react-router-dom';
import Pagination from 'components/Pagination';

const List = props => {
    const { store } = props;
    const { pagination } = store;
    React.useEffect(() => {
        window.scrollTo(0, 0);
        store.pagination.setPage(1);
        store.questions.length === 0 && store.fetchQuestionsAPI();
    }, [store]);
    const history = useHistory();

    return <section data-cy="questions">
        <header className="border-bottom pb-3 mb-3">
            <div className="row mb-3">
                <div className="col">All Questions</div>
                <div className="col-auto"><div data-cy="btn-add-question" className="btn btn-sm btn-primary" onClick={() => history.push('/add')}>Ask Question</div></div>
            </div>
            <div className="row">
                <div className="col-sm-auto mb-3 mb-sm-0">{store.questions.length} questions</div>
                <div className="col-sm">
                    <div className="row">
                        <div className="col text-sm-right">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary active">Newest</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Active</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary d-none d-sm-block">Bountied <span className="badge badge-primary">123</span></button>
                                <button type="button" className="btn btn-sm btn-outline-secondary d-none d-sm-block">Unanswered </button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">More <i className="fa fa-angle-down"></i></button>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="btn btn-sm btn-info"><i className="fa fa-gear"></i> Filter</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {store.pagination.page && pagination.getQuestions().map((d, i) => <Question key={i} data={d} />)}
        
        <Pagination store={store} />

    </section>;
};

List.propTypes = {
    store: PropTypes.object
};

export default observer(List);