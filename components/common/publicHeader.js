import React, { useState } from "react";
import { Link } from "next/link";
import { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";
import MenuIcon from "@material-ui/icons/Menu";

import CloseSharpIcon from "@material-ui/icons/CloseSharp";
export default function publicHeader() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const router = useRouter();
  return (
    <Navbar bg="light" expand="sm">
      <Nav.Item
        className="na_bar_menu_icon"
        data-toggle="collapse"
        data-target="#basic-navbar-nav"
        aria-controls="basic-navbar-nav"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <Nav.Link eventKey="link-1">
          {isNavCollapsed ? <MenuIcon /> : <CloseSharpIcon />}
        </Nav.Link>
      </Nav.Item>

      <div
        className={`${isNavCollapsed ? "collapse " : ""}  navbar-collapse`}
        id="basic-navbar-nav"
      >
        <Nav>
          <Nav.Item>
            <Nav.Link
              href="/"
              as={Link}
              className={`${router.pathname == "/" ? "active_link" : null}`}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/about"
              as={Link}
              eventKey="link-1"
              className={`${
                router.pathname == "/about" ? "active_link" : null
              }`}
            >
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              eventKey="link-2"
              className={`${
                router.pathname == "/contact-us" ? "active_link" : null
              }`}
            >
              Contact us
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Nav>
        <Nav.Item>
          <Nav.Link
            as={Link}
            href="/login"
            eventKey="link-2"
            className={`${
              router.pathname == "/contact-us" ? "active_link" : null
            }`}
          >
            Login
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
