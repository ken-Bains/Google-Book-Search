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
        const bookItem = {
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.smallThumbnail,
            link: book.volumeInfo.infoLink,
            title: book.volumeInfo.title
        }
        API.saveBook(bookItem).then(res =>{
            dispatch({type: "ADD_ITEM", book: bookItem})
        })
    }

    return (
        <>
            <Form searchBook={searchBook} searchInputValue={searchInputValue} />
            <SearchResults searchList={searchList} saveBook={saveBook} sSavedPage={false}/>
        </>
    )
}

export default Search