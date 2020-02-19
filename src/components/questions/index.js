import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

const Question = observer((props) => {
    const { data } = props;
    const { title, body, score, tags, owner, answer_count, view_count } = data;
    return <article data-cy="question" className="row border-bottom mb-3 pb-3">
        <div data-cy="status" className="col-auto text-center">
            <div>
                <button className="btn btn-sm btn-light"><i className="fa fa-caret-up"></i></button>
                <div> <span className="badge badge-warning">{score} votes</span> </div>
                <div className="btn btn-sm btn-light"><i className="fa fa-caret-down"></i></div>
            </div>
            <div>
                <div><span className="badge badge-light">{answer_count}</span> answers</div>
            </div>
            <div><span className="badge badge-light">{view_count}</span> views</div>
        </div>
        <div data-cy="information" className="col">
            <div className="overflow-hidden">{title}</div>
            <div className="overflow-hidden">{body}</div>
            <div className="mb-3">
                {tags.map((d, i) => <span key={i} className="badge badge-info mr-1">{d}</span>)}
            </div>
            {owner && <div className="row text-right">
                <div className="col p-0"><img height="32" src={`${owner.profile_image ? owner.profile_image : 'https://via.placeholder.com/32'}`} alt="" /></div>
                <div className="col-auto">
                    <div>asked 0 mins ago</div>
                    <div>{owner.display_name}</div>
                    <div>
                        <span className="badge badge-danger mr-1">{owner.badge_counts.gold}</span>
                        <span className="badge badge-light mr-1">{owner.badge_counts.silver}</span>
                        <span className="badge badge-warning mr-1">{owner.badge_counts.bronze}</span>
                    </div>
                </div>
            </div>}
        </div>
    </article>;
});

Question.propTypes = {
    data: PropTypes.object
};

const Questions = props => {
    const { store } = props;
    const { questions } = store;
    React.useEffect(() => {
        store.fetchQuestionsAPI();
    }, [store]);
    return <section data-cy="questions">
        <header className="border-bottom pb-3 mb-3">
            <div className="row mb-3">
                <div className="col">All Questions</div>
                <div className="col-auto"><div className="btn btn-sm btn-primary">Ask Question</div></div>
            </div>
            <div className="row">
                <div className="col-sm-auto mb-3 mb-sm-0">200 questions</div>
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

        {questions.map((d, i) => <Question key={i} data={d} />)}

        <nav data-cy="pagination">
            <ul className="pagination justify-content-center table-responsive">
                <li className="page-item"><button className="page-link"><i className="fa fa-angle-double-left"></i></button></li>
                <li className="page-item"><button className="page-link"><i className="fa fa-angle-left"></i></button></li>
                {Array.from({ length: 5 }).map((d, i) => <li key={i} className="page-item"><button className="page-link">{i + 1}</button></li>)}
                <li className="page-item"><button className="page-link"><i className="fa fa-angle-right"></i></button></li>
                <li className="page-item"><button className="page-link"><i className="fa fa-angle-double-right"></i></button></li>
            </ul>
        </nav>
    </section>;
};

Questions.propTypes = {
    store: PropTypes.object
};

export default observer(Questions);