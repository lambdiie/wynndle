import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/weapon"
        className={({ isActive }) => isActive ? "active" : ""}
        data-tooltip-id="weapon"
        data-tooltip-content="Weapon"
        data-tooltip-place="bottom"
      >
        <img
          src="https://cdn.wynncraft.com/nextgen/itemguide/3.3/dagger.basicGold.webp"
          width="24"
          height="24"
        />
      </NavLink>
      <Tooltip id="weapon" />
      <NavLink
        to="/armour"
        className={({ isActive }) => isActive ? "active" : ""}
        data-tooltip-id="armour"
        data-tooltip-content="Armour"
        data-tooltip-place="bottom"
      >
        <img
          src="https://cdn.wynncraft.com/nextgen/itemguide/3.3/diamond_chestplate.webp"
          width="24"
          height="24"
        />
      </NavLink>
      <Tooltip id="armour" />
    </nav>
  );
}

export default NavBar;
