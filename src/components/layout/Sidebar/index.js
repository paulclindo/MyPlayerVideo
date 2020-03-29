import React from 'react';
import {
  IoMdHome,
  IoIosTrendingUp,
  IoIosHeart,
  IoMdListBox,
  IoIosRefresh,
  IoIosTimer,
  IoIosThumbsUp,
  IoIosMenu,
} from 'react-icons/io';
import { styled } from 'styled-components';
import { SidebarWrapper, Nav, HeaderLogo } from './style';

export default function Sidebar(props) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <SidebarWrapper style={{ width: collapsed ? '100px' : 'auto' }}>
      <HeaderLogo>
        <div>
          <IoIosMenu onClick={() => setCollapsed(!collapsed)} size={30} />
        </div>
        <p>🚀 pcYoutube</p>
      </HeaderLogo>
      <Nav>
        <li>
          <a href="#">
            <IoMdHome size={25} /> Home
          </a>
        </li>
        <li>
          <a href="#">
            <IoIosTrendingUp size={25} />
            Trending
          </a>
        </li>
        <li>
          <a href="#">
            <IoIosHeart size={25} />
            Suscriptions
          </a>
        </li>
        <li>
          <a href="#">
            <IoMdListBox size={25} />
            Library
          </a>
        </li>
        <li>
          <a href="#">
            <IoIosRefresh size={25} />
            History
          </a>
        </li>
        <li>
          <a href="#">
            <IoMdHome size={25} />
            Your Videos
          </a>
        </li>
        <li>
          <a href="#">
            <IoIosTimer size={25} />
            Watch Later
          </a>
        </li>
        <li>
          <a href="#">
            <IoIosThumbsUp size={25} />
            Liked Videos
          </a>
        </li>
      </Nav>
    </SidebarWrapper>
  );
}
