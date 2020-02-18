import React  from "react";
import Title from "../../components/Title/Title"
import Searchbar from '../../components/Searchbar/Searchbar'
import './Home.css'
import BookList from '../../components/Bookslist/Booklist'

export default function Home(){
    console.log("home")
        return(
            <div className="home">
                <Title></Title>
                <Searchbar></Searchbar>
                <BookList></BookList>
            </div>
        )

}
