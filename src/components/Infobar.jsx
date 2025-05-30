import Modal from "react-modal";
import Icon from "@mdi/react";
import { Tooltip } from "react-tooltip";
import { mdiHelpCircle, mdiPoll, mdiClose } from "@mdi/js";
import { useState } from "react";
import "../styles/Infobar.css";

Modal.setAppElement("#root");

function Infobar({ statistics }) {
  return (
    <div className="infobar container">
      <HowToPlay />
      <Statistics statistics={statistics} />
    </div>
  );
}

function HowToPlay() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button
        onClick={openModal}
        data-tooltip-id="howtoplay"
        data-tooltip-content="How To Play?"
        data-tooltip-place="bottom"
      >
        <Icon path={mdiHelpCircle} size={1} color="var(--background-main)" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="How To Play"
        className={{
          base: "modal container modal-width",
          afterOpen: "modal--after-open",
          beforeClose: "modal--before-close",
        }}
        overlayClassName="overlay"
        portalClassName="portal"
        closeTimeoutMS={150}
      >
        <h1 className="container-title">How To Play</h1>
        <button onClick={closeModal}>
          <Icon path={mdiClose} size={1} color="var(--border-color)" />
        </button>
        <div className="content">
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
              For <strong>Level</strong>, your guess was within <em>5 levels</em>{" "}
              of the correct weapon.
            </li>
            <li>
              For <strong>DPS</strong>, your guess was within <em>50 DPS</em> of
              the correct weapon.
            </li>
            <li>
              For <strong>Attack Speed</strong>, your guess was <em>1 away</em>{" "}
              from the correct weapon.{" "}
            </li>
            <li>
              For <strong>Elements</strong>, your guess and the correct weapon
              have <em>some overlap</em> in the elements.
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
        </div>
      </Modal>
      <Tooltip id="howtoplay" />
    </div>
  );
}

function Statistics({ statistics }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button
        onClick={openModal}
        data-tooltip-id="statistics"
        data-tooltip-content="Statistics"
        data-tooltip-place="bottom"
      >
        <Icon path={mdiPoll} size={1} color="var(--background-main)" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Statistics"
        className={{
          base: "modal container",
          afterOpen: "modal--after-open",
          beforeClose: "modal--before-close",
        }}
        overlayClassName="overlay"
        portalClassName="portal"
        closeTimeoutMS={150}
      >
        <h1 className="container-title">Statistics</h1>
        <button onClick={closeModal}>
          <Icon path={mdiClose} size={1} color="var(--border-color)" />
        </button>
        <div className="content section">
          <h2>Games Won</h2>
          <p className="stat">{statistics.gamesWon}</p>
          <h2>Average Guesses</h2>
          <p className="stat">{statistics.averageGuesses.toFixed(1)}</p>
          <h2>Current Streak</h2>
          <p className="stat">{statistics.currentStreak}</p>
          <h2>Max Streak</h2>
          <p className="stat">{statistics.maxStreak}</p>
        </div>
      </Modal>
      <Tooltip id="statistics" />
    </div>
  );
}

export default Infobar;
