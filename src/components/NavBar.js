import React from "react";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import logo from "../assets/SnapFood-logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  /*
    Handles user logout
    Removes saved current user
    Redirects to the landing page in <NavLink>
  */
  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      setExpanded(false);
      removeTokenTimestamp();
    } catch (err) {}
  };

  /* 
    Displays current username with its avatar in the navbar
    With a dropdown option to view user profile or log-out on click
  */
  const loggedInNavBar = (
    <>
      <NavDropdown
        title={
          <div className="exp">
            <Avatar
              src={currentUser?.profile_image}
              height={40}
              className="exp"
            />
            {currentUser?.username}
          </div>
        }
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item className={`${styles.Dropdown} text-right`}>
          <NavLink to={`/profiles/${currentUser?.profile_id}`}>Profile</NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item className={`${styles.Dropdown} text-right`}>
          <NavLink to="/" onClick={handleLogOut}>
            Log out
          </NavLink>
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );

  /* 
    Navbar visble to user not logged-in
    With options to create a new account or log in to an existing one
  */
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
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
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
