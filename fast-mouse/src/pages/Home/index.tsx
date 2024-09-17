import logo from '../../assets/logo.png'
import Button from '../../components/Button'
import styles from './style.module.css'
import bgTop from '../../assets/bg-top.png'
import bgBottom from '../../assets/bg-bottom.png'
import iconGoogle from '../../assets/icon-google.svg'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../services/firebase/config'

function Home() {
    const handleLogin = async () => {
        const provider = new GoogleAuthProvider()
        try {
          const result = await signInWithPopup(auth, provider)
          const token = await result.user.getIdToken()
          console.log('Token:', token)
        } catch (error) {
          console.error('Erro ao fazer login:', error)
        }
    }

  return (
    <div className={styles.body}>
        <img src={bgTop} alt="top background" className={styles.topBg} />
        <header className={styles.header}>
            <img src={logo}></img>
        </header>
        <main className={styles.mainContent}>
            <h2>Tired of waiting for your turn while the <span className={styles.raiseHand}>"raise hand"</span> button is stuck in slow motion?</h2>
            <h1>Fast Mouse is here to <span className={styles.saveTheDay}>save the day!</span></h1>
            <div className={styles.login}>
                <div className={styles.loginWith}>
                    <div className={styles.line}></div>
                    <p>Login with</p>
                    <div className={styles.line}></div>
                </div>
                <Button icon={iconGoogle} text={'Google'} onClick={handleLogin}></Button>
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