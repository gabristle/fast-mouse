import styles from './style.module.css'
import Layout from '../../layouts'
import Button from '../../components/Button'
import iconUser from '../../assets/icon-user.png'
import iconOwner from '../../assets/icon-owner.png'
import { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'

interface RoomProps {
  socket: Socket | undefined
}

interface ConnectedUser {
  uid: string
  displayName: string
}

const Room: React.FC<RoomProps> = ({ socket }) => {
  const [users, setUsers] = useState<ConnectedUser[]>([])

  useEffect(() => {
    if (!socket) return

    const handleUsersUpdate = (data: ConnectedUser[]) => {
      setUsers(data)
    };

    socket.on('users', handleUsersUpdate)

    return () => {
      socket.off('users', handleUsersUpdate)
    };
  }, [socket])

  return (
    <>
      <Layout headerClass={styles.header}>
        <div className={styles.body}>
          <main className={styles.main}>
            <aside className={styles.aside}>
              <div className={styles.colleagues}>
                <div className={`${styles.owner} ${styles.person}`}>
                  <img src={iconUser} alt="" className={styles.iconUser}/>
                  <img src={iconOwner} alt="" className={styles.iconInfo}/>
                  <p>Gabriella Ribeiro</p>
                </div>
                {users && users.map((user, index) => {
                  return (
                    <div className={styles.person} key={index}>
                      <img src={iconUser} alt="" className={styles.iconUser}/>
                      <div className={styles.rank}>{index+1}</div>
                      <p>{user.displayName}</p>
                    </div>
                  )
                })}  
              </div> 
            </aside>
            <section className={styles.section}>
              <select name="" id="" className={styles.select}>
                <option value="5" className={styles.option}>5 colleagues</option>
                <option value="10" className={styles.option}>10 colleagues</option>
                <option value="15" className={styles.option}>15 colleagues</option>
                <option value="20" className={styles.option}>20 colleagues</option>
                <option value="25" className={styles.option}>25 colleagues</option>
                <option value="30" className={styles.option}>30 colleagues</option>
                <option value="35" className={styles.option}>35 colleagues</option>
                <option value="40" className={styles.option}>40 colleagues</option>
              </select>
              <h1 className={styles.howItWorks}>How it works?</h1>
              <div className={styles.instructions}>
                <p className={styles.text}><span>1. Share the Code:</span> After creating the room, share the code with your colleagues so they can join.</p>
                <p className={styles.text}><span>2. Start the Turn:</span> Once everyone is in, click "Start Turn" to kick things off.</p>
                <p className={styles.text}><span>3. Countdown:</span> A 3-second countdown will appear on everyone’s screen.</p>
                <p className={styles.text}><span>4. Raise Hands:</span> After the countdown, your team will click to raise their hands.</p>
                <p className={styles.text}><span>5. Rankings:</span> The list will automatically update based on who clicked first.</p>
                <p className={styles.callToAction}>Easy, fast and fun - <span>let the race begin!</span></p>
              </div>
              <Button text={'START TURN'} className={styles.button}></Button>
            </section>
          </main>
        </div>
      </Layout>
    </>
  )
}

export default Room