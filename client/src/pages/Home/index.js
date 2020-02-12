import React  from "react";
import Title from "../../components/Title/Title"
import Searchbar from '../../components/Searchbar/Searchbar'


export default function Home(){
    console.log("home")
        return(
            <div className="home">
                <Title></Title>
                <h1>Home Page</h1>
                <Searchbar></Searchbar>
                
            </div>
        )

}
