import { mdiReceiptText } from "@mdi/js";
import StyledModal from "./StyledModal";
import { entries } from "../../utils/changelog";
import ReactMarkdown from "react-markdown";

function Changelog() {
  return (
    <StyledModal icon={mdiReceiptText} title="Changelog" center>
      {entries.map((e) => (
        <section key={e.version} id={`v${e.version}`}>
          <header className="changelog-header">
            <h2>v{e.version}</h2>
            <p>-</p>
            <time>
              {new Date(e.date).toLocaleDateString(undefined, {
                timeZone: "UTC",
              })}
            </time>
          </header>
          <ReactMarkdown>{e.body}</ReactMarkdown>
        </section>
      ))}
    </StyledModal>
  );
}

export default Changelog;
