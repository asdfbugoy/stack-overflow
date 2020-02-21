import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { useHistory, useParams } from 'react-router-dom';

const Question = (props) => {
    const history = useHistory();
    const { id } = useParams();
    const { data } = props;
    const { title, body, score, tags, owner, answer_count, view_count, question_id, body255 } = data;
    const onClick = e => {
        e.preventDefault();
        history.push(`/${question_id}`);
    };
    return <article data-cy="question" className="row border-bottom mb-3 pb-3">
        <div data-cy="status" className="col-4 col-sm-auto text-center">
            <div>
                <button data-cy="score-up" className="btn btn-sm btn-light" onClick={() => data.scoreUp()}><i className="fa fa-caret-up"></i></button>
                <div> <span className="badge badge-warning"><span data-cy="score">{score}</span> votes</span> </div>
                <button data-cy="score-down" className="btn btn-sm btn-light" onClick={() => data.scoreDown()}><i className="fa fa-caret-down"></i></button>
            </div>
            <div>
                <div><span className="badge badge-light">{answer_count}</span> answers</div>
            </div>
            <div><span className="badge badge-light">{view_count}</span> views</div>
        </div>
        <div data-cy="information" className="col-8 col-sm ">
            <a href="" data-cy="click-to-detail" className="overflow-hidden" onClick={onClick}>{title}</a>
            <div data-cy="body" className="overflow-hidden" dangerouslySetInnerHTML={{ __html: id ? body : body255 }} />
            {/* <div data-cy="body" className="overflow-hidden">{body255}</div> */}
            <div data-cy="tags" className="mb-3">
                {tags.map((d, i) => <span key={i} className="badge badge-info mr-1">{d}</span>)}
            </div>
            {owner && <div className="row text-right">
                <div className="col p-0"><img height="32" src={`${owner.profile_image ? owner.profile_image : 'https://via.placeholder.com/32'}`} alt="" /></div>
                <div className="col-auto">
                    <div>asked 0 mins ago</div>
                    <a data-cy="owner-name" target="_blank" rel="noopener noreferrer" href={owner.link}>{owner.display_name}</a>
                    <div>
                        <span className="badge badge-danger mr-1">{owner.badge_counts.gold}</span>
                        <span className="badge badge-light mr-1">{owner.badge_counts.silver}</span>
                        <span className="badge badge-warning mr-1">{owner.badge_counts.bronze}</span>
                    </div>
                </div>
            </div>}
        </div>
    </article>;
};

Question.propTypes = {
    data: PropTypes.object
};

export default observer(Question);