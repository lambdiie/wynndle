import StyledModal from "./StyledModal";
import { mdiHelpCircle } from "@mdi/js";

function HowToPlayArmour() {
  return (
    <StyledModal icon={mdiHelpCircle} title="How To Play" width>
      <p>Guess today's armour from Wynncraft!</p>
      <p>
        The colour of the attributes indicates how close the guess was to the
        correct armour.
      </p>
      <p>
        For clarification, <strong>SP Reqs</strong> refers to the{" "}
        <em>Skill Points</em> required to wear the armour, and{" "}
        <strong>Defences</strong> refers to the positive/negative{" "}
        <em>Elemental Defences</em> that the armour has.
      </p>
      <p>
        <span className="green">
          <strong>Green</strong>
        </span>{" "}
        means that the attribute <em>exactly matches</em> the correct armour.
      </p>
      <p>
        <span className="yellow">
          <strong>Yellow</strong>
        </span>{" "}
        means that the attribute is <em>close</em> to the correct armour.
      </p>
      <ul>
        <li>
          For <strong>Level</strong>, your guess was within <em>5 levels</em> of
          the correct armour.
        </li>
        <li>
          For <strong>Health</strong>, your guess was within <em>300 health</em>{" "}
          of the correct armour.
        </li>
        <li>
          For <strong>SP Given and Defences</strong>, your guess has{" "}
          <em>some overlap</em> with the correct armour's attribute.
        </li>
      </ul>
      <p>
        <span className="red">
          <strong>Red</strong>
        </span>{" "}
        means that the attribute <em>does not match</em> the correct armour.
      </p>
      <p>
        <strong>Arrows</strong> (↑ and ↓) display whether the correct armour's
        attribute is higher or lower than your guess respectively.
      </p>
      <p>
        Note: <strong>Common</strong> items have been removed from the pool.
      </p>
      <p>Contact @diie123 on Discord for any suggestions or bug reports!</p>
    </StyledModal>
  );
}

export default HowToPlayArmour;
