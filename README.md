# Google-Book-Search

## Summary 
Using Google Books API, this app allows you to search and save book information in order to create a reading list. You can view more information via a link to Google books and remove books from your reading list. 

## Link to site
[Demo](https://secure-hollows-12420.herokuapp.com/)

## Site Clip
![Site](assets/google-books.mp4)


## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Mongo - MongoDB is a cross-platform document-oriented database program.
- Mongoose - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.
- Express - Web application framework for Node.js. Designed for building web applications and APIs.
- Node JS - An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.
- React - JavaScript library for building user interfaces.
- Axios - Promise based HTTP client for the browser and node.js
- React Bootstap - React specific Bootstrap used for styling
- Heroku - Heroku is a cloud platform as a service supporting several programming languages.


## Code Snippet
```javascript
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

```
- The code snippit above is an example of React hooks context and provider.


## Author Links
[LinkedIn](https://www.linkedin.com/in/ken-bains)
[GitHub](https://github.com/ken-Bains)
