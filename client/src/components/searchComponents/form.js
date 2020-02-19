import React from "react";

const Form = (props) => {
    return (
        <form className="container">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Book Search</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={props.searchInputValue}/>
                <small id="emailHelp" className="form-text text-muted">Search for any book</small>
            </div>
            <button type="submit" onClick={props.searchBook} className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form