import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import YTSEARCH from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyA_KcXY6Z0KMBuUWbuZ27Vo-kAVqLglbhA';



// Create a new component, should produce some HTML
// some HTML

//  Take this component generated HTML and put it on the page(in the DOM)
class App extends Component {
    constructor(props) {
     super(props)
     
     this.state = {
         videos: []
     }
     YTSEARCH({key: API_KEY, term: 'surfboards'}, (videos) => {
       this.setState({videos})
    })
    }
    render(){
        return(
        <div>
        <SearchBar/>
        <VideoList />
       </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
