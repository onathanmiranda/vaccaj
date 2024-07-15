import CardExternalLink from '../../molecules/card-external-link';
import Navbar from '../../organisms/navbar';

import styles from './styles.module.scss';

export default function Karaoke({ tools = [] }) {
  if(!tools.length) return <></>

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <header className={styles.hero}>
          <h1>Ferramentas Externas</h1>
          <p>Ferramentas e plataformas externas que podem auxiliar o seu aprendizado.</p>
        </header>
        <ul className={styles.linksGrid}>
          {tools.map(({ id, title, href, description, image }) => (
            <li key={id}>
              <CardExternalLink src={image.src} description={description} title={title} href={href} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
