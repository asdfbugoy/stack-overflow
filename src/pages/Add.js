import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';

const Add = props => {
    const { store } = props;
    const history = useHistory();
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const [tags, setTags] = React.useState([]);
    // const [isValidated, setIsValidated] = React.useState(false);
    const onSubmit = e => {
        e.preventDefault();
        // setIsValidated(true);
        store.addQuestion({
            question_id: Math.floor(Math.random() * Math.floor(100000000)),
            ...{title},
            ...{body},
            body_markdown: body,
            tags: tags.split(','),
            owner: {
                display_name: 'Francis Samande Declaro',
                profile_image: 'https://media-exp1.licdn.com/dms/image/C5103AQGkPlmrSWhNkg/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=S-iaIGYf4nM7dj8675n6-wbL6f3W0ARrC2btnvcTIJA',
                link: 'https://ph.linkedin.com/in/francis-declaro-22b4366a'
            }
        });
        history.push('/');
    };

    // const onChange = e => {
    //     console.log.log(e);
    // };

    // React.useEffect(() => {

    // }, [isValidated]);
    return <section data-cy="add">
        <header className="mb-3">Ask a public question</header>
        <form data-cy="form" className="card shadow" onSubmit={onSubmit}>
            <div className="card-body was-validated">
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <small className="form-text text-muted">Be specific and imagine you&apos;re asking a question to another person</small>
                    <input data-cy="title" required name="title" placeholder="ex. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, sit?" type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Body</label>
                    <small className="form-text text-muted">Include all the information someone would need to answer your question</small>
                    <textarea data-cy="body" maxLength="255" required name="body" placeholder="ex. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur dolor impedit nesciunt saepe, consectetur eligendi voluptate obcaecati quasi quae quam libero iure reiciendis tempore. Sequi suscipit adipisci corporis. Rerum." rows="10" className="form-control" onChange={e => setBody(e.target.value)} value={body}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="">Tags</label>
                    <small className="form-text text-muted">Add up to 5 tags to describe what your question is about</small>
                    <input data-cy="tags" required name="tags" placeholder="ex. javacript, react, mobx-state-tree" type="text" className="form-control" onChange={e => setTags(e.target.value)} value={tags} />
                </div>
                <button data-cy="btn-submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </section>;
};

Add.propTypes = {
    store: PropTypes.object
};

export default observer(Add);