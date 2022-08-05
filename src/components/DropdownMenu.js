import React from "react";
import { Dropdown, Tooltip, OverlayTrigger } from "react-bootstrap";
import styles from "../styles/DropdownMenu.module.css";
import { useHistory } from "react-router";

const DropdownDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

/*
  Dropdown menu for post owners to choose to edit or delete a post
  Calls the handleEdit & handleDelete functions based on destructured props
*/
export const DropdownMenu = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={DropdownDots} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }} // to ensure the position of the dropdown menu is consistent across browsers
      >
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleEdit}
            aria-label="edit"
          >
            <i className="fa-solid fa-pen"></i>
          </Dropdown.Item>
        </OverlayTrigger>

        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleDelete}
            aria-label="delete"
          >
            <i className="fas fa-trash" />
          </Dropdown.Item>
        </OverlayTrigger>
      </Dropdown.Menu>
    </Dropdown>
  );
};

/*
  Dropdown menu on the profile page
  displaying icons for edit profile & change password
  Makes a request to fetch profile data based on the profile id
*/
export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={DropdownDots} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Edit profile</Tooltip>}
        >
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={() => history.push(`/profiles/${id}/edit`)}
            aria-label="edit-profile"
          >
            <i className="fa-solid fa-pen"></i>
          </Dropdown.Item>
        </OverlayTrigger>

        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Change password</Tooltip>}
        >
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={() => history.push(`/profiles/${id}/edit/password`)}
            aria-label="change-password"
          >
            <i className="fas fa-key" />
          </Dropdown.Item>
        </OverlayTrigger>
      </Dropdown.Menu>
    </Dropdown>
  );
}
