import styles from './style.module.css'

interface ButtonProps {
    text: string
    icon?: string
    type?: 'submit' | 'button'
    className?: string
    onClick?: () => void
}

function Button({ text, icon, type = 'button', onClick, className }: ButtonProps) {
  return (
    <>
      <button type={type} onClick={onClick} className={`${className} ${styles.button}`}>
        {icon && <img src={icon} className={styles.icon}></img>}
        {text}
      </button>
    </>
  )
}

export default Button