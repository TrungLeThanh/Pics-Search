import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ''
    };

    // onInputChange = event =>{
    //     console.log(event.target.value);
    // }

    render() {
        return (
            <div className="ui segment" style={{marginTop: '15px'}}>
                <form className="ui form">
                    <div className="field">
                        <label>Image search !</label>
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