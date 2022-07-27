import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

const PasswordCriteria = () => {
    return (
        <div className="my-4">
            <OverlayTrigger
                trigger="hover"
                key="bottom"
                placement="bottom"
                overlay={
                    <Popover id="popover-positioned-bottom">
                    <Popover.Content>
                        <i className="fa-solid fa-check"></i> At least 8 characters<br />
                        <i className="fa-solid fa-check"></i> Can’t be entirely numeric<br />
                        <i className="fa-solid fa-check"></i> Can’t be a commonly used password<br />
                        <i className="fa-solid fa-check"></i> Can’t be too similar to your other personal information.<br />
                        <i className="fa-solid fa-check"></i> Passwords must match
                    </Popover.Content>
                    </Popover>
                }
                >
                <Button variant="secondary" size="sm">View password criteria</Button>
            </OverlayTrigger>
        </div>
    )
}

export default PasswordCriteria;