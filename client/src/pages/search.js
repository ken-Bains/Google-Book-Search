import React, { useRef, useState, useContext } from "react";
import API from "../utils/API";
import Form from "../components/searchComponents/form";
import SearchResults from "../components/searchComponents/searchResults";
import { BookContext } from "../utils/bookProvider";


const Search = () => {
    const searchInputValue = useRef();
    const [searchList, setSearchList] = useState([]);
    const { dispatch } = useContext(BookContext);

    function searchBook(e) {
        e.preventDefault();
        API.getBooks(searchInputValue.current.value).then(response => {
            console.log(response.data.items);
            setSearchList(response.data.items);
            searchInputValue.current.value = "";
        })
    }

    function saveBook(book) {
        dispatch({type: "ADD_ITEM", book: book})
        console.log("sa");
    }

    return (
        <>
            <Form searchBook={searchBook} searchInputValue={searchInputValue} />
            <SearchResults searchList={searchList} saveBook={saveBook} sSavedPage={false}/>
        </>
    )
}

export default Search