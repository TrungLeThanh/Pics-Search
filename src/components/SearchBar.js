import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ''
    };

    onFormSubmit = event =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui" style={{marginTop: '20px'}}>
                <h1 style={{fontFamily: `'Adamina', sans-serif`, textAlign: 'center'}}>IMAGES SEARCH</h1>
                <form onSubmit={this.onFormSubmit} className="ui form segment" style={{marginTop: '20px', marginBottom: '20px'}}>
                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            value={this.state.term}
                            onChange={e => this.setState({ term:e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;