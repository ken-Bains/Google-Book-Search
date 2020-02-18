import React from 'react';
import Book from '../BookCards/Book'


export default function BookList(){
    return(

        <div className="container bookList">
            <ul className="list-group">
                
                <Book/>

            </ul>
        </div>
    )
}