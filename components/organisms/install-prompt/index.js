import Markup from "./markup.jsx";

import useInstallPromptContext from "../../../hooks/useInstallPromptContext.js";

export default function InstallPrompt() {

  const { state: installPromptIsVisible, handleInstall, handleInstallClose } = useInstallPromptContext();

  return <>
    {<Markup onInstall={handleInstall} onClose={handleInstallClose} visible={installPromptIsVisible}/>}
  </>;
}
