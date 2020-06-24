import React from 'react';
import './App.css';

import MediaContainer from './components/containers/MediaContainer'

/** ------------------------ Main Container -------------------------- **/
/** ---- Added Header and Media Container consist of Tabs and Form ---- */
/** ------------------------------------------------------------------- */

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>React Movie Apps</h1>
            </header>
            <MediaContainer />
        </div>
    );
}

export default App;
