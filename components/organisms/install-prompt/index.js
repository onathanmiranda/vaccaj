import Markup from "./markup.jsx";

export default function InstallPrompt({ onInstall, onClose }) {
  return <Markup onInstall={onInstall} onClose={onClose} />;
}
