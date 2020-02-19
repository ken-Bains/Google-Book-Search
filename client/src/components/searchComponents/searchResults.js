import React from "react";

const SearchResults = (props) => {

    return (
        <div className="mt-5 container">
            <h3>Results</h3>
            {props.searchList.length > 0 ? (
                <div>
                    {props.searchList.map(book => {
                        return <div key={book.id} className="card w-100">
                            <div className="card-body">
                                <div className="row">
                                    <img className="col-md-2" src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                                    <div className="col-md-10">
                                        <h5 className="card-title">{book.volumeInfo.title}</h5>
                                        
                                        <p className="card-text"><b>Description:</b> {book.volumeInfo.description}</p>
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