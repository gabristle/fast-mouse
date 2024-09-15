import Button from './components/Button'
import '../src/styles/index.css'
import addIcon from '../src/assets/icon-add.svg'
import logo from '../src/assets/logo.png'

function App() {

  return (
    <>
      <img src={logo}></img>
      <Button text={'Create a Room'} type={'button'} className={''} onClick={function (): void {
        throw new Error('Function not implemented.')
      } } icon={addIcon}></Button>
    </>
  )
}

export default App
