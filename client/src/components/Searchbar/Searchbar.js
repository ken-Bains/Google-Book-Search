import React, { Component } from "react";
import "./Searchbar.css"

class Searchbar extends Component {
    state = {
        bookName: ""
    };
<<<<<<< HEAD

    handleInput = event => {
        const value = event.target.value;
        const name = event.target.name;

=======
    handleInput = event => {
        const value = event.target.value;
        const name = event.target.name;
>>>>>>> 4947d4696253c5622c959657a1939c31f8c42d03
        this.setState({
            [name]: value
        });
    };
<<<<<<< HEAD

    handleSubmit = event => {
=======
    handleSubmit = event => {
        console.log("submited")
>>>>>>> 4947d4696253c5622c959657a1939c31f8c42d03
        event.preventDefault();
        this.setState({
            bookName: ""
        });
    };
<<<<<<< HEAD

=======
>>>>>>> 4947d4696253c5622c959657a1939c31f8c42d03
    render() {
        return (
            <div>
            <form className="form">
                <input
                    value={this.state.bookName}
                    name="searchbar"
                    type="text"
                    placeholder="Search for a Book"
                    onChange={this.handleInput}
                />
                <button onClick={this.handleSubmit}>Search</button>
            </form>
            </div>
        );
    };
};
<<<<<<< HEAD

=======
>>>>>>> 4947d4696253c5622c959657a1939c31f8c42d03
export default Searchbar;