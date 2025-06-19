import StyledModal from "./StyledModal";
import { mdiHelpCircle } from "@mdi/js";

function HowToPlayWeapon() {
  return (
    <StyledModal icon={mdiHelpCircle} title="How To Play" width>
      <p>Guess today's weapon from Wynncraft!</p>
      <p>
        The colour of the attributes indicates how close the guess was to the
        correct weapon.
      </p>
      <p>
        <span className="green">
          <strong>Green</strong>
        </span>{" "}
        means that the attribute <em>exactly matches</em> the correct weapon.
      </p>
      <p>
        <span className="yellow">
          <strong>Yellow</strong>
        </span>{" "}
        means that the attribute is <em>close</em> to the correct weapon.
      </p>
      <ul>
        <li>
          For <strong>Level</strong>, your guess was within <em>5 levels</em> of
          the correct weapon.
        </li>
        <li>
          For <strong>DPS</strong>, your guess was within <em>50 DPS</em> of the
          correct weapon.
        </li>
        <li>
          For <strong>Attack Speed</strong>, your guess was <em>1 away</em> from
          the correct weapon.{" "}
        </li>
        <li>
          For <strong>Elements</strong>, your guess has <em>some overlap</em>{" "}
          with the correct armour's attribute.
        </li>
      </ul>
      <p>
        <span className="red">
          <strong>Red</strong>
        </span>{" "}
        means that the attribute <em>does not match</em> the correct weapon.
      </p>
      <p>
        <strong>Arrows</strong> (↑ and ↓) display whether the correct weapon's
        attribute is higher or lower than your guess respectively.
      </p>
      <p>
        Note: <strong>Common</strong> items have been removed from the pool.
      </p>
      <p>
        Contact @diie123 on Discord for any suggestions or bug reports!
      </p>
    </StyledModal>
  );
}

export default HowToPlayWeapon;
