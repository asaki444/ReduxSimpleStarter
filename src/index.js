import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import YTSEARCH from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyA_KcXY6Z0KMBuUWbuZ27Vo-kAVqLglbhA';



// Create a new component, should produce some HTML
// some HTML

//  Take this component generated HTML and put it on the page(in the DOM)
class App extends Component {
    constructor(props) {
     super(props)
     
     this.state = {
         videos: [],
         selectedVideo: null
     }
     YTSEARCH({key: API_KEY, term: 'surfboards'}, (videos) => {
       this.setState({
           videos: videos, 
           selectedVideo: videos[0]
        })
    })
    }
    render(){
        return(
        <div>
        <SearchBar/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
       </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
