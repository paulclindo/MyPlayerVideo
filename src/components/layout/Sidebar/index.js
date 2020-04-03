import React from "react";
import {
  IoMdHome,
  IoIosTrendingUp,
  IoIosHeart,
  IoMdListBox,
  IoIosRefresh,
  IoIosTimer,
  IoIosThumbsUp,
  IoIosMenu
} from "react-icons/io";
import { styled } from "styled-components";
import { SidebarWrapper, Nav, HeaderLogo, Link } from "./style";

export default function Sidebar(props) {
  const { toggle, onClick } = props;
  const handleToggle = () => {
    onClick();
  };
  return (
    <SidebarWrapper collapsed={toggle}>
      <HeaderLogo collapsed={toggle}>
        <IoIosMenu onClick={handleToggle} size={30} />
        <p>🚀 pcYoutube</p>
      </HeaderLogo>
      <Nav collapsed={toggle}>
        <li>
          <Link collapsed={toggle} href="#">
            <IoMdHome size={25} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link collapsed={toggle} href="#">
            <IoIosTrendingUp size={25} />
            <span>Trending</span>
          </Link>
        </li>
        <li>
          <Link collapsed={toggle} href="#">
            <IoIosHeart size={25} />
            <span>Suscriptions</span>
          </Link>
        </li>
        <li>
          <Link collapsed={toggle} href="#">
            <IoMdListBox size={25} />
            <span>Library</span>
          </Link>
        </li>
        <li>
          <Link collapsed={toggle} href="#">
            <IoIosRefresh size={25} />
            <span>History</span>
          </Link>
        </li>
        <li>
          <Link collapsed={toggle} href="#">
            <IoMdHome size={25} />
            <span>Your Videos</span>
          </Link>
        </li>
        <li>
          <Link collapsed={toggle} href="#">
            <IoIosTimer size={25} />
            <span>Watch Later</span>
          </Link>
        </li>
        <li>
          <Link collapsed={toggle} href="#">
            <IoIosThumbsUp size={25} />
            <span>Liked Videos</span>
          </Link>
        </li>
      </Nav>
    </SidebarWrapper>
  );
}
