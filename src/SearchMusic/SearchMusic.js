import React, {Component} from 'react';

import './searchMusic.css';

class SearchMusic extends Component {
    state = {
        query: "",
        data: [],
        filteredData: []
    };

    handleInputChange = event => {
        const query = event.target.value;

        this.setState(prevState => {
            const filteredData = prevState.data && prevState.data.tracks && prevState.data.tracks.track.filter(element => {
                return element.name.toLowerCase().includes(query.toLowerCase());
            });

            return {
                query,
                filteredData
            };
        });
    };

    getData = () => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=c17b1886d9465542a9cd32437c804db6&format=json`)
            .then(response => response.json())
            .then(data => {
                const {query} = this.state;
                const filteredData = data && data.tracks && data.tracks.track.filter(element => {
                    return element.name.toLowerCase().includes(query.toLowerCase());
                });

                this.setState({
                    data,
                    filteredData
                });
            });
    };

    componentWillMount() {
        this.getData();
    }

    render() {
        return (
            <div className="searchForm">
                <form className='form'>
                    <input
                        placeholder="Search for a song..."
                        value={this.state.query}
                        onChange={this.handleInputChange}
                        className='input'
                    />
                </form>
                <ul className='search-list-items'>
                    {this.state.filteredData.map(song =>
                        <li className='search-list-item'>
                            <h1 className='songName'>{song.name}</h1>
                            <p className='artist'>{song.artist.name}</p>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}


export default SearchMusic;