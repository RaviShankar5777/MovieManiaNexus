import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Sidebar() {
  return (
    <div className="sidebar">
      <Dropdown id="dropdown">
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          TollyWood
        </Dropdown.Toggle>

        <Dropdown.Menu id="dropdown-menu">
          <Dropdown.Item to="/tollywood-Directors" as={Link} id="dropdown-item">
            Directors
          </Dropdown.Item>
          <Dropdown.Item to="/actors-Tollywood" as={Link} id="dropdown-item">
            LeadingActors
          </Dropdown.Item>
          <Dropdown.Item to="/producers-Tollywood" as={Link} id="dropdown-item">
            Producers
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown id="dropdown">
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          BollyWood
        </Dropdown.Toggle>

        <Dropdown.Menu id="dropdown-menu">
          <Dropdown.Item to="/tollywood-Directors" as={Link} id="dropdown-item">
            Directors
          </Dropdown.Item>
          <Dropdown.Item to="/actors-Tollywood" as={Link} id="dropdown-item">
            LeadingActors
          </Dropdown.Item>
          <Dropdown.Item to="/producers-Tollywood" as={Link} id="dropdown-item">
            Producers
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown id="dropdown">
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          KollyWood
        </Dropdown.Toggle>

        <Dropdown.Menu id="dropdown-menu">
          <Dropdown.Item to="/tollywood-Directors" as={Link} id="dropdown-item">
            Directors
          </Dropdown.Item>
          <Dropdown.Item to="/actors-Tollywood" as={Link} id="dropdown-item">
            LeadingActors
          </Dropdown.Item>
          <Dropdown.Item to="/producers-Tollywood" as={Link} id="dropdown-item">
            Producers
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Sidebar;
