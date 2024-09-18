import styles from './style.module.css'
import bgTop from '../assets/bg-top.png'
import bgBottom from '../assets/bg-bottom.png'
import logo from '../assets/logo.png'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  headerClass?: string
}

function Layout({ children, headerClass }: LayoutProps) {
  return (
    <div className={styles.body}>
        <img src={bgTop} alt="top background" className={styles.topBg} />
        <header className={`${styles.header} ${headerClass}`}>
            <img src={logo}></img>
        </header>
        {children}
       <img src={bgBottom} alt="bottom background" className={styles.bottomBg} /> 
    </div>
  )
}

export default Layout