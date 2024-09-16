import styles from './style.module.css'
import logo from '../../assets/logo.png'
import bgTop from '../../assets/bg-top.png'
import bgBottom from '../../assets/bg-bottom.png'

function Room() {
  return (
    <div>
        <img src={bgTop} alt="top background" className={styles.topBg} />
        <header className={styles.header}>
            <img src={logo}></img>
        </header>
        <main>
            <section>
            </section>
        </main>
        <footer className={styles.footer}>
        <p>coded with love by <a href={'https://github.com/gabristle'} className={styles.link}>gabristle</a></p>
        </footer>
        <img src={bgBottom} alt="bottom background" className={styles.bottomBg} />
    </div>
  )
}

export default Room