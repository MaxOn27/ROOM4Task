import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

import MainPage from './MainPage/MainPage';
import SearchMusic from "./SearchMusic/SearchMusic";


function App() {
    return (
        <div className="App">
            <Router>
                <nav className='navigation'>
                    <NavLink
                        exact
                        to='/'
                        className='navLink'
                    >
                        Most popular songs
                    </NavLink>
                    <NavLink
                        exact
                        to='/search'
                        className='navLink'
                    >
                        Find a song
                    </NavLink>
                </nav>
                <Switch>
                    <Route exact path='/search'>
                        <SearchMusic/>
                    </Route>
                    <Route exact path='/'>
                        <MainPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
