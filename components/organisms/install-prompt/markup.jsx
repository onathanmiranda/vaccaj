import Logo from "../../atoms/logo";
import Button from "../../atoms/button";

import styles from "./styles.module.scss";

export default function Markup({ onInstall, onClose }) {
  return (
    <aside className={styles.wrapper}>
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
