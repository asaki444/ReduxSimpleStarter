import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyA_KcXY6Z0KMBuUWbuZ27Vo-kAVqLglbhA'
// Create a new component, should produce some HTML
// some HTML

//  Take this component generated HTML and put it on the page(in the DOM)

const App = function (){
    return(
        <div>
        <SearchBar/>
       </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('.container'))
