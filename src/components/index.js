import React from 'react';

const List = () => <React.Fragment>
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
    {Array.from({ length: 5 }).map((d, i) => <article key={i} className="row border-bottom mb-3 pb-3">
        <div className="col-auto text-center">
            <div>
                <button className="btn btn-sm btn-light"><i className="fa fa-caret-up"></i></button>
                <div> <span className="badge badge-warning">12 votes</span> </div>
                <div className="btn btn-sm btn-light"><i className="fa fa-caret-down"></i></div>
            </div>
            <div>
                <div><span className="badge badge-light">12</span> answers</div>
            </div>
            <div><span className="badge badge-light">3</span> views</div>
        </div>
        <div className="col">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, fugiat!</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae voluptate earum quae laboriosam, alias commodi. Labore magni animi praesentium.</div>
            <div className="mb-3">
                <span className="badge badge-info mr-1">javascript</span>
                <span className="badge badge-info mr-1">react</span>
                <span className="badge badge-info mr-1">nodejs</span>
            </div>
            <div className="row text-right">
                <div className="col p-0"><img src="https://via.placeholder.com/32" alt="" /></div>
                <div className="col-auto">
                    <div>asked 57 mins ago</div>
                    <div>username</div>
                    <div>
                        <span className="badge badge-warning mr-1">400</span>
                        <span className="badge badge-light mr-1">2</span>
                        <span className="badge badge-dark mr-1">8</span>
                    </div>
                </div>
            </div>
        </div>
    </article>)}

    <nav data-cy="pagination">
        <ul className="pagination justify-content-center table-responsive">
            <li className="page-item"><button className="page-link"><i className="fa fa-angle-double-left"></i></button></li>
            <li className="page-item"><button className="page-link"><i className="fa fa-angle-left"></i></button></li>
            {Array.from({ length: 5 }).map((d, i) => <li key={i} className="page-item"><button className="page-link">{i + 1}</button></li>)}
            <li className="page-item"><button className="page-link"><i className="fa fa-angle-right"></i></button></li>
            <li className="page-item"><button className="page-link"><i className="fa fa-angle-double-right"></i></button></li>
        </ul>
    </nav>
</React.Fragment >;

export default List;