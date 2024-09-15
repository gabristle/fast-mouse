import logo from '../../assets/logo.png'
import Button from '../../components/Button'

function Home() {
  return (
    <>
        <header>
            <img src={logo}></img>
        </header>
        <main>
            <h2>Tired of waiting for your turn while the <span>"raise hand"</span> button is stuck in slow motion?</h2>
            <h1>Fast Mouse is here to <span>save the day!</span></h1>
            <div>
                <Button text={'Create a Room'} onClick={() => {return}} ></Button>
            </div>
        </main>
        <footer>
            <p>coded with <3 by <a>gabristle</a></p>
        </footer>
    </>
  )
}

export default Home