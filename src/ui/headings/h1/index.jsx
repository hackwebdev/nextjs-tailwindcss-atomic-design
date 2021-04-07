import styles from './styles.module.css'

export default function H1({ children }) {
  return <h1 className={styles.h1}>{children}</h1>
}
