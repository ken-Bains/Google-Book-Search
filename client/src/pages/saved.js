import React, { useContext } from "react";
import SearchResults from "../components/searchComponents/searchResults";
import { BookContext } from "../utils/bookProvider";
import API from "../utils/API";

const Saved = () => {
    const { savedBooks, dispatch } = useContext(BookContext);

    function deleteBook(book) {
        API.deleteBook(book.id).then(res => {
            dispatch({type: "REMOVE_ITEM", book: book})
        })
    }

    return (
        <div>
            <SearchResults searchList={savedBooks} deleteBook={deleteBook} isSavedPage={true}/>
        </div>
    )
}

export default Saved