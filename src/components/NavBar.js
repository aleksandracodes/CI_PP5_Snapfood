import React from "react";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import logo from "../assets/SnapFood-logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const {expanded, setExpanded, ref} = useClickOutsideToggle();

  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
    }
  }

  // Variable to display current username in the navbar
  const loggedInNavBar = (
    <>
        <NavDropdown
          title={
            <div>
              <Avatar src={currentUser?.profile_image} height={40} />
              {currentUser?.username}
            </div>
          }
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item className={`${styles.Dropdown} text-right`}>
            <NavLink
              to={`/profiles/${currentUser?.profile_id}`}>
                Profile
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item className={`${styles.Dropdown} text-right`}>
            <NavLink
                to="/" onClick={handleLogOut}>
                  Log out
            </NavLink>  
          </NavDropdown.Item>
        </NavDropdown>
    </>
  );
  // Navbar visible to users not logged-in
  const loggedOutNavBar = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signup"
      >
        <i className="fa-solid fa-user-plus"></i>Sign up
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/login"
      >
        <i className="fa-solid fa-right-to-bracket"></i>Log in
      </NavLink>
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="SnapFood logo" height="60" width="90" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          ref={ref}
          className={styles.NavbarToggle}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-house"></i>Home
            </NavLink>

            {currentUser ? loggedInNavBar : loggedOutNavBar}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
