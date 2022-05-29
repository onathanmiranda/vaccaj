import Link from "../../atoms/link";

import Button from "../../atoms/button";

import styles from "./styles.module.scss";

export default function Markup({ onClick }) {
  return (
    <aside className={styles.wrapper}>
      <p>
        Ao clicar em “Aceitar Todos”, você concorda com o armazenamento de
        cookies no seu navegador para melhorar a navegação e a análise de uso do
        site. Você pode ler as políticas de privacidade e cookies do site{" "}
        <Link href="/politica-de-privacidade">aqui</Link>. <br />
        <br /> Você não é obrigado a aceitar os cookies, porém, ao recusá-los,
        as funcionalidades que dependem deles ficarão desativadas para você.
      </p>
      <div className={styles.buttonsWrapper}>
        <Button outlined={true} onClick={() => onClick(false)}>
          Recusar
        </Button>
        <Button onClick={() => onClick(true)}>Aceitar</Button>
      </div>
    </aside>
  );
}
