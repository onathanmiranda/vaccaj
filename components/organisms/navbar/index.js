import InstallPrompt from '../install-prompt'
import Menu from '../../molecules/menu'

import styles from './styles.module.scss'

export default function Navbar({ className = "" }){
  return (
    <header className={`${styles.header} ${className}`}>
      <InstallPrompt />
      <Menu />
    </header>
  )
}