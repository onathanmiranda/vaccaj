import { useEffect, useState } from "react";
import Logo from "../../atoms/logo";
import Button from "../../atoms/button";

import styles from "./styles.module.scss";

export default function Markup({ onInstall, onClose, visible = true }) {

  const [visibleClassName, setVisibleClassName] = useState();

  useEffect(() => {
    const timeout = visible ? 1000 : 0;
    const className = visible ? styles.visible : '';
    setTimeout(() => {
      setVisibleClassName(className);
    }, timeout);
  }, [setVisibleClassName, visible]);

  return (
    <aside className={`${styles.wrapper} ${visibleClassName}`}>
      <Logo className={styles.logo} />
      <div className={styles.buttonsWrapper}>
        <Button onClick={onInstall} className={styles.cta}>
          Instalar como app
        </Button>
        <Button className={styles.cta} outlined={true} onClick={onClose}>
          Agora não
        </Button>
      </div>
    </aside>
  );
}
