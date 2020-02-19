import React from "react";

const SearchResults = (props) => {

    return (
        <div className="mt-5 container">
            <h3>Results</h3>
            {props.searchList.length > 0 ? (
                <div>
                    {props.searchList.map((book, index) => {
                        return <div key={index} className="card w-100">
                            <div className="card-body">
                                <div className="row">
                                    <img className="col-md-2" src={props.isSavedPage ? book.image : book.volumeInfo.imageLinks.smallThumbnail} alt={props.isSavedPage ? book.title : book.volumeInfo.title} style={{ height: 200 }} />
                                    <div className="col-md-10">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h5 className="card-title">{props.isSavedPage ? book.title : book.volumeInfo.title}</h5>
                                                <p className="card-text"><b>Written by: </b>
                                                    {props.isSavedPage ? (
                                                        book.authors ? (
                                                            book.authors.map((author, i) => {
                                                                return (i ? ', ' : '') + author
                                                            })
                                                        ) : (
                                                                <span></span>
                                                            )

                                                    ) : (
                                                            book.volumeInfo.authors ? (
                                                                book.volumeInfo.authors.map((author, i) => {
                                                                    return (i ? ', ' : '') + author
                                                                })
                                                            ) : (
                                                                    <span></span>
                                                                )
                                                        )}
                                                </p>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <a href={props.isSavedPage ? book.link : book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mr-1" role="button" aria-pressed="true">View</a>
                                                {props.isSavedPage === true ?
                                                    (<button onClick={() => props.deleteBook(book)} type="button" className="btn btn-outline-secondary">delete</button>) :
                                                    (<button onClick={() => props.saveBook(book)} type="button" className="btn btn-outline-secondary">Save</button>)
                                                }
                                            </div>
                                        </div>
                                        <p className="card-text mt-3"><b>Description:</b> {props.isSavedPage ? book.description : book.volumeInfo.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            ) : (
                    <div>
                        Search for an item
                </div>
                )}
        </div>
    );
}

export default SearchResults 