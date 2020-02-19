import React, { createContext, useReducer } from "react";

const BookContext = createContext();

const bookReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.book]
        case "REMOVE_ITEM":
            return state.filter(item => item.id !== action.book.id)
        default:
            return state
    };
}

const BookContextProvider = (props) => {
    const [savedBooks, dispatch] = useReducer(bookReducer, []);

    return (
        <BookContext.Provider value={{ savedBooks, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}

export {BookContextProvider, BookContext};