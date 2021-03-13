import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import NoImage from './NoImage';

class App extends React.Component {

    state = {
        images: []
    };

    onSearchSubmit = async term => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
        });

        this.setState({images: response.data.results});
    }

    show(){
            if(this.state.images.length === 0){
                return <NoImage />
            }
            return (
                <div>
                    <p style={{marginTop: '20px', marginBottom: '20px'}}>Found: {this.state.images.length} images</p>
                    <ImageList images={this.state.images} />
                </div>
                
            );
    }
    
    render() {

        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                {this.show()}
            </div>
        );
    }
    
}

export default App;
