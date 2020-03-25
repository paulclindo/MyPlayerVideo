import React from 'react';
import { SidebarWrapper } from './style';

export default function Sidebar(props) {
  return (
    <SidebarWrapper>
      <div className="logo">
        <p>🚀 pcYoutube</p>
      </div>
      <ul className="nav">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Trending</a>
        </li>
        <li>
          <a href="">Suscriptions</a>
        </li>
        <li>
          <a href="">Library</a>
        </li>
        <li>
          <a href="">History</a>
        </li>
        <li>
          <a href="">Your Videos</a>
        </li>
        <li>
          <a href="">Watch Later</a>
        </li>
        <li>
          <a href="">Liked Videos</a>
        </li>
      </ul>
    </SidebarWrapper>
  );
}
