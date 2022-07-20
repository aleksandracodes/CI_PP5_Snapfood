import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/DropdownMenu.module.css";

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

export const DropdownMenu = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={DropdownDots} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}  // to ensure the position of the dropdown menu is consistent across browsers
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit post"
        >
            <i class="fa-solid fa-pen"></i>
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete post"
        >
          <i className="fas fa-trash" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};