import React from 'react';


class SearchBar extends React.Component {
    state = {myInput : '' }

    onInputChange = (event) => {
        //update input state with value of the text in input field
        this.setState({myInput: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()

        //TODO : Call the call back from the parent component
    }
    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" onChange={this.onInputChange} value={this.state.term} />
                    </div>
                </form>

            </div>
        )
    }   
}

export default SearchBar;