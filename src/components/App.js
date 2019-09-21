import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'


//create class based Component for App component
class App extends React.Component{
    state = { videos: [] }


    onInputSubmit = async (myInput) => {
       const response = await youtube.get('/search', {
           params: {q: myInput}
      
       })
       console.log(response)

    //    this.setState({videos : response.data.items})
    }
    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onInputSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}



//Make app component available to every component on the app
export default App;