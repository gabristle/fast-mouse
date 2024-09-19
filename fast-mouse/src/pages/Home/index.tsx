import Button from '../../components/Button'
import styles from './style.module.css'
import iconGoogle from '../../assets/icon-google.svg'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../services/firebase/config'
import Layout from '../../layouts'
import { useNavigate } from 'react-router-dom'
import { io, Socket } from 'socket.io-client'

interface HomeProps {
  setSocket: React.Dispatch<React.SetStateAction<Socket | undefined>>
}

function Home({ setSocket }: HomeProps) {
  const navigate = useNavigate()

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const token = await result.user.getIdToken()
      const socket = io('http://localhost:3000')
      socket.emit('set_user', {
        displayName: result.user.displayName,
        uid: result.user.uid
      })

      if(socket) {
        setSocket(socket)
      }
      
      navigate('/room')
      console.log('Token:', token, 'UID: ', result.user.uid)
    } catch (error) {
      console.error('Error ', error)
    }
  }

  return (
    <>
      <Layout>
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
      </Layout>
    </>
  )
}

export default Home