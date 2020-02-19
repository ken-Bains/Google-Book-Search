import React, { useRef, useState } from "react";
import API from "../utils/API";
import Form from "../components/searchComponents/form";
import SearchResults from "../components/searchComponents/searchResults"

const Search = () => {
    const searchInputValue = useRef();
    const [searchList, setSearchList] = useState([]);

    function searchBook(e) {
        e.preventDefault();
        API.getBooks(searchInputValue.current.value).then(response => {
            console.log(response.data.items);
            setSearchList(response.data.items);
        })
    }

    return (
        <>
            <Form searchBook={searchBook} searchInputValue={searchInputValue} />
            <SearchResults searchList={searchList}/>
        </>
    );
}

export default Search