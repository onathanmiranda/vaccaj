import styles from './styles.module.scss';

export default function CardExternalLink({ href, title, description, src }){
  return (
    <a className={styles.card} href={href} title={title} rel="noopener noreferrer" target="_blank">
      <img src={src} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  )
}