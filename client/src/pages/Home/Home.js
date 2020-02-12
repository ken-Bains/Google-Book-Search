import React from 'react';

export default class Home extends React.Component() {
    render(){
        return(
            <div className="home">
                <Title/>
                <Searchbar/>
                <BooksList/>
            </div>
        )
    }
    
}