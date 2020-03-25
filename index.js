import React from 'react';
import { render } from 'react-dom';
import Home from './src/pages/containers/home';
// import Playlist from '../playlist/components/playlist.js';
import data from './api.json';

const homeContainer = document.getElementById('home-container');

render(<Home data={data} />, homeContainer);
