import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {
    fetchSongs
} from '../store/actions';

import './MainPage.css';

const MainPage = ({songsData, fetchSongs}) => {

    useEffect(() => {
        fetchSongs()
        console.log(songsData.songs)
    }, []);

    return (
        <div className='songs'>
            <ul className='list-items'>
                {
                    songsData.songs.tracks && songsData.songs.tracks.track.map(song => (
                            <li className='list-item'>
                                <span className='song-artist-img'>
                                    <span className='song-artist-img-item'>
                                        <b className='name'>{song.name}</b>
                                        <b className='name'>{song.name}</b>
                                    </span>
                                    <span className='song-artist-img-item'>
                                        <b className='artist-name'>{song.artist.name}</b>
                                    </span>
                                    <span className='song-artist-img-item'>
                                        <img
                                            src="https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png"
                                            alt={song.name}/>
                                    </span>
                                </span>
                                <span className='button'>
                                    <button className='btn'>
                                        <a href={song.artist.url}
                                           className='link'>Click to know about - <b>{song.artist.name}</b></a>
                                    </button>
                                </span>

                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        songsData: state.songs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSongs: () => dispatch(fetchSongs())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);