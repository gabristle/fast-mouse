import logo from '../../assets/logo.png'
import Button from '../../components/Button'
import styles from './style.module.css'
import iconAdd from '../../assets/icon-add.svg'
import iconEnter from '../../assets/icon-enter.png'
import bgTop from '../../assets/bg-top.png'
import bgBottom from '../../assets/bg-bottom.png'

function Home() {
  return (
    <div className={styles.body}>
        <img src={bgTop} alt="top background" className={styles.topBg} />
        <header className={styles.header}>
            <img src={logo}></img>
        </header>
        <main className={styles.mainContent}>
            <h2>Tired of waiting for your turn while the <span className={styles.raiseHand}>"raise hand"</span> button is stuck in slow motion?</h2>
            <h1>Fast Mouse is here to <span className={styles.saveTheDay}>save the day!</span></h1>
            <div className={styles.buttonsRow}>
                <Button icon={iconAdd} text={'Create a Room'} onClick={() => {return}} ></Button>
                <Button icon={iconEnter} text={'Enter a Room'} onClick={() => {return}} className={styles.enterButton}></Button>
            </div>
        </main>
        <footer className={styles.footer}>
            <p>coded with love by <a href={'https://github.com/gabristle'} className={styles.link}>gabristle</a></p>
        </footer>
        <img src={bgBottom} alt="bottom background" className={styles.bottomBg} />
    </div>
  )
}

export default Home