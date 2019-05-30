import React from 'react';
import SearchBar from './SearchBar'


//create class based Component for App component
class App extends React.Component{
    render(){
        return (
            <div className="ui container">
                <SearchBar />
            </div>
        )
    }
}



//Make app component available to every component on the app
export default App;