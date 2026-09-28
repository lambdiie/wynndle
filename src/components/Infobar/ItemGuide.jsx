import Icon from "@mdi/react";
import { Tooltip } from "react-tooltip";
import { mdiBook  } from "@mdi/js";

function ItemGuide() {
  return (
    <div>
      <button
        data-tooltip-id="item-guide"
        data-tooltip-content={`Item Guide`}
        data-tooltip-place="bottom"
      >
        <a href="https://wynncraft.com/help/item-guide" target="_blank" rel="noopener noreferrer">
          <Icon path={mdiBook } size={1} color="var(--background-main)" />
        </a>
      </button>
      <Tooltip id="item-guide" />
    </div>
  );
}

export default ItemGuide;
